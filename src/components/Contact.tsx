import React from 'react';
import { motion } from 'framer-motion';
import { Send, MessageSquare, Mail, Instagram, Link as LinkIcon, ArrowRight } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none">
        <div className="bg-glow w-[1000px] h-[600px] opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-primary text-xs font-black uppercase tracking-ultra-wide mb-4">
              Fale Conosco
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-ultra-tight mb-6">
              Pronto para{' '}
              <span className="text-gradient">Escalar?</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg mb-8 leading-relaxed">
              Entre em contato e descubra como podemos transformar sua presença digital e multiplicar suas vendas.
            </p>

            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <a 
                href="https://wa.me/5585998687814"
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors shrink-0">
                  <MessageSquare size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase text-muted-foreground">WhatsApp</p>
                  <p className="font-bold">+55 (85) 99868-7814</p>
                </div>
              </a>
              <a 
                href="mailto:nexautoma.contato@gmail.com"
                className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors shrink-0">
                  <Mail size={20} className="text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-bold uppercase text-muted-foreground">Email</p>
                  <p className="font-bold break-all">nexautoma.contato@gmail.com</p>
                </div>
              </a>
              <a 
                href="https://linktr.ee/nexautoma"
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors shrink-0">
                  <LinkIcon size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase text-muted-foreground">Linktree</p>
                  <p className="font-bold">linktr.ee/nexautoma</p>
                </div>
              </a>
              <a 
                href="https://instagram.com/nexautoma/"
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors shrink-0">
                  <Instagram size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase text-muted-foreground">Instagram</p>
                  <p className="font-bold">@nexautoma</p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-6 sm:p-8 rounded-4xl"
          >
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-bold mb-2">Nome</label>
                <input
                  type="text"
                  placeholder="Seu nome completo"
                  className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">Email</label>
                <input
                  type="email"
                  placeholder="seu@email.com"
                  className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">WhatsApp</label>
                <input
                  type="tel"
                  placeholder="(11) 99999-9999"
                  className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">Mensagem</label>
                <textarea
                  rows={4}
                  placeholder="Conte-nos sobre seu negócio..."
                  className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-2xl font-black text-base transition-all btn-glow active:scale-[0.98] flex items-center justify-center gap-2"
              >
                Enviar Mensagem <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;