import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function AnimatedText({ text, className = '', style = {} }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px" });
  
  const words = text.split(" ");
  
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.04 * i },
    }),
  };
  
  const child = {
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { type: "spring", damping: 12, stiffness: 100 },
    },
    hidden: {
      opacity: 0,
      y: 20,
      filter: 'blur(10px)',
      transition: { type: "spring", damping: 12, stiffness: 100 },
    },
  };

  return (
    <motion.div
      ref={ref}
      style={{ overflow: "hidden", display: "flex", flexWrap: "wrap", columnGap: "0.2em", rowGap: "0.1em", ...style }}
      variants={container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {words.map((word, index) => (
        <motion.span variants={child} key={index} style={{ display: "inline-block" }}>
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}
