import styled from 'styled-components';
import {
  blink, dot, fadeUp, focusRing, skeletonFill,
} from '../tokens';

export const Scroll = styled.div`
  flex: 1;
  overflow-y: auto;
`;

export const Inner = styled.div`
  max-width: 760px;
  margin: 0 auto;
  padding: 20px 20px 8px;
`;

export const UserRow = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 10px 0;
`;

export const UserBubble = styled.div`
  max-width: 80%;
  background: var(--user-bubble);
  border: 1px solid var(--border);
  border-radius: 16px 16px 5px 16px;
  padding: 10px 15px;
  font-size: 14.5px;
  line-height: 1.5;
  white-space: pre-wrap;
`;

export const AgentRow = styled.div`
  display: flex;
  gap: 12px;
  padding: 14px 0;
  animation: ${fadeUp} 0.28s ease;
`;

export const Avatar = styled.div`
  flex: 0 0 auto;
  width: 29px;
  height: 29px;
  border-radius: 8px;
  background: var(--accent);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 15px;
`;

export const AgentCol = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-top: 2px;
`;

export const AgentName = styled.span`
  font-size: 13px;
  font-weight: 600;
  color: var(--text);
`;

export const Dots = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  height: 20px;
`;

export const Dot = styled.span<{ $delay: string }>`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--faint);
  animation: ${dot} 1.2s infinite;
  animation-delay: ${({ $delay }) => $delay};
`;

export const AgentText = styled.div`
  font-size: 14.5px;
  line-height: 1.65;
  color: var(--text);
  white-space: pre-wrap;
`;

export const Cursor = styled.span`
  display: inline-block;
  width: 7px;
  height: 15px;
  background: var(--accent);
  margin-left: 2px;
  border-radius: 1px;
  vertical-align: text-bottom;
  animation: ${blink} 1s step-end infinite;
`;

export const Skeleton = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 2px;
`;

export const SkeletonBlock = styled.div`
  height: 132px;
  border-radius: 14px;
  ${skeletonFill};
`;

export const SkeletonBar = styled.div`
  height: 14px;
  width: 55%;
  border-radius: 6px;
  ${skeletonFill};
`;

/**
 * The component mounts hidden and is revealed once `compReady` flips, so the
 * shimmer skeleton bridges the gap with no empty-box flash.
 */
export const CompWrap = styled.div<{ $ready: boolean }>`
  ${({ $ready }) => ($ready
    ? 'margin-top: 2px;'
    : 'height: 0; overflow: hidden; opacity: 0; pointer-events: none;')};
`;

export const TourRow = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 2px;
`;

export const TourNext = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 14px;
  border-radius: 9px;
  border: none;
  background: var(--accent);
  color: var(--on-accent);
  font-family: var(--font-sans);
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  ${focusRing};

  &:hover:not(:disabled) {
    background: var(--accent-strong);
  }

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`;

export const TourSkip = styled.button`
  padding: 8px 12px;
  border-radius: 9px;
  border: 1px solid var(--border);
  background: transparent;
  color: var(--muted);
  font-family: var(--font-sans);
  font-size: 13px;
  cursor: pointer;
  ${focusRing};

  &:hover {
    color: var(--text);
  }
`;

export const TourExit = styled.button`
  padding: 8px 12px;
  border-radius: 9px;
  border: none;
  background: transparent;
  color: var(--faint);
  font-family: var(--font-sans);
  font-size: 13px;
  cursor: pointer;
  ${focusRing};

  &:hover {
    color: var(--text);
  }
`;

export const StepText = styled.span`
  margin-left: auto;
  font-family: var(--font-mono);
  font-size: 11.5px;
  color: var(--faint);
`;

export const FollowupRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 2px;
`;

export const FollowupChip = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: var(--font-sans);
  font-size: 12.5px;
  color: var(--muted);
  background: transparent;
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 6px 12px;
  cursor: pointer;
  transition: border-color 0.15s, color 0.15s;
  ${focusRing};

  &:hover {
    border-color: var(--accent);
    color: var(--text);
  }

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`;
