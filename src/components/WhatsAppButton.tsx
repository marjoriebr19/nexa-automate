import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      setTimeout(() => setShowTooltip(true), 1000);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showTooltip) {
      const timer = setTimeout(() => setShowTooltip(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [showTooltip]);

  const handleClick = () => {
    window.open('https://wa.me/5511999999999?text=Olá! Vim pelo site e gostaria de saber mais sobre os serviços.', '_blank');
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          className="fixed bottom-6 right-6 z-50"
        >
          {/* Tooltip */}
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="absolute bottom-full right-0 mb-3 glass px-4 py-3 rounded-2xl rounded-br-none whitespace-nowrap"
              >
                <button
                  onClick={() => setShowTooltip(false)}
                  className="absolute -top-2 -right-2 w-5 h-5 bg-muted rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground"
                >
                  <X size={12} />
                </button>
                <p className="text-sm font-bold">Precisa de ajuda? 💬</p>
                <p className="text-xs text-muted-foreground">Fale com nossa equipe agora!</p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Button */}
          <motion.button
            onClick={handleClick}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-16 h-16 bg-[#25D366] hover:bg-[#20BA5C] rounded-full flex items-center justify-center shadow-2xl shadow-[#25D366]/30"
          >
            <MessageCircle size={28} className="text-white fill-white" />
          </motion.button>

          {/* Pulse Animation */}
          <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30 pointer-events-none" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WhatsAppButton;
