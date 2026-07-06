import React, { useRef } from 'react';
import TypewriterText from './TypewriterText';
import './SectionTitle.css';
import './TypewriterText.css';

const AnimatedSectionTitle = ({
  title,
  subtitle,
  as: Tag = 'h2',
  id,
  className = '',
  animate = true,
  startWhen = true,
  observeRef,
}) => {
  const blockRef = useRef(null);
  const observerTarget = observeRef || blockRef;

  if (!animate) {
    return (
      <header className={`section-title-block ${className}`.trim()}>
        <Tag className="section-title" id={id}>
          {title}
        </Tag>
        {subtitle ? <p className="section-title-subtitle">{subtitle}</p> : null}
      </header>
    );
  }

  return (
    <header ref={blockRef} className={`section-title-block ${className}`.trim()}>
      <TypewriterText
        as={Tag}
        text={title}
        id={id}
        className="section-title"
        enabled={animate}
        startWhen={startWhen}
        observeRef={observerTarget}
      />
      {subtitle ? <p className="section-title-subtitle">{subtitle}</p> : null}
    </header>
  );
};

export default AnimatedSectionTitle;
