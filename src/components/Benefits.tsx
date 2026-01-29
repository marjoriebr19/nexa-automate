import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Target, Clock, TrendingUp, Shield, Sparkles } from 'lucide-react';

const benefits = [
  {
    icon: <Clock size={28} />,
    title: "Atendimento 24/7",
    desc: "Nunca mais perca um lead por falta de resposta. IA atende instantaneamente.",
    stat: "2.8s",
    statLabel: "tempo de resposta"
  },
  {
    icon: <TrendingUp size={28} />,
    title: "Aumento de Conversão",
    desc: "Transforme visitantes em clientes com páginas otimizadas para vender.",
    stat: "347%",
    statLabel: "mais conversões"
  },
  {
    icon: <Target size={28} />,
    title: "Leads Qualificados",
    desc: "IA identifica e prioriza os leads mais propensos a comprar.",
    stat: "89%",
    statLabel: "precisão"
  },
  {
    icon: <Rocket size={28} />,
    title: "Escala Ilimitada",
    desc: "Atenda 1 ou 1000 leads simultaneamente sem aumentar custos.",
    stat: "∞",
    statLabel: "escalabilidade"
  },
  {
    icon: <Shield size={28} />,
    title: "ROI Garantido",
    desc: "Resultados mensuráveis e comprovados desde o primeiro mês.",
    stat: "30",
    statLabel: "dias p/ resultados"
  },
  {
    icon: <Sparkles size={28} />,
    title: "Tecnologia de Ponta",
    desc: "IA treinada especificamente para o seu negócio e mercado.",
    stat: "100%",
    statLabel: "personalizado"
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
            Benefícios
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-ultra-tight mb-6">
            O que você <span className="text-gradient">vai ganhar</span>
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
              className="glass p-8 rounded-3xl card-hover group"
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
