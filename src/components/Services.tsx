import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Layout, MapPin, Zap, ArrowUpRight, CheckCircle2 } from 'lucide-react';

const services = [
  { 
    title: "WhatsApp AI Elite", 
    desc: "Agentes de vendas inteligentes que qualificam leads, quebram objeções e fecham vendas 24h por dia diretamente no seu WhatsApp.", 
    icon: <MessageSquare size={28} className="text-primary" />,
    features: ["Atendimento Humanoide", "Agendamento Automático", "Integração CRM"]
  },
  { 
    title: "LPs de Conversão", 
    desc: "Landing Pages de carregamento instantâneo projetadas com gatilhos mentais para converter visitantes em clientes em segundos.", 
    icon: <Layout size={28} className="text-primary" />,
    features: ["Copy Persuasivo", "Otimização Mobile", "SEO para Escala"]
  },
  { 
    title: "Mastery Google GMN", 
    desc: "Domine as buscas locais. Colocamos sua empresa nas primeiras posições do Google Meu Negócio para atrair clientes prontos para comprar.", 
    icon: <MapPin size={28} className="text-primary" />,
    features: ["Gestão de Avaliações", "Otimização de SEO Local", "Relatórios de ROI"]
  },
  { 
    title: "Ecossistema Nexa", 
    desc: "Conectamos todas as frentes em um fluxo único onde o cliente entra pela LP, é atendido pela IA e finalizado no seu caixa.", 
    icon: <Zap size={28} className="text-primary" />,
    features: ["Automação Ponta a Ponta", "Dashboard Unificado", "Vendas em Escala"]
  }
];

const Services = () => {
  return (
    <section id="services" className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary text-xs font-black uppercase tracking-ultra-wide mb-4">
            Nossos Serviços
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-ultra-tight mb-6">
            Soluções que <span className="text-gradient">Transformam</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ferramentas poderosas para automatizar suas vendas e escalar seu negócio.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-8 rounded-3xl card-hover group"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                  {service.icon}
                </div>
                <ArrowUpRight 
                  size={24} 
                  className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" 
                />
              </div>
              
              <h3 className="text-xl sm:text-2xl font-black mb-3 tracking-tight">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground text-sm sm:text-base mb-6 leading-relaxed">
                {service.desc}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature) => (
                  <span 
                    key={feature}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground bg-secondary px-3 py-1.5 rounded-full"
                  >
                    <CheckCircle2 size={12} className="text-primary" />
                    {feature}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;