import React, { useEffect, useRef, useState } from 'react';
import { useTypewriter } from '../hooks/useTypewriter';
import './TypewriterText.css';

const TypewriterText = ({
  text,
  as: Tag = 'span',
  className = '',
  id,
  enabled = true,
  startWhen = true,
  observeRef,
  hideCursorAfterMs = 2000,
  onComplete,
  'aria-label': ariaLabel,
}) => {
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  const { ref, typedText, isComplete, isTyping, charIndex } = useTypewriter(text, {
    enabled,
    startWhen,
    observeRef,
  });

  const [cursorHidden, setCursorHidden] = useState(false);
  const hasCalledComplete = useRef(false);

  useEffect(() => {
    if (!isComplete || hasCalledComplete.current) return undefined;
    hasCalledComplete.current = true;
    onCompleteRef.current?.();

    if (hideCursorAfterMs <= 0) return undefined;

    const timer = window.setTimeout(() => {
      setCursorHidden(true);
    }, hideCursorAfterMs);

    return () => clearTimeout(timer);
  }, [isComplete, hideCursorAfterMs]);

  const showCursor =
    enabled && (charIndex > 0 || isTyping) && (!isComplete || !cursorHidden);

  return (
    <Tag
      ref={observeRef ? undefined : ref}
      className={className}
      id={id}
      aria-label={ariaLabel || text}
    >
      {typedText}
      {showCursor && (
        <span
          className={`typewriter-cursor ${isComplete ? 'typewriter-cursor--complete' : ''}`}
          aria-hidden="true"
        />
      )}
    </Tag>
  );
};

export default TypewriterText;
