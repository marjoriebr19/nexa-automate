import React, { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { motion } from 'framer-motion';
import { AlertCircle, ChevronLeft, ChevronRight, MessageSquare } from 'lucide-react';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  }
};

const ImageCarousel = () => {
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoading(true);
        // Using the provided URLs as mock source
        const urls = ["https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1024&h=768", "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=1024&h=768", "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1024&h=768"];
        setImages(urls);
      } catch (err) {
        setError("Erro ao carregar imagens. Por favor, tente novamente.");
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  if (loading) return <div className="h-[400px] flex items-center justify-center text-primary animate-pulse">Carregando...</div>;
  
  if (error) return (
    <div className="h-[400px] flex flex-col items-center justify-center text-destructive gap-4">
      <AlertCircle size={48} />
      <p>{error}</p>
    </div>
  );

  const CustomDot = ({ onClick, active }: any) => {
    return (
      <button
        className={`mx-1 w-2 h-2 rounded-full transition-all duration-300 ${active ? 'bg-primary w-6' : 'bg-primary/30'}`}
        onClick={() => onClick()}
      />
    );
  };

  const CustomButtonGroup = ({ next, previous }: any) => {
    return (
      <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-4 pointer-events-none">
        <button 
          onClick={() => previous()} 
          className="p-2 rounded-full glass pointer-events-auto hover:bg-primary/20 transition-colors"
        >
          <ChevronLeft className="text-primary" />
        </button>
        <button 
          onClick={() => next()} 
          className="p-2 rounded-full glass pointer-events-auto hover:bg-primary/20 transition-colors"
        >
          <ChevronRight className="text-primary" />
        </button>
      </div>
    );
  };

  return (
    <section className="py-20 relative px-4">
      <div className="max-w-4xl mx-auto rounded-[2rem] overflow-hidden glass relative">
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={5000}
          showDots={true}
          customDot={<CustomDot />}
          arrows={false}
          renderButtonGroupOutside={true}
          customButtonGroup={<CustomButtonGroup />}
          className="pb-12"
        >
          {images.map((url, index) => (
            <div key={index} className="relative aspect-[4/3] w-full">
              <img
                src={url}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-16 left-8 right-8 p-6 glass rounded-2xl">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <MessageSquare size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-sm">Depoimento WhatsApp</p>
                    <p className="text-xs text-muted-foreground">Recentemente</p>
                  </div>
                </div>
                <p className="text-sm italic">
                  "Olá, achei o seu aplicativo de carrossel muito útil! As imagens são lindas e a navegação é muito fácil. Mas tive um problema com a imagem 3, ela não carregou corretamente. Você pode ajudar?"
                </p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default ImageCarousel;