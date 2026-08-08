import React from 'react';
import { motion } from 'framer-motion';
import { steps } from '@/data/site-content';
import SectionHeader from './ui/SectionHeader';

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section-padding relative overflow-hidden bg-primary/5">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          tag="Como Funciona"
          title="4 passos para"
          gradientTitle="escalar vendas"
          description="Processo simples e rápido. Resultados em 30 dias ou menos."
        />

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative"
              >
                <div className="glass p-8 rounded-3xl card-hover h-full">
                  <div className="absolute -top-4 left-8 bg-primary text-primary-foreground text-xs font-black px-3 py-1 rounded-full">
                    {step.number}
                  </div>
                  
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 mt-2">
                    {step.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
