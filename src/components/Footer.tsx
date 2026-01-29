import React from 'react';
import { Zap, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <a href="#" className="flex items-center gap-2 text-xl font-black tracking-tight mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <Zap size={20} className="fill-primary-foreground text-primary-foreground" />
              </div>
              <span>NEXA<span className="text-primary">UTOMA</span></span>
            </a>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Transformando negócios com automação inteligente e vendas escaláveis.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Serviços</a></li>
              <li><a href="#results" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Resultados</a></li>
              <li><a href="#portfolio" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Portfólio</a></li>
              <li><a href="#faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone size={14} className="text-primary" /> (11) 99999-9999
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail size={14} className="text-primary" /> contato@nexautoma.com
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin size={14} className="text-primary" /> São Paulo, SP
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold mb-4">Siga-nos</h4>
            <div className="flex items-center gap-3">
              <a 
                href="#" 
                className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} NEXAUTOMA. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Política de Privacidade</a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
