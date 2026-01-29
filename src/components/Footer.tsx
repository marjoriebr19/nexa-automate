import React from 'react';
import { Zap, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 text-xl font-black tracking-tight">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
              <Zap size={20} className="fill-primary-foreground text-primary-foreground" />
            </div>
            <span>Nexa<span className="text-primary">Flow</span></span>
          </a>

          {/* Social Links */}
          <div className="flex items-center gap-4">
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

          {/* Copyright */}
          <p className="text-muted-foreground text-sm">
            © {currentYear} NexaFlow. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;