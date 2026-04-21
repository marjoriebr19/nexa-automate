import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, Mail, Instagram, Link as LinkIcon } from 'lucide-react';

const ContactCTA = () => {
  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-primary/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-primary text-xs font-black uppercase tracking-ultra-wide mb-4">
              Fale Conosco
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-ultra-tight mb-6">
              Pronto para <span className="text-gradient">escalar?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Agende uma conversa gratuita de 15 minutos. Vamos analisar seu negócio 
              e mostrar exatamente como podemos aumentar suas vendas.
            </p>

            <div className="space-y-4 mb-8">
              <a href="https://wa.me/5585998687814" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 glass p-4 rounded-2xl hover:bg-white/5 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <p className="font-bold">WhatsApp</p>
                  <p className="text-sm text-muted-foreground">(85) 99868-7814</p>
                </div>
              </a>
              
              <a href="mailto:nexautoma.contato@gmail.com" className="flex items-center gap-4 glass p-4 rounded-2xl hover:bg-white/5 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Mail size={24} />
                </div>
                <div className="min-w-0">
                  <p className="font-bold">E-mail</p>
                  <p className="text-sm text-muted-foreground break-all">nexautoma.contato@gmail.com</p>
                </div>
              </a>

              <a href="https://linktr.ee/nexautoma" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 glass p-4 rounded-2xl hover:bg-white/5 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <LinkIcon size={24} />
                </div>
                <div>
                  <p className="font-bold">Linktree</p>
                  <p className="text-sm text-muted-foreground">linktr.ee/nexautoma</p>
                </div>
              </a>

              <a href="https://instagram.com/nexautoma/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 glass p-4 rounded-2xl hover:bg-white/5 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Instagram size={24} />
                </div>
                <div>
                  <p className="font-bold">Instagram</p>
                  <p className="text-sm text-muted-foreground">@nexautoma</p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-[2rem]"
          >
            <h3 className="text-2xl font-black mb-6">Diagnóstico Gratuito</h3>
            
            <form className="space-y-4">
              <div>
                <label className="text-sm font-bold text-muted-foreground block mb-2">Nome Completo</label>
                <input
                  type="text"
                  placeholder="Seu nome"
                  className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              
              <div>
                <label className="text-sm font-bold text-muted-foreground block mb-2">WhatsApp</label>
                <input
                  type="tel"
                  placeholder="(85) 99868-7814"
                  className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              
              <div>
                <label className="text-sm font-bold text-muted-foreground block mb-2">E-mail</label>
                <input
                  type="email"
                  placeholder="seu@email.com"
                  className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              
              <div>
                <label className="text-sm font-bold text-muted-foreground block mb-2">Qual seu maior desafio?</label>
                <textarea
                  rows={3}
                  placeholder="Conte um pouco sobre seu negócio e desafios..."
                  className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all btn-glow"
              >
                Quero meu diagnóstico grátis <ArrowRight size={20} />
              </button>
              
              <p className="text-xs text-center text-muted-foreground">
                Resposta em até 2 horas úteis. Sem compromisso.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
