"use client"

import { motion } from 'framer-motion';

interface TextRevealProps {
  children: React.ReactNode;
}

const TextReveal: React.FC<TextRevealProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="text-reveal"
    >
      {children}
    </motion.div>
  );
};

export default TextReveal;