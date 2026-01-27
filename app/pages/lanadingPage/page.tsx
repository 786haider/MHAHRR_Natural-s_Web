"use client";
import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Leaf, Sparkles, Heart } from 'lucide-react';
import Image from 'next/image';

export default function LandingPage() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      setScrollY(window.scrollY);

      if (sectionRef.current) {
        const sectionTop = sectionRef.current.offsetTop;
        const scrollPosition = window.scrollY + window.innerHeight;
        
        cardRefs.current.forEach((card, index) => {
          if (card) {
            const cardTop = card.offsetTop + sectionTop;
            const cardBottom = cardTop + card.offsetHeight;
            
            if (scrollPosition > cardTop + 100 && window.scrollY < cardBottom) {
              setVisibleCards(prev => {
                if (!prev.includes(index)) {
                  return [...prev, index].sort((a, b) => a - b);
                }
                return prev;
              });
            }
          }
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    const style = document.createElement('style');
    style.textContent = `
      @keyframes marquee {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      .animate-marquee { animation: marquee 30s linear infinite; }
      .card-enter { opacity: 1; transform: translateY(0); }
      .card-exit { opacity: 0; transform: translateY(50px); }
    `;
    document.head.appendChild(style);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.head.removeChild(style);
    };
  }, []);

  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-300"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=1920&q=80')",
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div 
            className={`inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-6 py-2 rounded-full text-white text-sm mb-8 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
            }`}
          >
            <Leaf className="w-4 h-4 text-emerald-300" />
            <span>EST. NOVEMBER 2025 • KARACHI</span>
          </div>

          <h1 
            className={`text-7xl md:text-8xl font-bold mb-6 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <span className="text-white">Healing </span>
            <span className="text-emerald-300 italic font-serif">Solutions</span>
          </h1>

          <h2 
            className={`text-4xl md:text-5xl font-light text-white mb-8 transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Care for Skin & Health
          </h2>

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
            </span>
          </div>
          <div className="inline-block animate-marquee">
            <span className="text-6xl md:text-8xl font-bold text-green-200 uppercase tracking-wider">
              hhhh لقد خلقنا الإنسان في أحسن تقويم •|
            </span>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section ref={sectionRef} className="relative py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Philosophy
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Three principles guide everything we create
            </p>
          </div>

          <div className="space-y-8">
            <PhilosophyCard
              ref={(el) => { cardRefs.current[0] = el; }}
              index={0}
              isVisible={visibleCards.includes(0)}
              icon={<Leaf className="w-6 h-6" />}
              title="Herbality"
              quote="From earth's embrace, healing grace."
              description="Our formulations draw from centuries-old botanical wisdom, using only the purest herbs and plants that nature intended for our wellbeing."
              imageUrl="/sample.png"
              color="emerald"
            />

            <PhilosophyCard
              ref={(el) => { cardRefs.current[1] = el; }}
              index={1}
              isVisible={visibleCards.includes(1)}
              icon={<Sparkles className="w-6 h-6" />}
              title="Purity"
              quote="Clean ingredients, clear conscience."
              description="We believe in transparency. Every ingredient is natural, ethically sourced, and free from harmful chemicals. What you see is what you get—pure and simple."
              imageUrl="/sample.png"
              color="blue"
            />

            <PhilosophyCard
              ref={(el) => { cardRefs.current[2] = el; }}
              index={2}
              isVisible={visibleCards.includes(2)}
              icon={<Heart className="w-6 h-6" />}
              title="Humanity"
              quote="Care for people, care for the planet."
              description="Compassion guides our hands. We create products that heal not just the body, but the spirit, ensuring wellness for our community and our world."
              imageUrl="/sample.png"
              color="amber"
            />
          </div>
        </div>
      </section>

      <QuoteSliderSection />
      <AboutSection />

      <section className="relative h-[400px] overflow-hidden">
        <Image src="/sample.png" alt="Green leaf close-up" fill className="object-cover" />
      </section>
    </div>
  );
}

function QuoteSliderSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = ["/sample.png", "/sample.png", "/sample.png", "/sample.png", "/sample.png"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 60000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative h-[500px] md:h-[600px] overflow-hidden">
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image src={image} alt={`Nature slide ${index + 1}`} fill className="object-cover" />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        ))}
      </div>

      <div className="relative z-10 h-full flex items-center justify-center px-4">
        <div className="text-center max-w-4xl">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight mb-6">
            &ldquo;Nature does not hurry,<br />
            yet everything is<br />
            accomplished.&rdquo;
          </h2>
          <p className="text-xl md:text-2xl text-white/80 italic font-serif">- Lao Tzu</p>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

