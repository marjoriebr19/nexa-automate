import React, { useState } from 'react';
import { Upload, X, Maximize2, Send } from 'lucide-react';
import { toast } from 'sonner';

import chatRafael from '@/assets/chat-rafael.png.asset.json';
import chatLucas from '@/assets/chat-lucas.png.asset.json';
import chatIronFit from '@/assets/chat-ironfit.png.asset.json';
import chatDomusPet from '@/assets/chat-domuspet.png.asset.json';

interface GalleryImage {
  url: string;
  name: string;
  testimonial: string;
  uploadDate: string;
}

const Gallery = () => {
  const [images, setImages] = useState<GalleryImage[]>([
    { 
      url: chatRafael.url, 
      name: "Rafael - Império Climatização",
      testimonial: "Aparecemos no Google e isso fez toda a diferença!",
      uploadDate: new Date().toISOString() 
    },
    { 
      url: chatLucas.url, 
      name: "Lucas (Cliente)",
      testimonial: "Mais credibilidade, mais contatos e mais clientes!",
      uploadDate: new Date().toISOString() 
    },
    { 
      url: chatIronFit.url, 
      name: "Iron Fit Academia",
      testimonial: "As matrículas pelo site aumentaram muito!",
      uploadDate: new Date().toISOString() 
    },
    { 
      url: chatDomusPet.url, 
      name: "Domus Pet",
      testimonial: "Vendas aumentaram bastante desde que o site entrou no ar!",
      uploadDate: new Date().toISOString() 
    },
  ]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const newImageUrl = e.target?.result as string;
      const newImage: GalleryImage = {
        url: newImageUrl,
        name: "Novo Cliente",
        testimonial: "Excelente trabalho da Nex Automa!",
        uploadDate: new Date().toISOString(),
      };
      
      setImages(prev => [newImage, ...prev]);
      toast.success("Imagem adicionada com sucesso!");
    };
    reader.readAsDataURL(file);
  };

  const handleSendToServer = async () => {
    setIsUploading(true);
    try {
      console.log("Enviando fotos para o servidor:", JSON.stringify(images));
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success("Galeria sincronizada!");
    } catch (error) {
      toast.error("Erro ao enviar.");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <section id="galeria-resultados" className="section-padding bg-white relative">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
        <div className="flex flex-col gap-[10px] items-center">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="w-[300px] flex flex-col bg-white rounded-[5px] shadow-sm border border-gray-100 overflow-hidden"
              style={{ boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}
            >
              <div className="relative group w-full cursor-pointer" onClick={() => setSelectedImage(image.url)}>
                <img 
                  src={image.url} 
                  alt={image.name}
                  className="w-full h-auto block"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Maximize2 size={24} className="text-white" />
                </div>
              </div>
              
              <div className="p-4 bg-white text-left">
                <h4 className="font-['Open_Sans'] text-[14px] font-bold text-[#333333] mb-1">
                  {image.name}
                </h4>
                <p className="font-['Open_Sans'] text-[14px] text-[#333333] leading-relaxed">
                  "{image.testimonial}"
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex gap-4">
          <label className="flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-full font-bold hover:bg-gray-200 transition-all cursor-pointer">
            <Upload size={20} />
            Adicionar Foto
            <input type="file" className="hidden" onChange={handleFileUpload} accept="image/*" />
          </label>
          <button 
            onClick={handleSendToServer}
            disabled={isUploading}
            className="flex items-center gap-2 px-8 py-3 bg-primary text-white rounded-full font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 disabled:opacity-50"
          >
            {isUploading ? "Sincronizando..." : (
              <>
                <Send size={20} />
                Sincronizar
              </>
            )}
          </button>
        </div>
      </div>

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