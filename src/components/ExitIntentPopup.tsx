import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Gift, ArrowRight } from 'lucide-react';

const ExitIntentPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsOpen(true);
        setHasShown(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasShown]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-background/80 backdrop-blur-sm z-[100] flex items-center justify-center p-6"
        onClick={() => setIsOpen(false)}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="glass p-8 md:p-12 rounded-[2rem] max-w-lg w-full relative"
        >
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
          >
            <X size={20} />
          </button>

          {/* Icon */}
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-6">
            <Gift size={32} />
          </div>

          {/* Content */}
          <h3 className="text-2xl md:text-3xl font-black text-center mb-4">
            Espera! Temos um <span className="text-gradient">presente</span> para você
          </h3>
          
          <p className="text-muted-foreground text-center mb-8">
            Antes de ir, que tal um diagnóstico gratuito do seu negócio? 
            Vamos identificar oportunidades de automação sem compromisso.
          </p>

          {/* CTA */}
          <div className="space-y-4">
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all btn-glow"
            >
              Quero meu diagnóstico grátis <ArrowRight size={20} />
            </a>
            
            <button
              onClick={() => setIsOpen(false)}
              className="w-full text-muted-foreground hover:text-foreground text-sm font-medium transition-colors py-2"
            >
              Não, prefiro perder vendas
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ExitIntentPopup;
