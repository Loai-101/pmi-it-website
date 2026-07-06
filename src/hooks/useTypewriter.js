import { useState, useEffect, useRef, useCallback } from 'react';

const BASE_CHAR_DELAY = 48;

export const getCharDelay = (char) => {
  let delay = BASE_CHAR_DELAY + Math.random() * 12;

  if (char === '.' || char === '!' || char === '?') {
    delay += 180;
  } else if (char === ',') {
    delay += 90;
  } else if (char === ' ') {
    delay += 15;
  }

  return delay;
};

export const useTypewriter = (
  text,
  {
    threshold = 0.35,
    rootMargin = '0px 0px -40px 0px',
    enabled = true,
    startWhen = true,
    observeRef = null,
  } = {}
) => {
  const internalRef = useRef(null);
  const hasStarted = useRef(false);
  const typingTimer = useRef(null);

  const [hasEnteredView, setHasEnteredView] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  const setRef = useCallback(
    (node) => {
      internalRef.current = node;
    },
    []
  );

  useEffect(() => {
    if (!enabled) return undefined;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setCharIndex(text.length);
      setIsComplete(true);
      hasStarted.current = true;
      return undefined;
    }

    let observer;

    const attachObserver = () => {
      const element = observeRef?.current ?? internalRef.current;
      if (!element) return false;

      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setHasEnteredView(true);
          }
        },
        { threshold, rootMargin }
      );

      observer.observe(element);
      return true;
    };

    if (!attachObserver()) {
      const retryTimer = window.setTimeout(attachObserver, 50);
      return () => {
        clearTimeout(retryTimer);
        observer?.disconnect();
      };
    }

    return () => observer?.disconnect();
  }, [enabled, observeRef, threshold, rootMargin, text.length]);

  useEffect(() => {
    if (!enabled || !hasEnteredView || !startWhen || hasStarted.current) return undefined;

    hasStarted.current = true;
    setIsTyping(true);
    setCharIndex(0);
    setIsComplete(false);

    return undefined;
  }, [enabled, hasEnteredView, startWhen, text]);

  const scheduleNextChar = useCallback(
    (index) => {
      if (index >= text.length) {
        setIsComplete(true);
        setIsTyping(false);
        return;
      }

      const delay = getCharDelay(text[index - 1] ?? '');
      typingTimer.current = window.setTimeout(() => {
        setCharIndex(index + 1);
      }, delay);
    },
    [text]
  );

  useEffect(() => {
    if (!isTyping || isComplete) return undefined;

    if (charIndex === 0 && hasStarted.current) {
      scheduleNextChar(0);
      return () => {
        if (typingTimer.current) clearTimeout(typingTimer.current);
      };
    }

    if (charIndex > 0 && charIndex < text.length) {
      scheduleNextChar(charIndex);
    } else if (charIndex >= text.length) {
      setIsComplete(true);
      setIsTyping(false);
    }

    return () => {
      if (typingTimer.current) clearTimeout(typingTimer.current);
    };
  }, [charIndex, isTyping, isComplete, scheduleNextChar, text.length]);

  return {
    ref: setRef,
    charIndex,
    isComplete,
    isTyping,
    typedText: text.slice(0, charIndex),
  };
};
