import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Settings, Rocket, TrendingUp } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: <MessageSquare size={28} />,
    title: 'Diagnóstico Gratuito',
    desc: 'Analisamos seu negócio, identificamos gargalos e oportunidades de automação.'
  },
  {
    number: '02',
    icon: <Settings size={28} />,
    title: 'Implementação',
    desc: 'Configuramos sua IA de vendas, landing page e otimização do Google em até 7 dias.'
  },
  {
    number: '03',
    icon: <Rocket size={28} />,
    title: 'Lançamento',
    desc: 'Ativamos seu ecossistema de vendas automáticas e iniciamos a captação de leads.'
  },
  {
    number: '04',
    icon: <TrendingUp size={28} />,
    title: 'Otimização Contínua',
    desc: 'Monitoramos métricas e otimizamos constantemente para maximizar resultados.'
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section-padding relative overflow-hidden bg-primary/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary text-xs font-black uppercase tracking-ultra-wide mb-4">
            Como Funciona
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-ultra-tight mb-6">
            4 passos para <span className="text-gradient">escalar vendas</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Processo simples e rápido. Resultados em 30 dias ou menos.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
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
                  {/* Step Number */}
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
