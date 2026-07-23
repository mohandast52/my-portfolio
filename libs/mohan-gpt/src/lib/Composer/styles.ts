import styled from 'styled-components';
import { focusRing } from '../tokens';

export const Shell = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 8px;
  width: 100%;
  background: var(--panel);
  border: 1px solid var(--composer-border);
  border-radius: 16px;
  padding: 10px 10px 10px 16px;
  box-shadow: 0 1px 3px var(--shadow);
  transition: border-color 0.15s;

  &:focus-within {
    border-color: var(--accent);
  }
`;

export const Input = styled.textarea`
  flex: 1;
  resize: none;
  border: none;
  outline: none;
  background: transparent;
  color: var(--text);
  font-family: var(--font-sans);
  font-size: 14.5px;
  line-height: 1.5;
  /* 1 row, growing to 4 before it scrolls. */
  max-height: 116px;
  padding: 5px 0;
  overflow-y: auto;

  &::placeholder {
    color: var(--faint);
  }
`;

export const Send = styled.button<{ $active: boolean }>`
  flex: 0 0 auto;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 10px;
  cursor: ${({ $active }) => ($active ? 'pointer' : 'default')};
  transition: background 0.15s, color 0.15s;
  background: ${({ $active }) => ($active ? 'var(--accent)' : 'var(--elevated)')};
  color: ${({ $active }) => ($active ? 'var(--on-accent)' : 'var(--faint)')};
  ${focusRing};

  &:hover:not(:disabled) {
    background: var(--accent-strong);
  }
`;
