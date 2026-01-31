
import React from 'react';
import Image from 'next/image';

interface CuratedCollectionsSectionProps {
  curatedRef: React.RefObject<HTMLDivElement>;
  visibleSections: string[];
}

export default function CuratedCollectionsSection({ curatedRef, visibleSections }: CuratedCollectionsSectionProps) {
  return (
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
  );
}
