import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './AddValueQuote.css';

const FULL_TEXT =
  'Add Value is more than our philosophy. It is the foundation of every solution we design, every system we build, and every partnership we create. Through innovation, expertise, and technology, we help organizations achieve measurable growth and lasting success.';

const TYPEWRITER_PREFIX = 'Add Value ';
const TYPEWRITER_TEXT = FULL_TEXT.startsWith(TYPEWRITER_PREFIX)
  ? FULL_TEXT.slice(TYPEWRITER_PREFIX.length).replace(/^i/, 'I')
  : FULL_TEXT;

const BASE_CHAR_DELAY = 42;

const getCharDelay = (char) => {
  let delay = BASE_CHAR_DELAY + Math.random() * 8;

  if (char === '.' || char === '!' || char === '?') {
    delay += 220;
  } else if (char === ',') {
    delay += 100;
  } else if (char === ' ') {
    delay += 18;
  }

  return delay;
};

const renderTypedContent = (text) => (
  <span className="add-value-typewriter-body">{text}</span>
);

const AddValueQuote = () => {
  const sectionRef = useRef(null);
  const hasStarted = useRef(false);
  const typingTimer = useRef(null);

  const [hasEnteredView, setHasEnteredView] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const typedText = TYPEWRITER_TEXT.slice(0, charIndex);

  const scheduleNextChar = useCallback((index) => {
    if (index >= TYPEWRITER_TEXT.length) {
      setIsComplete(true);
      return;
    }

    const delay = getCharDelay(TYPEWRITER_TEXT[index - 1] ?? '');
    typingTimer.current = window.setTimeout(() => {
      setCharIndex(index + 1);
    }, delay);
  }, []);

  const revealSection = useCallback(() => {
    if (hasStarted.current) return;
    hasStarted.current = true;
    setHasEnteredView(true);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const rect = section.getBoundingClientRect();
    const isAlreadyVisible = rect.top < window.innerHeight * 0.85 && rect.bottom > 0;

    if (prefersReducedMotion || isAlreadyVisible) {
      revealSection();
      if (prefersReducedMotion) {
        setCharIndex(TYPEWRITER_TEXT.length);
        setIsComplete(true);
      }
      if (prefersReducedMotion) return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          revealSection();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -10% 0px' }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [revealSection]);

  useEffect(() => {
    if (!hasEnteredView || isComplete) return undefined;

    if (charIndex === 0) {
      scheduleNextChar(0);
      return () => {
        if (typingTimer.current) clearTimeout(typingTimer.current);
      };
    }

    if (charIndex < TYPEWRITER_TEXT.length) {
      scheduleNextChar(charIndex);
    } else {
      setIsComplete(true);
    }

    return () => {
      if (typingTimer.current) clearTimeout(typingTimer.current);
    };
  }, [hasEnteredView, charIndex, isComplete, scheduleNextChar]);

  return (
    <section
      ref={sectionRef}
      className="add-value-quote"
      aria-label="Adding Value quote"
    >
      <div className="add-value-quote-bg" aria-hidden="true" />

      <div className="add-value-quote-inner">
        <motion.p
          className="add-value-title"
          role="heading"
          aria-level="2"
          initial={{ opacity: 0, y: 20 }}
          animate={hasEnteredView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          Adding Value
        </motion.p>

        <motion.span
          className="quote-mark quote-mark-open"
          aria-hidden="true"
          initial={{ opacity: 0, y: 12 }}
          animate={hasEnteredView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        >
          &ldquo;
        </motion.span>

        <blockquote className="add-value-text" cite="PMI IT Solutions">
          <p className="add-value-typewriter" aria-label={FULL_TEXT}>
            <span className="add-value-typewriter-content">
              {renderTypedContent(typedText)}
            </span>
            <span
              className={`typewriter-cursor ${isComplete ? 'typewriter-cursor--complete' : ''}`}
              aria-hidden="true"
            />
          </p>
        </blockquote>

        <AnimatePresence>
          {isComplete && (
            <motion.cite
              className="add-value-author"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            >
              PMI IT Solutions
            </motion.cite>
          )}
        </AnimatePresence>

        <motion.span
          className="quote-mark quote-mark-close"
          aria-hidden="true"
          initial={{ opacity: 0 }}
          animate={isComplete ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        >
          &rdquo;
        </motion.span>
      </div>
    </section>
  );
};

export default AddValueQuote;
