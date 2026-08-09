import React, { useState } from 'react';
import { X, Maximize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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

  return (
    <section id="galeria-resultados" className="section-padding bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Título de Apresentação da Seção */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-6"
          >
            Nossos Resultados
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight"
          >
            Depoimentos de <span className="text-gradient">Quem Confia</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-lg max-w-2xl mx-auto font-medium"
          >
            Veja como ajudamos empresas reais a alcançarem resultados extraordinários com nossa tecnologia e estratégia.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((item) => (
            <motion.div 
              key={item.id}
              layoutId={`card-${item.id}`}
              onClick={() => setSelectedId(item.id)}
              className={`
                cursor-pointer bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden transition-all
                ${selectedId === item.id ? 'ring-2 ring-primary ring-offset-2' : 'hover:shadow-md hover:-translate-y-1'}
              `}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative aspect-square overflow-hidden bg-slate-100">
                <img 
                  src={item.url} 
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage(item.url);
                  }}
                  className="absolute top-2 right-2 p-2 bg-white/80 backdrop-blur-sm rounded-full text-slate-600 hover:text-primary transition-colors z-10"
                >
                  <Maximize2 size={16} />
                </button>
              </div>
              
              <div className="p-5">
                <div className="mb-3">
                  <h4 className="font-['Open_Sans'] text-[14px] font-bold text-[#333333]">
                    {item.name}
                  </h4>
                  <p className="font-['Open_Sans'] text-[12px] text-slate-500">
                    {item.role}
                  </p>
                </div>
                <p className="font-['Open_Sans'] text-[14px] text-[#333333] leading-relaxed italic">
                  "{item.testimonial}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedId && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-12 p-8 bg-white rounded-2xl border border-slate-200 shadow-xl text-center relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-primary" />
              <h3 className="text-xl font-black text-slate-900 mb-2">
                {testimonials.find(t => t.id === selectedId)?.name}
              </h3>
              <p className="text-slate-500 text-sm font-bold uppercase tracking-wider mb-4">
                {testimonials.find(t => t.id === selectedId)?.role}
              </p>
              <p className="text-slate-700 text-lg max-w-2xl mx-auto italic leading-relaxed">
                "{testimonials.find(t => t.id === selectedId)?.testimonial}"
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-md"
          onClick={() => setSelectedImage(null)}
        >
          <button className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors">
            <X size={32} />
          </button>
          <img 
            src={selectedImage} 
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl animate-in fade-in zoom-in duration-300"
            alt="Preview"
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;