import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Users, DollarSign, Clock } from 'lucide-react';

const CaseStudy = () => {
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
            Caso de Sucesso
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-ultra-tight mb-6">
            De R$50k para <span className="text-gradient">R$250k/mês</span>
          </h2>
        </motion.div>

        <div className="glass p-8 md:p-12 rounded-[2rem]">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
                <span className="text-primary text-xs font-bold">Clínica Odontológica Premium</span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-black mb-6">
                Como uma clínica aumentou o faturamento em 400% com automação
              </h3>
              
              <p className="text-muted-foreground mb-8 leading-relaxed">
                A Clínica Premium enfrentava problemas com leads que esfriavam antes do atendimento. 
                Com nossa solução de IA no WhatsApp + Landing Page otimizada, transformamos o cenário completamente.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-destructive" />
                  <span className="text-sm"><strong className="text-destructive">Antes:</strong> 60% dos leads perdidos por demora no atendimento</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-sm"><strong className="text-primary">Depois:</strong> 95% dos leads atendidos em menos de 1 minuto</span>
                </div>
              </div>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-xl font-bold text-sm transition-all btn-glow"
              >
                Quero resultados assim <ArrowRight size={16} />
              </a>
            </div>

            {/* Right Stats */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="glass p-6 rounded-2xl text-center"
              >
                <TrendingUp size={24} className="text-primary mx-auto mb-3" />
                <div className="text-3xl font-black text-gradient">+400%</div>
                <p className="text-xs text-muted-foreground">Faturamento</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="glass p-6 rounded-2xl text-center"
              >
                <Users size={24} className="text-primary mx-auto mb-3" />
                <div className="text-3xl font-black text-gradient">+180%</div>
                <p className="text-xs text-muted-foreground">Novos Pacientes</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="glass p-6 rounded-2xl text-center"
              >
                <Clock size={24} className="text-primary mx-auto mb-3" />
                <div className="text-3xl font-black text-gradient">-70%</div>
                <p className="text-xs text-muted-foreground">Tempo Atendimento</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="glass p-6 rounded-2xl text-center"
              >
                <DollarSign size={24} className="text-primary mx-auto mb-3" />
                <div className="text-3xl font-black text-gradient">R$250k</div>
                <p className="text-xs text-muted-foreground">Faturamento Mensal</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
