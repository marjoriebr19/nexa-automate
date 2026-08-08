import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { testimonials } from '@/data/site-content';
import SectionHeader from './ui/SectionHeader';

const SocialProof = () => {
  return (
    <section id="results" className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          tag="Depoimentos"
          title="Resultados"
          gradientTitle="Reais"
          description="Veja o que nossos clientes estão dizendo sobre a transformação."
        />

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
              <div className="absolute -top-3 right-6 bg-primary text-primary-foreground text-xs font-black px-3 py-1 rounded-full">
                {testimonial.result}
              </div>

              <div className="text-primary/20 mb-4">
                <Quote size={32} />
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-primary text-primary" />
                ))}
              </div>
              
              <p className="text-foreground text-sm mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
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
