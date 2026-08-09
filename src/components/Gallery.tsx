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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((item) => (
            <motion.div 
              key={item.id}
              layoutId={`card-${item.id}`}
              onClick={() => setSelectedId(item.id)}
              className={`
                cursor-pointer bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden transition-all
                ${selectedId === item.id ? 'ring-2 ring-primary ring-offset-2' : 'hover:shadow-md'}
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
                  className="absolute top-2 right-2 p-2 bg-white/80 backdrop-blur-sm rounded-full text-slate-600 hover:text-primary transition-colors"
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
              className="mt-12 p-8 bg-primary/5 rounded-2xl border border-primary/10 text-center"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                {testimonials.find(t => t.id === selectedId)?.name}
              </h3>
              <p className="text-slate-600 max-w-2xl mx-auto italic">
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