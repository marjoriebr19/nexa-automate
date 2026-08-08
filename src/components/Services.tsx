import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Layout, MapPin, Zap, ArrowUpRight, CheckCircle2 } from 'lucide-react';

const services = [
  { 
    title: "Sites Institucionais", 
    desc: "Sites profissionais e personalizados para empresas que desejam ter uma presença online sólida e confiável.", 
    icon: <Layout size={28} className="text-primary" />,
    features: ["Profissional", "Personalizado", "Confiável"]
  },
  { 
    title: "Landing Pages Otimizadas", 
    desc: "Páginas de alta conversão para campanhas e capturas de leads, projetadas para impulsionar resultados.", 
    icon: <Zap size={28} className="text-primary" />,
    features: ["Alta Conversão", "Campanhas", "Leads"]
  },
  { 
    title: "Lojas Virtuais (E-commerce)", 
    desc: "Plataformas completas para venda online, com funcionalidades modernas e uma experiência de compra incrível.", 
    icon: <MessageSquare size={28} className="text-primary" />,
    features: ["Venda Online", "Funcionalidades Modernas", "Experiência"]
  },
  { 
    title: "SISTEMAS PERSONALIZADOS", 
    desc: "Soluções sob medida para atender às necessidades específicas do seu negócio, com eficiência e inovação.", 
    icon: <Zap size={28} className="text-primary" />,
    features: ["Sob Medida", "Eficiência", "Inovação"]
  },
  { 
    title: "APLICATIVOS", 
    desc: "Desenvolvimento de aplicativos modernos e funcionais para Android e iOS, projetados para engajar seus usuários.", 
    icon: <Layout size={28} className="text-primary" />,
    features: ["Android/iOS", "Modernos", "Funcionais"]
  },
  { 
    title: "TRÁFEGO PAGO", 
    desc: "Estratégias de anúncios online para atrair clientes e aumentar a visibilidade da sua marca rapidamente.", 
    icon: <Zap size={28} className="text-primary" />,
    features: ["Anúncios", "Visibilidade", "Rápido"]
  },
  { 
    title: "Blog Corporativo", 
    desc: "Criação de blogs profissionais para compartilhar conteúdo relevante e engajar sua audiência.", 
    icon: <Layout size={28} className="text-primary" />,
    features: ["Conteúdo", "Engajamento", "Profissional"]
  },
  { 
    title: "SEO e CRO", 
    desc: "Otimização para mecanismos de busca e conversão para levar seu site ao topo e maximizar resultados.", 
    icon: <Zap size={28} className="text-primary" />,
    features: ["Busca", "Conversão", "Maximizar"]
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
            Orçamento Grátis
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-ultra-tight mb-6">
            Vamos Construir o Seu <span className="text-gradient">Sucesso Digital</span>
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