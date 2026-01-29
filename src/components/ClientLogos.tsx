import React from 'react';
import { motion } from 'framer-motion';

const logos = [
  { name: 'TechCorp', initials: 'TC' },
  { name: 'Innovate', initials: 'IN' },
  { name: 'GlobalMax', initials: 'GM' },
  { name: 'PrimeSol', initials: 'PS' },
  { name: 'NextGen', initials: 'NG' },
  { name: 'FutureTech', initials: 'FT' },
];

const ClientLogos = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xs font-bold uppercase tracking-ultra-wide text-muted-foreground mb-8"
        >
          Empresas que confiam na NEXAUTOMA
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-16"
        >
          {logos.map((logo, index) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="w-24 h-12 glass rounded-xl flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/20 transition-all cursor-default"
            >
              <span className="text-lg font-black tracking-wider">{logo.initials}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ClientLogos;
