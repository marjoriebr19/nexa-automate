import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Clock, TrendingDown, UserX, XCircle, DollarSign } from 'lucide-react';

const painPoints = [
  {
    icon: <Clock size={24} />,
    title: "Leads Esfriando",
    desc: "Cada minuto sem resposta é um cliente para o concorrente."
  },
  {
    icon: <UserX size={24} />,
    title: "Equipe Sobrecarregada",
    desc: "Sua equipe não consegue atender todos os leads que chegam."
  },
  {
    icon: <TrendingDown size={24} />,
    title: "Conversão Baixa",
    desc: "Visitantes entram no site mas não viram clientes pagantes."
  },
  {
    icon: <XCircle size={24} />,
    title: "Invisível no Google",
    desc: "Clientes procuram seu serviço e encontram só concorrentes."
  },
  {
    icon: <DollarSign size={24} />,
    title: "Dinheiro Queimando",
    desc: "Investindo em tráfego pago mas sem retorno proporcional."
  },
  {
    icon: <AlertTriangle size={24} />,
    title: "Processos Manuais",
    desc: "Perdendo tempo com tarefas que poderiam ser automatizadas."
  }
];

const PainPoints = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-destructive text-xs font-black uppercase tracking-ultra-wide mb-4">
            Isso soa familiar?
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-ultra-tight mb-6">
            Você está <span className="text-destructive">perdendo dinheiro</span> assim?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Se você reconhece algum desses problemas, está na hora de automatizar.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {painPoints.map((pain, index) => (
            <motion.div
              key={pain.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-6 rounded-2xl border-destructive/20 hover:border-destructive/40 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center text-destructive mb-4 group-hover:bg-destructive/20 transition-colors">
                {pain.icon}
              </div>
              <h3 className="text-lg font-bold mb-2">{pain.title}</h3>
              <p className="text-muted-foreground text-sm">{pain.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
