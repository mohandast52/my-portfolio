import {
  afterEach, beforeEach, describe, expect, it, jest,
} from '@jest/globals';
import { fireEvent, render, act } from '@testing-library/react';
import '@testing-library/jest-dom/jest-globals';
import MohanGPT from './index';
import { INTENTS, SUGGESTIONS } from './intents';
import { resolve } from './match';

// Mirrors the send pipeline in ./index: a 620ms thinking pause, then 3 chars
// every 16ms, then a 520ms delay before the rich component replaces its
// skeleton. Deriving these from the answer text keeps the tests honest when the
// copy changes.
const THINKING_MS = 620;
const REVEAL_MS = 520;
const streamMs = (text: string) => Math.ceil(text.length / 3) * 16;
/** Far enough to finish streaming, but short of the card reveal. */
const untilStreamed = (text: string) => THINKING_MS + streamMs(text) + 16;
const untilRevealed = (text: string) => untilStreamed(text) + REVEAL_MS;

describe('intent matcher', () => {
  it('routes every suggestion chip to its intended intent', () => {
    expect.hasAssertions();
    const expected = [
      'about',
      'experience',
      'specialization',
      'projects',
      'skills',
      'contact',
    ];
    SUGGESTIONS.forEach((question, index) => {
      expect(resolve(question)).toBe(expected[index]);
    });
  });

  it('matches free-typed variants, including straight apostrophes', () => {
    expect.hasAssertions();
    expect(resolve("what's his tech stack?")).toBe('skills');
    expect(resolve('Where has he worked?')).toBe('experience');
    expect(resolve('how many years of experience does he have')).toBe('years');
    expect(resolve('show me all projects')).toBe('allProjects');
    expect(resolve('is this a real AI?')).toBe('real');
    expect(resolve('what web3 work has he done')).toBe('web3');
  });

  it('short-circuits greetings and falls back on anything it does not know', () => {
    expect.hasAssertions();
    expect(resolve('hey there')).toBe('greeting');
    expect(resolve('Hello!')).toBe('greeting');
    expect(resolve('qwertyuiop asdfgh')).toBe('fallback');
    expect(resolve('')).toBe('fallback');
  });
});

describe('<MohanGPT />', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('renders the empty state with the hero and suggestion chips', () => {
    expect.hasAssertions();
    const { getByText, getByTestId } = render(<MohanGPT />);

    expect(getByTestId('mohan-gpt')).toHaveAttribute('data-theme', 'dark');
    expect(getByText('Mohan Das')).toBeInTheDocument();
    expect(getByText('I’m MohanGPT — ask me anything about Mohan’s work.')).toBeInTheDocument();
    SUGGESTIONS.forEach(suggestion => {
      expect(getByText(suggestion)).toBeInTheDocument();
    });
  });

  it('streams an answer and reveals its rich component', () => {
    expect.hasAssertions();
    const { getByText, getByTestId, queryByTestId } = render(<MohanGPT />);

    fireEvent.click(getByText('Who is Mohan?'));

    // Thinking dots first — no answer text yet.
    const thread = getByTestId('thread');
    expect(thread).toHaveTextContent('Who is Mohan?');
    expect(thread).not.toHaveTextContent('senior frontend engineer');

    // Thinking pause, then the character stream.
    act(() => {
      jest.advanceTimersByTime(untilStreamed(INTENTS.about.text));
    });
    expect(thread).toHaveTextContent('senior frontend engineer');
    // The card is still behind its shimmer skeleton.
    expect(getByTestId('skeleton')).toBeInTheDocument();

    // Reveal delay elapses → AboutCard replaces the skeleton.
    act(() => {
      jest.advanceTimersByTime(REVEAL_MS);
    });
    expect(queryByTestId('skeleton')).toBeNull();
    expect(thread).toHaveTextContent('Mumbai, India · Remote');
  });

  it('switches to the classic résumé view and back', () => {
    expect.hasAssertions();
    const { getByText, getByTestId, queryByTestId } = render(<MohanGPT />);

    fireEvent.click(getByText('View classic résumé'));
    expect(getByTestId('classic-view')).toBeInTheDocument();
    // The classic view lays out every project, not just the featured four.
    expect(getByTestId('classic-view')).toHaveTextContent('solid principles');

    fireEvent.click(getByText('Chat with MohanGPT instead'));
    expect(queryByTestId('classic-view')).toBeNull();
    expect(getByText('Or take the guided tour')).toBeInTheDocument();
  });

  it('runs the guided tour with a step indicator', () => {
    expect.hasAssertions();
    const { getByText, getByTestId } = render(<MohanGPT />);

    fireEvent.click(getByText('Or take the guided tour'));
    act(() => {
      jest.advanceTimersByTime(untilRevealed(INTENTS.about.text));
    });

    const thread = getByTestId('thread');
    expect(thread).toHaveTextContent('1 of 5');

    fireEvent.click(getByText('Next'));
    act(() => {
      jest.advanceTimersByTime(untilRevealed(INTENTS.experience.text));
    });
    expect(thread).toHaveTextContent('2 of 5');
  });

  it('falls back honestly on a question it cannot answer', () => {
    expect.hasAssertions();
    const { getByTestId } = render(<MohanGPT />);

    const input = getByTestId('composer-input');
    fireEvent.change(input, { target: { value: 'qwertyuiop asdfgh' } });
    fireEvent.click(getByTestId('composer-send'));

    act(() => {
      jest.advanceTimersByTime(untilRevealed(INTENTS.fallback.text));
    });
    expect(getByTestId('thread')).toHaveTextContent('I stick strictly to what’s on his résumé');
  });
});
