import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, TrendingUp } from 'lucide-react';

const projects = [
  {
    title: 'Clínica Premium',
    category: 'Saúde',
    result: '+400% faturamento',
    desc: 'Landing page + IA WhatsApp para clínica odontológica'
  },
  {
    title: 'Auto Center Plus',
    category: 'Automotivo',
    result: '+250% conversão',
    desc: 'Automação completa de orçamentos e agendamentos'
  },
  {
    title: 'Academia FitMax',
    category: 'Fitness',
    result: '+200% matrículas',
    desc: 'Quiz interativo + captação automática de leads'
  },
  {
    title: 'Imóveis Premium',
    category: 'Imobiliário',
    result: '+180% visitas',
    desc: 'Google Meu Negócio + qualificação por IA'
  },
  {
    title: 'Bella Estética',
    category: 'Beleza',
    result: '+800% agendamentos',
    desc: 'Sistema completo de agendamento automatizado'
  },
  {
    title: 'TechSolutions',
    category: 'Tecnologia',
    result: '+300% vendas',
    desc: 'Funil de vendas B2B com IA qualificadora'
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="section-padding relative overflow-hidden bg-primary/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary text-xs font-black uppercase tracking-ultra-wide mb-4">
            Portfólio
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-ultra-tight mb-6">
            Projetos <span className="text-gradient">de Sucesso</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-6">
            Conheça alguns dos negócios que transformamos com automação.
          </p>
          <a
            href="https://linktr.ee/nexautoma"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-xl font-bold text-sm transition-all btn-glow"
          >
            Ver portfólio completo no Linktree <ExternalLink size={16} />
          </a>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.a
              key={project.title}
              href="https://linktr.ee/nexautoma"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-3xl overflow-hidden card-hover group block"
            >
              {/* Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center relative">
                <span className="text-4xl font-black text-primary/30">{project.title.charAt(0)}</span>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-10 h-10 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center">
                    <ExternalLink size={16} className="text-primary" />
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-primary uppercase tracking-wide">
                    {project.category}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-full">
                    <TrendingUp size={12} /> {project.result}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground">{project.desc}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
