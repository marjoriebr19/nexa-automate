import React from 'react';
import { motion } from 'framer-motion';
import { painPoints } from '@/data/site-content';
import SectionHeader from './ui/SectionHeader';

const PainPoints = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          tag="Isso soa familiar?"
          tagColor="destructive"
          title="Você está"
          gradientTitle="perdendo dinheiro"
          description="Se você reconhece algum desses problemas, está na hora de automatizar."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {painPoints.map((pain, index) => (
            <motion.div
              key={pain.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-6 rounded-2xl border-destructive/20 hover:border-destructive/40 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center text-destructive mb-4 group-hover:bg-destructive/20 transition-colors">
                {pain.icon}
              </div>
              <h3 className="text-lg font-bold mb-2">{pain.title}</h3>
              <p className="text-muted-foreground text-sm">{pain.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
