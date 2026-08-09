import React, { useState } from 'react';
import { X, Maximize2, Star, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import chatRafael from '@/assets/chat-rafael.png.asset.json';
import chatLucas from '@/assets/chat-lucas.png.asset.json';
import chatIronFit from '@/assets/chat-ironfit.png.asset.json';
import chatDomusPet from '@/assets/chat-domuspet.png.asset.json';

interface Testimonial {
  id: number;
  url: string;
  name: string;
  role: string;
  testimonial: string;
}

const Gallery = () => {
  const [testimonials] = useState<Testimonial[]>([
    { 
      id: 1,
      url: chatRafael.url, 
      name: "Rafael",
      role: "Império Climatização",
      testimonial: "Aparecemos no Google e isso fez toda a diferença!",
    },
    { 
      id: 2,
      url: chatLucas.url, 
      name: "Lucas",
      role: "Empreendedor",
      testimonial: "Mais credibilidade, mais contatos e mais clientes!",
    },
    { 
      id: 3,
      url: chatIronFit.url, 
      name: "Iron Fit Academia",
      role: "Gerente",
      testimonial: "As matrículas pelo site aumentaram muito!",
    },
    { 
      id: 4,
      url: chatDomusPet.url, 
      name: "Domus Pet",
      role: "Proprietário",
      testimonial: "Vendas aumentaram bastante desde que o site entrou no ar!",
    },
  ]);
  
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <section id="galeria-resultados" className="relative py-24 md:py-40 px-6 overflow-hidden">
      {/* Background Decorativo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none z-0">
        <div className="bg-glow top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] opacity-10" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Título de Apresentação */}
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-5 py-2 rounded-full text-primary text-[10px] md:text-xs font-black uppercase tracking-ultra-wide mb-8"
          >
            NOSSOS RESULTADOS
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 tracking-tighter"
          >
            Depoimentos de <br />
            <span className="text-gradient">Quem Confia</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto font-medium leading-relaxed"
          >
            A NEXAUTOMA transforma a presença digital de negócios reais. 
            Confira o que nossos parceiros dizem sobre nossa entrega e resultados.
          </motion.p>
        </div>

        {/* Carrossel de Depoimentos */}
        <div className="gallery-carousel-wrapper">
          <Slider {...sliderSettings}>
            {testimonials.map((item) => (
              <div key={item.id} className="px-3">
                <motion.div 
                  onClick={() => setSelectedId(item.id)}
                  className={`
                    group cursor-pointer glass p-6 rounded-[2rem] transition-all duration-500 hover:-translate-y-2 h-full
                    ${selectedId === item.id ? 'border-primary shadow-[0_0_30px_rgba(59,130,246,0.2)]' : 'hover:border-white/20'}
                  `}
                >
                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl mb-6 bg-slate-900/50 border border-white/5">
                    <img 
                      src={item.url} 
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedImage(item.url);
                      }}
                      className="absolute top-4 right-4 p-3 glass-strong rounded-full text-white/70 hover:text-white transition-colors z-10 opacity-0 group-hover:opacity-100"
                    >
                      <Maximize2 size={18} />
                    </button>
                  </div>
                  
                  <div className="flex flex-col gap-4">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} className="fill-primary text-primary" />
                      ))}
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-black text-foreground mb-1">
                        {item.name}
                      </h4>
                      <p className="text-[10px] font-black uppercase tracking-widest text-primary">
                        {item.role}
                      </p>
                    </div>
    
                    <div className="relative">
                      <Quote size={20} className="text-primary/20 absolute -top-2 -left-2" />
                      <p className="text-sm text-muted-foreground leading-relaxed italic relative z-10 pl-4">
                        "{item.testimonial}"
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Depoimento Selecionado (Destaque) */}
        <AnimatePresence>
          {selectedId && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="mt-16 md:mt-24 p-8 md:p-12 glass-strong rounded-[2.5rem] border-primary/20 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-24 h-24 rounded-2xl overflow-hidden bg-primary/10 border border-primary/20 flex-shrink-0">
                  <img 
                    src={testimonials.find(t => t.id === selectedId)?.url} 
                    alt="Destaque" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-black text-foreground mb-2">
                    {testimonials.find(t => t.id === selectedId)?.name}
                  </h3>
                  <p className="text-primary text-xs md:text-sm font-black uppercase tracking-ultra-wide mb-6">
                    {testimonials.find(t => t.id === selectedId)?.role}
                  </p>
                  <p className="text-xl md:text-2xl text-foreground font-medium italic leading-relaxed">
                    "{testimonials.find(t => t.id === selectedId)?.testimonial}"
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-background/95 flex items-center justify-center p-6 backdrop-blur-xl"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-8 right-8 text-white/40 hover:text-white transition-colors p-2 glass rounded-full">
              <X size={32} />
            </button>
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage} 
              className="max-w-full max-h-[80vh] object-contain rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10"
              alt="Preview"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;