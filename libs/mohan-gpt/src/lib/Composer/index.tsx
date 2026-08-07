import {
  useCallback, useLayoutEffect, useRef, useState, type ChangeEvent, type KeyboardEvent,
} from 'react';
import { IconArrowUp } from '../icons';
import * as S from './styles';

const MAX_HEIGHT = 116;

interface ComposerProps {
  onSend: (text: string) => void;
  disabled?: boolean;
  placeholder?: string;
  /** Set on the empty-state composer so the landing view takes focus first. */
  autoFocus?: boolean;
}

const Composer = ({
  onSend,
  disabled = false,
  placeholder = 'Ask anything about Mohan…',
  autoFocus = false,
}: ComposerProps) => {
  const [value, setValue] = useState('');
  const ref = useRef<HTMLTextAreaElement | null>(null);

  // Re-measure before paint so the box never flashes at the wrong height.
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.height = 'auto';
    el.style.height = `${Math.min(el.scrollHeight, MAX_HEIGHT)}px`;
  }, [value]);

  const active = value.trim().length > 0 && !disabled;

  const fire = useCallback(() => {
    const text = value.trim();
    if (!text || disabled) return;
    onSend(text);
    setValue('');
  }, [value, disabled, onSend]);

  const onKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      fire();
    }
  };

  return (
    <S.Shell>
      <S.Input
        ref={ref}
        rows={1}
        value={value}
        placeholder={placeholder}
        aria-label="Ask about Mohan"
        data-testid="composer-input"
        // The landing view is a single-purpose prompt; focusing it is the
        // expected chat behaviour, and it is off everywhere else.
        autoFocus={autoFocus}
        onChange={(event: ChangeEvent<HTMLTextAreaElement>) => setValue(event.target.value)}
        onKeyDown={onKeyDown}
      />
      <S.Send
        type="button"
        $active={active}
        disabled={!active}
        aria-label="Send"
        data-testid="composer-send"
        onClick={fire}
      >
        <IconArrowUp />
      </S.Send>
    </S.Shell>
  );
};

export default Composer;
