import React from 'react';
import Slider from 'react-slick';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';

// Importando os assets das imagens carregadas
import result1 from '@/assets/result-1.png.asset.json';
import result2 from '@/assets/result-2.png.asset.json';
import result3 from '@/assets/result-3.png.asset.json';
import chat1 from '@/assets/chat-1.png.asset.json';
import chat2 from '@/assets/chat-2.png.asset.json';
import chat3 from '@/assets/chat-3.png.asset.json';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const resultsImages = [
  result1.url,
  result2.url,
  result3.url,
  chat1.url,
  chat2.url,
  chat3.url,
];

const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full glass border border-white/10 text-primary hover:bg-primary/20 transition-all"
      aria-label="Next slide"
    >
      <ChevronRight size={24} />
    </button>
  );
};

const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full glass border border-white/10 text-primary hover:bg-primary/20 transition-all"
      aria-label="Previous slide"
    >
      <ChevronLeft size={24} />
    </button>
  );
};

const ResultsCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <section id="carrossel-resultados" className="section-padding relative overflow-hidden bg-black/20">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeader 
          tag="Resultados Reais"
          title="Nossos Clientes"
          gradientTitle="Satisfeitos"
          description="Confira capturas de tela reais de conversas e resultados gerados pela Nex Automa."
        />

        <div className="relative px-8 md:px-0">
          <Slider {...settings} className="results-slider">
            {resultsImages.map((img, index) => (
              <div key={index} className="px-2">
                <div 
                  className="glass rounded-2xl overflow-hidden border border-white/10 flex items-center justify-center bg-black/40 group"
                  style={{ width: '250px', height: '150px', margin: '0 auto' }}
                >
                  <img 
                    src={img} 
                    alt={`Resultado ${index + 1}`} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .results-slider .slick-dots li button:before {
          color: var(--primary);
        }
        .results-slider .slick-dots li.slick-active button:before {
          color: var(--primary);
        }
        .results-slider .slick-list {
          padding: 20px 0;
        }
      `}} />
    </section>
  );
};

export default ResultsCarousel;