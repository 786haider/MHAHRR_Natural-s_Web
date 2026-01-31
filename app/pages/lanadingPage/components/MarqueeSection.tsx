
import React from 'react';

export default function MarqueeSection() {
  return (
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
  );
}
