import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Building2, Trophy, Star, TrendingUp } from 'lucide-react';

const stats = [
  { icon: <Building2 size={24} />, value: '+500', label: 'Empresas Atendidas' },
  { icon: <Users size={24} />, value: '+2M', label: 'Leads Processados' },
  { icon: <TrendingUp size={24} />, value: 'R$47M', label: 'Gerado para Clientes' },
  { icon: <Trophy size={24} />, value: '98%', label: 'Satisfação' },
];

const Authority = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-primary text-xs font-black uppercase tracking-ultra-wide mb-4">
              Por que a NEXAUTOMA?
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-ultra-tight mb-6">
              Especialistas em <span className="text-gradient">Automação de Vendas</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Há mais de 5 anos transformando negócios com tecnologia de ponta. 
              Nossa metodologia exclusiva combina IA avançada, copywriting persuasivo 
              e estratégias comprovadas de conversão.
            </p>
            
            <div className="space-y-4 mb-8">
              {[
                'Equipe certificada em IA e Automação',
                'Metodologia própria com resultados comprovados',
                'Suporte dedicado 7 dias por semana',
                'Garantia de resultados em 30 dias'
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                    <Star size={12} className="text-primary fill-primary" />
                  </div>
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-primary/20 border-2 border-background flex items-center justify-center"
                  >
                    <span className="text-xs font-bold text-primary">C{i}</span>
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={14} className="text-primary fill-primary" />
                  ))}
                </div>
                <p className="text-xs text-muted-foreground">+500 avaliações 5 estrelas</p>
              </div>
            </div>
          </motion.div>

          {/* Right Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-6 rounded-2xl text-center card-hover"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-black text-gradient mb-1">{stat.value}</div>
                <p className="text-xs text-muted-foreground font-semibold">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Authority;
