import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Carlos Mendes',
    role: 'CEO, TechSolutions',
    content: 'Em 30 dias triplicamos nosso faturamento. A IA no WhatsApp responde melhor que qualquer vendedor que já contratei.',
    rating: 5,
    result: '+300% vendas'
  },
  {
    name: 'Ana Paula Silva',
    role: 'Fundadora, Bella Estética',
    content: 'Passei de 20 agendamentos/mês para 180. A landing page + automação mudaram completamente meu negócio.',
    rating: 5,
    result: '+800% agendamentos'
  },
  {
    name: 'Roberto Alves',
    role: 'Diretor, Imóveis Premium',
    content: 'O Google Meu Negócio otimizado trouxe 40% mais visitas presenciais. ROI absurdo em 2 meses.',
    rating: 5,
    result: '+40% visitas'
  },
  {
    name: 'Mariana Costa',
    role: 'Proprietária, Clínica Vida',
    content: 'A IA qualifica os pacientes antes de chegarem. Economizamos 3h por dia e dobramos o faturamento.',
    rating: 5,
    result: '+100% faturamento'
  },
  {
    name: 'Fernando Lima',
    role: 'Dono, Auto Center Plus',
    content: 'Antes perdia 70% dos orçamentos por demora. Agora a IA responde em segundos e fechamos muito mais.',
    rating: 5,
    result: '+250% conversão'
  },
  {
    name: 'Juliana Santos',
    role: 'Gerente, Academia FitMax',
    content: 'O quiz interativo triplicou nossas matrículas. Os leads já chegam qualificados e prontos para fechar.',
    rating: 5,
    result: '+200% matrículas'
  }
];

const SocialProof = () => {
  return (
    <section id="results" className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary text-xs font-black uppercase tracking-ultra-wide mb-4">
            Depoimentos
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-ultra-tight mb-6">
            Resultados <span className="text-gradient">Reais</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Veja o que nossos clientes estão dizendo sobre a transformação.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-6 rounded-3xl card-hover relative"
            >
              {/* Result Badge */}
              <div className="absolute -top-3 right-6 bg-primary text-primary-foreground text-xs font-black px-3 py-1 rounded-full">
                {testimonial.result}
              </div>

              {/* Quote Icon */}
              <div className="text-primary/20 mb-4">
                <Quote size={32} />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-primary text-primary" />
                ))}
              </div>
              
              {/* Content */}
              <p className="text-foreground text-sm mb-6 leading-relaxed">
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

export default SocialProof;
