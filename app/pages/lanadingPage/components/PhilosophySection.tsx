
import React from 'react';
import { Leaf, Sparkles, Heart } from 'lucide-react';
import { PhilosophyCard } from './PhilosophyCard';

interface PhilosophySectionProps {
  sectionRef: React.RefObject<HTMLDivElement>;
  cardRefs: React.MutableRefObject<(HTMLDivElement | null)[]>;
  visibleCards: number[];
}

export default function PhilosophySection({ sectionRef, cardRefs, visibleCards }: PhilosophySectionProps) {
  return (
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
  );
}
