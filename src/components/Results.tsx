import React from 'react';
import { motion } from 'framer-motion';
import { Star, TrendingUp, Users, Clock } from 'lucide-react';

const stats = [
  { value: '347%', label: 'Aumento médio em conversões', icon: <TrendingUp size={24} /> },
  { value: '24/7', label: 'Atendimento automático', icon: <Clock size={24} /> },
  { value: '2.8s', label: 'Tempo médio de resposta', icon: <Star size={24} /> },
  { value: '+500', label: 'Empresas atendidas', icon: <Users size={24} /> },
];

const testimonials = [
  {
    name: 'Carlos Mendes',
    role: 'CEO, TechSolutions',
    content: 'Em 30 dias triplicamos nosso faturamento. A IA no WhatsApp responde melhor que qualquer vendedor que já contratei.',
    rating: 5,
  },
  {
    name: 'Ana Paula Silva',
    role: 'Fundadora, Bella Estética',
    content: 'Passei de 20 agendamentos/mês para 180. A landing page + automação mudaram completamente meu negócio.',
    rating: 5,
  },
  {
    name: 'Roberto Alves',
    role: 'Diretor, Imóveis Premium',
    content: 'O Google Meu Negócio otimizado trouxe 40% mais visitas presenciais. ROI absurdo em 2 meses.',
    rating: 5,
  },
];

const Results = () => {
  return (
    <section id="results" className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-6 sm:p-8 rounded-3xl text-center card-hover"
            >
              <div className="text-primary mb-4 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-3xl sm:text-4xl md:text-5xl font-black text-gradient mb-2">
                {stat.value}
              </div>
              <p className="text-muted-foreground text-xs sm:text-sm font-semibold">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block text-primary text-xs font-black uppercase tracking-ultra-wide mb-4">
            Depoimentos
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-ultra-tight">
            Resultados <span className="text-gradient">Reais</span>
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-6 sm:p-8 rounded-3xl card-hover"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-primary text-primary" />
                ))}
              </div>
              
              {/* Content */}
              <p className="text-foreground text-sm sm:text-base mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-bold text-sm">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-bold text-sm">{testimonial.name}</p>
                  <p className="text-muted-foreground text-xs">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;