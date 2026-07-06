import React from 'react';
import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0, y: 48 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const SectionReveal = ({ id, children, className = '', disableAnimation = false }) => {
  if (disableAnimation) {
    return (
      <section id={id} className={`page-section ${className}`.trim()}>
        {children}
      </section>
    );
  }

  return (
    <motion.section
      id={id}
      className={`page-section ${className}`.trim()}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={sectionVariants}
    >
      {children}
    </motion.section>
  );
};

export const RevealItem = ({ children, className = '' }) => (
  <motion.div
    className={className}
    variants={{
      hidden: { opacity: 0, y: 28 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
      },
    }}
  >
    {children}
  </motion.div>
);

export default SectionReveal;
