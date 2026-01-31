"use client";
import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Leaf, Sparkles, Heart, Instagram, Linkedin } from 'lucide-react';
import Image from 'next/image';

export default function LandingPage() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [visibleSections, setVisibleSections] = useState<string[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const curatedRef = useRef<HTMLDivElement>(null);
  const whereWeAreRef = useRef<HTMLDivElement>(null);
  const readyToEmbraceRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      setScrollY(window.scrollY);

      // Handle philosophy cards animation
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

      // Handle sections scroll animation
      const sections = [
        { ref: curatedRef, name: 'curated' },
        { ref: whereWeAreRef, name: 'whereWeAre' },
        { ref: readyToEmbraceRef, name: 'readyToEmbrace' }
      ];

      sections.forEach(({ ref, name }) => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          
          if (rect.top < windowHeight * 0.75) {
            setVisibleSections(prev => {
              if (!prev.includes(name)) {
                return [...prev, name];
              }
              return prev;
            });
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    const style = document.createElement('style');
    style.textContent = `
      @keyframes marquee {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      .animate-marquee { animation: marquee 30s linear infinite; }
      .card-enter { opacity: 1; transform: translateY(0); }
      .card-exit { opacity: 0; transform: translateY(50px); }
      
      @keyframes slideUpFade {
        from {
          opacity: 0;
          transform: translateY(60px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      .animate-slide-up {
        animation: slideUpFade 0.8s ease-out forwards;
      }

      @keyframes gradientShift {
        0% {
          background-position: 0% 50%;
        }
        50% {
          background-position: 100% 50%;
        }
        100% {
          background-position: 0% 50%;
        }
      }

      @keyframes float {
        0%, 100% {
          transform: translateY(0px) rotate(0deg);
        }
        50% {
          transform: translateY(-20px) rotate(5deg);
        }
      }

      @keyframes pulse-glow {
        0%, 100% {
          opacity: 0.3;
        }
        50% {
          opacity: 0.6;
        }
      }

      .animate-gradient {
        background-size: 200% 200%;
        animation: gradientShift 15s ease infinite;
      }

      .animate-float {
        animation: float 6s ease-in-out infinite;
      }

      .animate-pulse-glow {
        animation: pulse-glow 4s ease-in-out infinite;
      }
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
              quote="Care crafted with compassion."
              description="Beyond products, we create connections. Our commitment extends to ethical practices, sustainable sourcing, and supporting communities that help us bring nature's best to you."
              imageUrl="/sample.png"
              color="amber"
            />
          </div>
        </div>
      </section>

      {/* Curated Collections Section */}
      <section 
        ref={curatedRef}
        className={`py-24 bg-gradient-to-b from-white to-emerald-50 ${
          visibleSections.includes('curated') ? 'animate-slide-up' : 'opacity-0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Curated Collections
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our carefully crafted range of natural wellness products
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Collection Card 1 */}
            <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="relative h-80 overflow-hidden">
                <Image
                  src="/sample.png"
                  alt="Skincare Collection"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Skincare Essentials</h3>
                  <p className="text-sm text-white/90">Nourish and rejuvenate your skin naturally</p>
                </div>
              </div>
              <div className="p-6">
                <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-lg font-semibold transition-colors">
                  Explore Collection
                </button>
              </div>
            </div>

            {/* Collection Card 2 */}
            <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="relative h-80 overflow-hidden">
                <Image
                  src="/sample.png"
                  alt="Wellness Collection"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Wellness Range</h3>
                  <p className="text-sm text-white/90">Holistic health from nature's bounty</p>
                </div>
              </div>
              <div className="p-6">
                <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-lg font-semibold transition-colors">
                  Explore Collection
                </button>
              </div>
            </div>

            {/* Collection Card 3 */}
            <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="relative h-80 overflow-hidden">
                <Image
                  src="/sample.png"
                  alt="Herbal Collection"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Herbal Remedies</h3>
                  <p className="text-sm text-white/90">Time-tested herbal formulations</p>
                </div>
              </div>
              <div className="p-6">
                <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-lg font-semibold transition-colors">
                  Explore Collection
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Where We Are Section */}
      <section 
        ref={whereWeAreRef}
        className={`py-24 bg-gradient-to-b from-emerald-50 to-white ${
          visibleSections.includes('whereWeAre') ? 'animate-slide-up' : 'opacity-0'
        }`}
      >
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Where We Are
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Connect with us on social media and stay updated with our latest products, wellness tips, and community stories.
            </p>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center items-center gap-12 flex-wrap">
            {/* Instagram */}
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-4 transition-all duration-300 hover:scale-125 cursor-pointer"
            >
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:rotate-6">
                <Instagram className="w-12 h-12 text-white" />
              </div>
              <span className="text-gray-900 font-semibold text-base group-hover:text-pink-600 transition-colors">Instagram</span>
            </a>

            {/* TikTok */}
            <a 
              href="https://tiktok.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-4 transition-all duration-300 hover:scale-125 cursor-pointer"
            >
              <div className="w-24 h-24 rounded-full bg-black flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:rotate-6">
                <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </div>
              <span className="text-gray-900 font-semibold text-base group-hover:text-black transition-colors">TikTok</span>
            </a>

            {/* Facebook */}
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-4 transition-all duration-300 hover:scale-125 cursor-pointer"
            >
              <div className="w-24 h-24 rounded-full bg-blue-600 flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:rotate-6">
                <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </div>
              <span className="text-gray-900 font-semibold text-base group-hover:text-blue-600 transition-colors">Facebook</span>
            </a>

            {/* X (Twitter) */}
            <a 
              href="https://x.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-4 transition-all duration-300 hover:scale-125 cursor-pointer"
            >
              <div className="w-24 h-24 rounded-full bg-black flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:rotate-6">
                <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </div>
              <span className="text-gray-900 font-semibold text-base group-hover:text-black transition-colors">X</span>
            </a>

            {/* LinkedIn */}
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-4 transition-all duration-300 hover:scale-125 cursor-pointer"
            >
              <div className="w-24 h-24 rounded-full bg-blue-700 flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:rotate-6">
                <Linkedin className="w-12 h-12 text-white" />
              </div>
              <span className="text-gray-900 font-semibold text-base group-hover:text-blue-700 transition-colors">LinkedIn</span>
            </a>
          </div>
        </div>
      </section>

      {/* Ready to Embrace Natural Healing Section */}
      <section 
        ref={readyToEmbraceRef}
        className={`relative py-32 overflow-hidden ${
          visibleSections.includes('readyToEmbrace') ? 'animate-slide-up' : 'opacity-0'
        }`}
      >
        {/* Animated Green Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-green-500 to-emerald-700 animate-gradient"></div>
        
        {/* Animated Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Floating Leaf Shapes */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-400/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-green-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-emerald-300/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }}></div>
          
          {/* Pulsing Glow Circles */}
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse-glow"></div>
          <div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-white/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
          
          {/* Decorative Leaf Icons */}
          <div className="absolute top-10 right-20 opacity-20">
            <Leaf className="w-16 h-16 text-white animate-float" />
          </div>
          <div className="absolute bottom-10 left-20 opacity-20">
            <Leaf className="w-20 h-20 text-white animate-float" style={{ animationDelay: '3s' }} />
          </div>
          <div className="absolute top-1/3 left-10 opacity-15">
            <Sparkles className="w-12 h-12 text-white animate-float" style={{ animationDelay: '1s' }} />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Ready to Embrace
            <br />
            <span className="text-emerald-100 italic font-serif">Natural Healing?</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-white/95 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join thousands who have switched to MHAHRR Natural for a healthier, purer lifestyle.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group relative px-10 py-5 bg-white text-emerald-700 rounded-full text-lg font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden">
              <span className="relative z-10">Shop Now</span>
              <div className="absolute inset-0 bg-emerald-50 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </button>
            
            <button className="group px-10 py-5 bg-transparent border-3 border-white text-white rounded-full text-lg font-bold transition-all duration-300 hover:bg-white hover:text-emerald-700 hover:scale-105 hover:shadow-2xl">
              Get in Touch
            </button>
          </div>

          {/* Trust Badge */}
          <div className="mt-16 inline-flex items-center gap-3 bg-white/20 backdrop-blur-md px-8 py-4 rounded-full">
            <Heart className="w-6 h-6 text-white" />
            <span className="text-white font-semibold">Trusted by 10,000+ Natural Health Enthusiasts</span>
          </div>
        </div>
      </section>
    </div>
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