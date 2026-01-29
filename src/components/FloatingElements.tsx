import React from 'react';
import { motion } from 'framer-motion';

const FloatingElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Gradient Orbs */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-1/4 -left-32 w-64 h-64 bg-primary/10 rounded-full blur-[100px]"
      />
      
      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-1/2 -right-32 w-80 h-80 bg-accent/10 rounded-full blur-[120px]"
      />
      
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-primary/5 rounded-full blur-[80px]"
      />

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }}
      />
    </div>
  );
};

export default FloatingElements;
