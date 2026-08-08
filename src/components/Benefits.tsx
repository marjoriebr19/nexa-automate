import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const benefits = [
  {
    icon: <CheckCircle2 size={28} />,
    title: "Visibilidade 24/7",
    desc: "Seu negócio disponível o tempo todo, acessível de qualquer lugar.",
    stat: "24/7",
    statLabel: "ativo"
  },
  {
    icon: <CheckCircle2 size={28} />,
    title: "Credibilidade e Confiança",
    desc: "Sites profissionais geram mais confiança e destacam sua marca.",
    stat: "100%",
    statLabel: "profissional"
  },
  {
    icon: <CheckCircle2 size={28} />,
    title: "Alcance Global",
    desc: "Expanda sua audiência além das fronteiras físicas.",
    stat: "∞",
    statLabel: "alcance"
  },
  {
    icon: <CheckCircle2 size={28} />,
    title: "Facilidade de Comunicação",
    desc: "Ofereça canais de contato direto com seus clientes.",
    stat: "Zap",
    statLabel: "contato"
  },
  {
    icon: <CheckCircle2 size={28} />,
    title: "Oportunidade de Vendas",
    desc: "Converta visitantes em clientes com um site otimizado e de alta performance.",
    stat: "ROI",
    statLabel: "vendas"
  }
];

const Benefits = () => {
  return (
    <section className="section-padding relative overflow-hidden bg-primary/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary text-xs font-black uppercase tracking-ultra-wide mb-4">
            Oferta especial
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tighter mb-6">
            Por que ter um <span className="text-gradient">SITE?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Transforme seu negócio com automação inteligente e resultados reais.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-8 rounded-[2rem] card-hover group"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                  {benefit.icon}
                </div>
                <div className="text-right">
                  <div className="text-2xl font-black text-gradient">{benefit.stat}</div>
                  <div className="text-xs text-muted-foreground">{benefit.statLabel}</div>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground text-sm">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
