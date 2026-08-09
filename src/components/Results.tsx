import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { stats, testimonials } from '@/data/site-content';
import SectionHeader from './ui/SectionHeader';

const Results = () => {
  return (
    <section id="results" className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
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

        <SectionHeader 
          tag="Depoimentos"
          title="Resultados"
          gradientTitle="Reais"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-6 sm:p-8 rounded-3xl card-hover"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-primary text-primary" />
                ))}
              </div>
              
              <p className="text-foreground text-sm sm:text-base mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-primary/20 bg-primary/20">
                  {testimonial.image ? (
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-primary font-bold text-sm">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                  )}
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
