// 


"use client";
import React, { useState, useEffect } from 'react';
import { ChevronDown, Leaf, Sparkles, Heart } from 'lucide-react';

export default function LandingPage() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Add marquee animation styles
    const style = document.createElement('style');
    style.textContent = `
      @keyframes marquee {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-50%);
        }
      }
      .animate-marquee {
        animation: marquee 30s linear infinite;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.head.removeChild(style);
    };
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-300"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=1920&q=80')",
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          {/* Badge */}
          <div 
            className={`inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-6 py-2 rounded-full text-white text-sm mb-8 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
            }`}
          >
            <Leaf className="w-4 h-4 text-emerald-300" />
            <span>EST. NOVEMBER 2025 • KARACHI</span>
          </div>

          {/* Main Heading */}
          <h1 
            className={`text-7xl md:text-8xl font-bold mb-6 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <span className="text-white">Healing </span>
            <span className="text-emerald-300 italic font-serif">Solutions</span>
          </h1>

          {/* Subheading */}
          <h2 
            className={`text-4xl md:text-5xl font-light text-white mb-8 transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Care for Skin & Health
          </h2>

          {/* Description */}
          <p 
            className={`text-xl md:text-2xl text-white/90 mb-4 transition-all duration-1000 delay-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Discover the synergy of herbality, purity, and humanity.
          </p>

          <p 
            className={`text-lg md:text-xl text-white/80 mb-12 transition-all duration-1000 delay-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            MHAHRR Natural Formulations for timeless remedies.
          </p>

          {/* CTA Button */}
          <button
            onClick={scrollToContent}
            className={`group bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '800ms' }}
          >
            <span className="flex items-center gap-2">
              Explore Collection
              <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </span>
          </button>

          {/* Scroll Indicator */}
          <div 
            className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-1000 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="animate-bounce">
              <ChevronDown className="w-8 h-8 text-white/60" />
            </div>
          </div>
        </div>
      </section>

      {/* Sliding Text Marquee */}
      <section className="py-12 bg-gray-100 overflow-hidden">
        <div className="whitespace-nowrap">
          <div className="inline-block animate-marquee">
            <span className="text-6xl md:text-8xl font-bold text-blue-200 uppercase tracking-wider">
             |• لقد خلقنا الإنسان في أحسن تقويم 
              {/* PURE • HEALING • SUSTAINABLE • NATURAL • PURE • HEALING • SUSTAINABLE • NATURAL •  */}

            </span>
          </div>
          <div className="inline-block animate-marquee">
            <span className="text-6xl md:text-8xl font-bold text-green-200 uppercase tracking-wider">
              {/* PURE • HEALING • SUSTAINABLE • NATURAL • PURE • HEALING • SUSTAINABLE • NATURAL • */}
              hhhh لقد خلقنا الإنسان في أحسن تقويم •|
            </span>
          </div>
        </div>
      </section>


    </div>
  );
}