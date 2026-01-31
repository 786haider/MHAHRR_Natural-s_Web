
import React, { useState } from 'react';
import Image from 'next/image';
import { Heart } from 'lucide-react';

export interface PhilosophyCardProps {
    index: number;
    isVisible: boolean;
    icon: React.ReactNode;
    title: string;
    quote: string;
    description: string;
    imageUrl: string;
    color: 'emerald' | 'blue' | 'amber';
  }
  
export const PhilosophyCard = React.forwardRef<HTMLDivElement, PhilosophyCardProps>(
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
