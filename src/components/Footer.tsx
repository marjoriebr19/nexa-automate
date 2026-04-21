import React from 'react';
import { Zap, Instagram, Mail, Phone, Link as LinkIcon } from 'lucide-react';

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
              <li>
                <a href="https://wa.me/5585998687814" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <Phone size={14} className="text-primary" /> (85) 99868-7814
                </a>
              </li>
              <li>
                <a href="mailto:nexautoma.contato@gmail.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors break-all">
                  <Mail size={14} className="text-primary shrink-0" /> nexautoma.contato@gmail.com
                </a>
              </li>
              <li>
                <a href="https://linktr.ee/nexautoma" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <LinkIcon size={14} className="text-primary" /> linktr.ee/nexautoma
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold mb-4">Siga-nos</h4>
            <div className="flex items-center gap-3">
              <a 
                href="https://instagram.com/nexautoma/" 
                target="_blank" rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://linktr.ee/nexautoma" 
                target="_blank" rel="noopener noreferrer"
                aria-label="Linktree"
                className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
              >
                <LinkIcon size={18} />
              </a>
              <a 
                href="https://wa.me/5585998687814" 
                target="_blank" rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
              >
                <Phone size={18} />
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
