import React, { useState } from 'react';
import { motion } from "framer-motion";
import { TrendingUp, AlertCircle, DollarSign, Users, Percent } from 'lucide-react';

const ROICalculator = () => {
  const [leads, setLeads] = useState(100);
  const [ticket, setTicket] = useState(500);
  const [loss, setLoss] = useState(40);

  const lostMonthly = leads * (loss / 100) * ticket;
  const lostYearly = lostMonthly * 12;

  return (
    <section id="roi" className="section-padding relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div className="bg-glow w-[800px] h-[800px] opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Calculator */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-6 sm:p-8 rounded-4xl border-white/5"
          >
            <h3 className="text-2xl sm:text-3xl font-extrabold mb-8 flex items-center gap-3">
              <TrendingUp className="text-primary" /> Calculadora de Lucro Perdido
            </h3>
            
            <div className="space-y-6 mb-10">
              {/* Leads Slider */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-muted-foreground text-sm font-bold uppercase flex items-center gap-2">
                    <Users size={16} className="text-primary" />
                    Leads Mensais
                  </label>
                  <span className="text-foreground font-black text-lg">{leads}</span>
                </div>
                <input 
                  type="range" 
                  min="10" 
                  max="1000" 
                  value={leads} 
                  onChange={(e) => setLeads(Number(e.target.value))} 
                  className="w-full h-2 rounded-full appearance-none cursor-pointer bg-secondary accent-primary"
                />
              </div>

              {/* Ticket Slider */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-muted-foreground text-sm font-bold uppercase flex items-center gap-2">
                    <DollarSign size={16} className="text-primary" />
                    Ticket Médio (R$)
                  </label>
                  <span className="text-foreground font-black text-lg">R$ {ticket.toLocaleString('pt-BR')}</span>
                </div>
                <input 
                  type="range" 
                  min="100" 
                  max="10000" 
                  step="100" 
                  value={ticket} 
                  onChange={(e) => setTicket(Number(e.target.value))} 
                  className="w-full h-2 rounded-full appearance-none cursor-pointer bg-secondary accent-primary"
                />
              </div>

              {/* Loss Slider */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-destructive text-sm font-bold uppercase flex items-center gap-2">
                    <Percent size={16} />
                    Leads Perdidos (sem automação)
                  </label>
                  <span className="text-destructive font-black text-lg">{loss}%</span>
                </div>
                <input 
                  type="range" 
                  min="5" 
                  max="95" 
                  value={loss} 
                  onChange={(e) => setLoss(Number(e.target.value))} 
                  className="w-full h-2 rounded-full appearance-none cursor-pointer bg-secondary accent-destructive"
                />
              </div>
            </div>

            {/* Result */}
            <div className="bg-destructive/10 border border-destructive/20 p-6 sm:p-8 rounded-3xl">
              <p className="text-muted-foreground text-xs font-black uppercase tracking-ultra-wide mb-2">
                Desperdício Estimado/Ano
              </p>
              <div className="text-3xl sm:text-4xl md:text-5xl font-black text-destructive mb-2">
                R$ {lostYearly.toLocaleString('pt-BR')}
              </div>
              <p className="text-muted-foreground text-xs flex items-center gap-2">
                <AlertCircle size={14} /> Pare de queimar dinheiro por falta de resposta rápida.
              </p>
            </div>
          </motion.div>

          {/* Right: CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <span className="inline-block text-primary text-xs font-black uppercase tracking-ultra-wide mb-4">
              Não Perca Mais
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-ultra-tight mb-6">
              Quantas vendas você está{' '}
              <span className="text-destructive">perdendo</span> hoje?
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg mb-8 leading-relaxed">
              Enquanto você lê isso, potenciais clientes estão enviando mensagens para concorrentes que respondem primeiro. Nossa IA garante resposta instantânea 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-2xl font-black text-base transition-all btn-glow active:scale-[0.98]">
                Recuperar Minhas Vendas
              </button>
              <button className="glass text-foreground px-8 py-4 rounded-2xl font-black text-base hover:bg-white/5 transition-all active:scale-[0.98]">
                Agendar Demonstração
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;