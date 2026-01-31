
'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function About() {
    const heroRef = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-fade-in');
                    }
                });
            },
            { threshold: 0.1 }
        );

        const elements = document.querySelectorAll('.animate-on-scroll');
        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <div className="min-h-screen bg-white overflow-hidden">
            <style jsx>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes float {
                    0%, 100% {
                        transform: translateY(0px);
                    }
                    50% {
                        transform: translateY(-20px);
                    }
                }

                @keyframes pulse-glow {
                    0%, 100% {
                        opacity: 0.4;
                    }
                    50% {
                        opacity: 0.8;
                    }
                }

                @keyframes gradient-shift {
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

                .animate-fade-in {
                    animation: fadeInUp 1s ease-out forwards;
                }

                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }

                .animate-pulse-glow {
                    animation: pulse-glow 3s ease-in-out infinite;
                }

                .gradient-animated {
                    background-size: 200% 200%;
                    animation: gradient-shift 8s ease infinite;
                }
            `}</style>

            {/* Hero Section with Animated Gradient */}
            <div 
                ref={heroRef}
                className="relative bg-gradient-to-br from-emerald-200 via-green-100 to-teal-200 gradient-animated py-32 px-4 overflow-hidden"
            >
                {/* Floating Decorative Elements */}
                <div className="absolute top-10 left-10 w-32 h-32 bg-emerald-400 rounded-full opacity-30 animate-float blur-2xl"></div>
                <div className="absolute bottom-20 right-20 w-40 h-40 bg-green-400 rounded-full opacity-25 animate-float blur-2xl" style={{ animationDelay: '2s' }}></div>
                <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-teal-400 rounded-full opacity-30 animate-float blur-2xl" style={{ animationDelay: '4s' }}></div>
                <div className="absolute top-20 right-1/4 w-36 h-36 bg-lime-300 rounded-full opacity-20 animate-float blur-3xl" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-10 left-1/4 w-28 h-28 bg-emerald-500 rounded-full opacity-25 animate-float blur-2xl" style={{ animationDelay: '3s' }}></div>

                {/* Main Content */}
                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <div className="animate-on-scroll opacity-0" style={{ animationDelay: '0.2s' }}>
                        <Image
                            src="/logo_without_text_bgremove.png"
                            alt="MHAHRR Natural Logo"
                            width={100}
                            height={100}
                            className="mx-auto mb-4" // Centering and spacing
                        />
                        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-6 tracking-tight">
                            About{' '}
                            <span className="bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 bg-clip-text text-transparent">
                                MHAHRR Natural
                            </span>
                        </h1>
                    </div>
                    
                    <div className="animate-on-scroll opacity-0" style={{ animationDelay: '0.4s' }}>
                        <p className="text-xl md:text-2xl text-gray-700 font-light max-w-3xl mx-auto leading-relaxed">
                            Discover our story, mission, and commitment to natural wellness
                        </p>
                    </div>

                    {/* Animated Decorative Line */}
                    <div className="animate-on-scroll opacity-0 mt-12" style={{ animationDelay: '0.6s' }}>
                        <div className="w-32 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full"></div>
                    </div>
                </div>

                {/* Animated Leaves/Icons */}
                <div className="absolute bottom-10 left-1/4 animate-float" style={{ animationDelay: '1s' }}>
                    <svg className="w-16 h-16 text-emerald-500 opacity-30" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C9.24 2 7 4.24 7 7c0 2.85 2.92 7.21 5 9.88 2.11-2.69 5-7 5-9.88 0-2.76-2.24-5-5-5zm0 7.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                </div>

                <div className="absolute top-1/3 right-1/4 animate-float" style={{ animationDelay: '3s' }}>
                    <svg className="w-20 h-20 text-teal-500 opacity-30" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                </div>

                <div className="absolute bottom-1/4 right-1/3 animate-float" style={{ animationDelay: '5s' }}>
                    <svg className="w-14 h-14 text-green-500 opacity-25" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/>
                    </svg>
                </div>
            </div>
        </div>
    );
}