function AboutSection() {
  const [isCardHovered, setIsCardHovered] = useState(false);

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes floatUpDown {
          0%, 100% { transform: translate(-50%, 0); }
          50% { transform: translate(-50%, -16px); }
        }
        .animate-float-card { animation: floatUpDown 2s ease-in-out infinite; }
        .animate-float-card.paused { animation-play-state: paused; }
      `}} />
      
      <section className="relative py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/sample.png"
                  alt="Hands working with natural herbs"
                  width={800}
                  height={600}
                  className="w-full h-[500px] lg:h-[600px] object-cover"
                />
                <a
                  href="#"
                  onMouseEnter={() => setIsCardHovered(true)}
                  onMouseLeave={() => setIsCardHovered(false)}
                  className={`absolute bottom-8 left-1/2 bg-white rounded-lg shadow-xl p-6 w-[240px] cursor-pointer transition-all duration-500 ease-in-out hover:shadow-2xl hover:scale-105 animate-float-card ${
                    isCardHovered ? 'paused' : ''
                  }`}
                >
                  <div className="flex items-center justify-center mb-3">
                    <div className={`w-16 h-16 transition-transform duration-500 ${
                      isCardHovered ? 'rotate-12 scale-110' : 'rotate-0 scale-100'
                    }`}>
                      <Image
                        src="/logo_without_text_bgremove.png"
                        alt="MHAHRR Logo"
                        width={64}
                        height={64}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                  
                  <h1 className="text-center text-base font-bold text-gray-900 mb-2">
                    MHAHRR Natural&apos;s
                  </h1>
                  
                  <h3 className="text-center text-xs text-emerald-600 font-medium mb-3">
                    | Healing Solution
                  </h3>
                  
                  <p className="text-center text-xs text-gray-500 uppercase tracking-wide leading-tight">
                    Official Partner of<br />Nature
                  </p>
                </a>
              </div>
            </div>

            <div className="space-y-6">
              <div className="inline-block">
                <span className="text-sm font-medium text-emerald-600 uppercase tracking-wider">
                  The Origin Story
                </span>
              </div>

              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                <span className="text-black">Rooted in Karachi,</span>
                <br />
                <span className="text-emerald-500">Blooming </span>
                <span className="text-cyan-400">for the World</span>
              </h2>

              <p className="text-gray-600 leading-relaxed text-[15px]">
                Founded in <span className="font-semibold text-black">November 2025</span>, MHAHRR Natural emerged from a simple yet profound realization: the best solutions for our skin and health have existed for millennia, hidden in the leaves, roots, and waters of our earth.
              </p>

              <p className="text-gray-600 leading-relaxed text-[15px]">
                Located in the vibrant heart of <span className="font-semibold text-black">Karachi, Sindh, Pakistan</span>, we blend traditional Eastern herbal wisdom with modern dermatological science. We are not just a brand; we are a movement towards conscious living.
              </p>

              <p className="text-gray-600 leading-relaxed text-[15px]">
                Our slogan, <span className="italic text-emerald-600">&quot;Healing Solution. Care for your skin and health&quot;</span>, is more than a tagline—it is the promise we weave into every bottle, jar, and package we deliver to your doorstep.
              </p>

              <div className="grid grid-cols-2 gap-8 pt-8">
                <div className="border-l-4 border-transparent pl-0">
                  <div className="text-5xl lg:text-6xl font-bold text-black mb-2">100%</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">Natural Ingredients</div>
                </div>

                <div className="border-l-4 border-gray-200 pl-6">
                  <div className="text-5xl lg:text-6xl font-bold text-black mb-2">0%</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">Artificial Additives</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curated Collections Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-gray-900">Curated </span>
              <span className="text-emerald-600 italic font-serif">Collections</span>
            </h2>
            <button className="flex items-center gap-2 text-gray-700 hover:text-emerald-600 transition-colors group">
              <span className="text-sm font-medium">View All Products</span>
              <ChevronDown className="w-4 h-4 rotate-[-90deg] group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Collections Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Large Card - Herbal Skincare */}
            <div className="relative group overflow-hidden rounded-2xl h-[400px] cursor-pointer">
              <Image
                src="/sample.png"
                alt="Herbal Skincare"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs uppercase tracking-wider mb-3">
                  Bestseller
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-2">Herbal Skincare</h3>
                <p className="text-white/90 text-sm">Renew your glow with organic touch</p>
              </div>
            </div>

            {/* Right Column - Two Smaller Cards */}
            <div className="flex flex-col gap-6">
              {/* Organic Haircare */}
              <div className="relative group overflow-hidden rounded-2xl h-[192px] cursor-pointer">
                <Image
                  src="/sample.png"
                  alt="Organic Haircare"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-1">Organic Haircare</h3>
                  <p className="text-white/90 text-xs">Nurture naturally, shine brilliantly</p>
                </div>
              </div>

              {/* Holistic Wellness */}
              <div className="relative group overflow-hidden rounded-2xl h-[192px] cursor-pointer bg-gradient-to-br from-teal-400 to-cyan-300">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAtNGgydjJoLTJ2LTJ6bS0yIDJ2Mmgydi0yaC0yem0wLTJ2Mmgydi0yaC0yem0wLTJ2Mmgydi0yaC0yem0yLTJ2Mmgydi0yaC0yem0wLTJ2Mmgydi0yaC0yem0tMiAydjJoMnYtMmgtMnptMC0ydjJoMnYtMmgtMnptMC0ydjJoMnYtMmgtMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
                
                <div className="relative h-full flex items-end p-6">
                  <div className="text-white">
                    <h3 className="text-2xl font-bold mb-1">Holistic Wellness</h3>
                    <p className="text-white/90 text-xs">Balance body, mind, and soul</p>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-6 right-6 w-20 h-20 opacity-20">
                  <div className="absolute inset-0 bg-white rounded-full"></div>
                  <div className="absolute inset-2 bg-teal-300 rounded-full"></div>
                </div>
                
                {/* Product visualization - mortar & pestle silhouette */}
                <div className="absolute bottom-4 right-6 opacity-30">
                  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="40" cy="50" r="15" fill="white" opacity="0.3"/>
                    <rect x="38" y="20" width="4" height="25" fill="white" opacity="0.4"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

interface PhilosophyCardProps {
  index: number;
  isVisible: boolean;
  icon: React.ReactNode;
  title: string;
  quote: string;
  description: string;
  imageUrl: string;
  color: 'emerald' | 'blue' | 'amber';
}

const PhilosophyCard = React.forwardRef<HTMLDivElement, PhilosophyCardProps>(
  ({ index, isVisible, icon, title, quote, description, imageUrl, color }, ref) => {
    const [isHovered, setIsHovered] = useState(false);

    const colorSchemes = {
      emerald: {
        lightBg: 'bg-emerald-50/50',
        iconBg: 'bg-emerald-100',
        iconColor: 'text-emerald-600',
        titleColor: 'text-emerald-700',
        heartBg: 'bg-emerald-50',
        heartIcon: 'text-emerald-200',
      },
      blue: {
        lightBg: 'bg-blue-50/50',
        iconBg: 'bg-blue-100',
        iconColor: 'text-blue-600',
        titleColor: 'text-blue-700',
        heartBg: 'bg-blue-50',
        heartIcon: 'text-blue-200',
      },
      amber: {
        lightBg: 'bg-amber-50/50',
        iconBg: 'bg-amber-100',
        iconColor: 'text-amber-600',
        titleColor: 'text-amber-700',
        heartBg: 'bg-amber-50',
        heartIcon: 'text-amber-200',
      }
    };

    const scheme = colorSchemes[color];

    return (
      <div
        ref={ref}
        className={`relative py-12 transition-all duration-700 ${
          isVisible ? 'card-enter' : 'card-exit'
        } ${isHovered ? scheme.lightBg : 'bg-transparent'}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center px-4">
          {index % 2 === 0 && (
            <div className="relative h-[280px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src={imageUrl}
                alt={title}
                fill
                className={`object-cover transition-all duration-700 ${
                  isHovered ? 'scale-105 grayscale-0' : 'grayscale'
                }`}
              />
            </div>
          )}

          <div className="relative">
            {color === 'amber' && (
              <div className={`absolute -top-8 -right-8 w-48 h-48 ${scheme.heartBg} rounded-full flex items-center justify-center opacity-20 pointer-events-none`}>
                <Heart className={`w-24 h-24 ${scheme.heartIcon}`} />
              </div>
            )}

            <div className="relative z-10 space-y-4">
              <div
                className={`inline-flex items-center justify-center w-12 h-12 rounded-full transition-all duration-500 ${
                  isHovered ? `${scheme.iconBg} ${scheme.iconColor}` : 'bg-gray-200 text-gray-400'
                }`}
              >
                {icon}
              </div>

              <h3
                className={`text-3xl md:text-4xl font-normal transition-colors duration-500 ${
                  isHovered ? scheme.titleColor : 'text-gray-700'
                }`}
              >
                {title}
              </h3>

              <p className="text-lg italic text-gray-600">
                &ldquo;{quote}&rdquo;
              </p>

              <p className="text-gray-600 text-sm leading-relaxed max-w-md">
                {description}
              </p>
            </div>
          </div>

          {index % 2 === 1 && (
            <div className="relative h-[280px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src={imageUrl}
                alt={title}
                fill
                className={`object-cover transition-all duration-700 ${
                  isHovered ? 'scale-105 grayscale-0' : 'grayscale'
                }`}
              />
            </div>
          )}
        </div>
      </div>
    );
  }
);

PhilosophyCard.displayName = 'PhilosophyCard';