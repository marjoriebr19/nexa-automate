import React from 'react';
import { motion } from "framer-motion";
import { ArrowRight, Zap, Play, CheckCircle2 } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-52 md:pb-40 flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      {/* Background Decorativo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none z-0">
        <div className="bg-glow top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] animate-pulse-glow" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-3 bg-primary/10 border border-primary/20 px-5 py-2 rounded-full text-primary text-[10px] md:text-xs font-black mb-8 uppercase tracking-ultra-wide shadow-[0_0_20px_hsl(var(--blue-500)/0.1)]"
        >
          <Zap size={14} className="fill-primary" /> Domínio Digital & Vendas Automáticas
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] mb-8 tracking-ultra-tight"
        >
          Automatize. Escale. <br />
          <span className="text-gradient">
            Venda Mais.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground text-base sm:text-lg md:text-2xl mb-12 max-w-3xl mx-auto font-medium leading-relaxed"
        >
          Combinamos Landing Pages de alta conversão, automação de WhatsApp com IA e Google Meu Negócio para colocar sua empresa no topo.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-20"
        >
          <button className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-8 sm:px-10 py-4 sm:py-5 rounded-2xl font-black text-base sm:text-lg flex items-center justify-center gap-3 transition-all btn-glow active:scale-[0.98]">
            Quero Vender Mais <ArrowRight size={22} />
          </button>
          <button className="w-full sm:w-auto glass text-foreground px-8 sm:px-10 py-4 sm:py-5 rounded-2xl font-black text-base sm:text-lg flex items-center justify-center gap-3 hover:bg-white/5 transition-all active:scale-[0.98]">
            <Play size={18} className="fill-foreground" /> Ver Demonstração
          </button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-6 md:gap-12 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700"
        >
          <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest">
            <CheckCircle2 size={16} className="text-primary" /> WhatsApp 24/7 Ativo
          </div>
          <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest">
            <CheckCircle2 size={16} className="text-primary" /> LP Ultra-Rápida
          </div>
          <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest">
            <CheckCircle2 size={16} className="text-primary" /> Top Google Local
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-background to-transparent z-20" />
    </section>
  );
};

export default Hero;