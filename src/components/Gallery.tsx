import React, { useState } from 'react';
import { Upload, X, Maximize2, Send } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';
import { toast } from 'sonner';

import chatRafael from '@/assets/chat-rafael.png.asset.json';
import chatLucas from '@/assets/chat-lucas.png.asset.json';
import chatIronFit from '@/assets/chat-ironfit.png.asset.json';
import chatDomusPet from '@/assets/chat-domuspet.png.asset.json';

interface GalleryImage {
  url: string;
  uploadDate: string;
}

const Gallery = () => {
  const [images, setImages] = useState<GalleryImage[]>([
    { url: chatRafael.url, uploadDate: new Date().toISOString() },
    { url: chatLucas.url, uploadDate: new Date().toISOString() },
    { url: chatIronFit.url, uploadDate: new Date().toISOString() },
    { url: chatDomusPet.url, uploadDate: new Date().toISOString() },
  ]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Em um cenário real, faríamos upload para um storage (ex: Supabase Storage)
    // Para este componente, usaremos uma URL temporária para demonstração
    const reader = new FileReader();
    reader.onload = (e) => {
      const newImageUrl = e.target?.result as string;
      const newImage: GalleryImage = {
        url: newImageUrl,
        uploadDate: new Date().toISOString(),
      };
      
      // Substituir a primeira imagem (ou a lógica desejada de substituição)
      setImages(prev => [newImage, ...prev.slice(1)]);
      toast.success("Imagem substituída com sucesso!");
    };
    reader.readAsDataURL(file);
  };

  const handleSendToServer = async () => {
    setIsUploading(true);
    try {
      // Simulação de requisição POST JSON para o servidor
      console.log("Enviando fotos para o servidor:", JSON.stringify(images));
      
      // Simula delay de rede
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.success("Galeria sincronizada com o servidor!");
    } catch (error) {
      toast.error("Erro ao enviar para o servidor.");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <section id="galeria-projetos" className="section-padding bg-black/40 relative">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeader 
          tag="Galeria"
          title="Substituição de"
          gradientTitle="Imagens"
          description="Gerencie as fotos do seu projeto com facilidade. Selecione arquivos para substituir as imagens existentes."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {images.map((image, index) => (
            <div key={index} className="group relative glass rounded-2xl overflow-hidden border border-white/10 aspect-video">
              <img 
                src={image.url} 
                alt={`Projeto ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                <button 
                  onClick={() => setSelectedImage(image.url)}
                  className="p-3 bg-primary/20 hover:bg-primary/40 rounded-full border border-primary/30 text-white transition-colors"
                  title="Visualizar em tamanho maior"
                >
                  <Maximize2 size={20} />
                </button>
                <label className="p-3 bg-white/10 hover:bg-white/20 rounded-full border border-white/20 text-white cursor-pointer transition-colors" title="Substituir imagem">
                  <Upload size={20} />
                  <input type="file" className="hidden" onChange={handleFileUpload} accept="image/*" />
                </label>
              </div>
              <div className="absolute bottom-3 left-3 px-2 py-1 glass text-[10px] text-white/60 rounded">
                Upload: {new Date(image.uploadDate).toLocaleDateString()}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <button 
            onClick={handleSendToServer}
            disabled={isUploading}
            className="flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 disabled:opacity-50"
          >
            {isUploading ? "Enviando..." : (
              <>
                <Send size={20} />
                Sincronizar com Servidor (POST JSON)
              </>
            )}
          </button>
        </div>
      </div>

      {/* Lightbox Simples */}
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