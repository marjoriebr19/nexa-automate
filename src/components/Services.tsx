import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { services } from '@/data/site-content';
import SectionHeader from './ui/SectionHeader';

const Services = () => {
  return (
    <section id="services" className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          tag="Orçamento Grátis"
          title="Vamos Construir o Seu"
          gradientTitle="Sucesso Digital"
          description="Ferramentas poderosas para automatizar suas vendas e escalar seu negócio."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-10 rounded-[2.5rem] card-hover group"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                  {service.icon}
                </div>
                <ArrowUpRight 
                  size={24} 
                  className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" 
                />
              </div>
              
              <h3 className="text-xl sm:text-2xl font-black mb-3 tracking-tight">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground text-sm sm:text-base mb-6 leading-relaxed">
                {service.desc}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature) => (
                  <span 
                    key={feature}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground bg-secondary px-3 py-1.5 rounded-full"
                  >
                    <CheckCircle2 size={12} className="text-primary" />
                    {feature}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
