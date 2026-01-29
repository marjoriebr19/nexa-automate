import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, UserPlus, Star, Bell } from 'lucide-react';

const activities = [
  { icon: <ShoppingCart size={14} />, text: "Carlos de São Paulo fechou um contrato", time: "agora" },
  { icon: <UserPlus size={14} />, text: "Maria se cadastrou para diagnóstico", time: "2 min" },
  { icon: <Star size={14} />, text: "João avaliou com 5 estrelas", time: "5 min" },
  { icon: <ShoppingCart size={14} />, text: "Ana de Curitiba contratou o plano Pro", time: "8 min" },
  { icon: <UserPlus size={14} />, text: "Pedro solicitou uma demonstração", time: "12 min" },
  { icon: <Star size={14} />, text: "Empresa XYZ renovou contrato", time: "15 min" },
];

const ActivityFeed = () => {
  const [currentActivity, setCurrentActivity] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => setIsVisible(true), 5000);
    return () => clearTimeout(showTimer);
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentActivity((prev) => (prev + 1) % activities.length);
        setIsVisible(true);
      }, 500);
    }, 6000);

    return () => clearInterval(interval);
  }, [isVisible]);

  const activity = activities[currentActivity];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          className="fixed bottom-6 left-6 z-50 hidden md:block"
        >
          <div className="glass px-4 py-3 rounded-2xl flex items-center gap-3 shadow-xl">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              {activity.icon}
            </div>
            <div>
              <p className="text-sm font-medium">{activity.text}</p>
              <p className="text-xs text-muted-foreground">{activity.time}</p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ActivityFeed;
