import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, Lock, CheckCircle2, Zap, HeartHandshake } from 'lucide-react';

const badges = [
  { icon: <Shield size={24} />, label: 'Garantia 30 Dias' },
  { icon: <Award size={24} />, label: 'Certificado Google' },
  { icon: <Lock size={24} />, label: 'Dados Seguros' },
  { icon: <CheckCircle2 size={24} />, label: 'LGPD Compliant' },
  { icon: <Zap size={24} />, label: 'Suporte Premium' },
  { icon: <HeartHandshake size={24} />, label: '+500 Clientes' },
];

const TrustBadges = () => {
  return (
    <section className="py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-6 md:gap-10"
        >
          {badges.map((badge, index) => (
            <motion.div
              key={badge.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <div className="text-primary">{badge.icon}</div>
              <span className="text-xs font-bold uppercase tracking-wide">{badge.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustBadges;
