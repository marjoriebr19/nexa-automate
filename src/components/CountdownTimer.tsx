import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set a recurring target date (e.g., 7 days from now)
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 7);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance < 0) {
        // Reset if reached
        targetDate.setDate(new Date().getDate() + 7);
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: 'DIAS', value: timeLeft.days },
    { label: 'H', value: timeLeft.hours },
    { label: 'MIN', value: timeLeft.minutes },
    { label: 'SEG', value: timeLeft.seconds }
  ];

  return (
    <div className="flex items-center gap-2 md:gap-4 bg-primary px-4 py-2 rounded-xl text-primary-foreground font-black shadow-lg">
      <span className="text-[10px] md:text-xs uppercase tracking-tighter mr-2 hidden sm:inline">Oferta expira em:</span>
      <div className="flex items-center gap-2">
        {timeUnits.map((unit, index) => (
          <React.Fragment key={unit.label}>
            <div className="flex flex-col items-center min-w-[30px]">
              <span className="text-base md:text-lg leading-none">{unit.value.toString().padStart(2, '0')}</span>
              <span className="text-[8px] md:text-[9px] opacity-70">{unit.label}</span>
            </div>
            {index < timeUnits.length - 1 && <span className="text-base md:text-lg leading-none">:</span>}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;
