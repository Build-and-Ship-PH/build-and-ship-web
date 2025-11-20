'use client';

import { useEffect, useRef, useState } from 'react';

export const AboutSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section id="about" ref={sectionRef} className="py-32 relative overflow-hidden bg-gradient-to-b from-black via-teal-950/5 to-black border-t border-teal-300/10">
            {/* Gradient Background Animation */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-teal-500/20 rounded-full blur-3xl animate-pulse-scale"></div>
                <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-cyan-500/20 rounded-full blur-3xl animate-pulse-scale" style={{ animationDelay: '1s' }}></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-5xl mx-auto">
                    <div className={`mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-500/10 border border-teal-300/30 mb-6 animate-pulse-glow">
                            <span className="text-xs font-medium text-teal-300 uppercase tracking-wider">Our Mission</span>
                        </div>
                        <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white leading-tight">
                            Building the Future, <span className="bg-gradient-to-r from-teal-300 via-cyan-400 to-sky-300 bg-clip-text text-transparent">Together</span>
                        </h2>
                        <p className="text-xl text-teal-100/80 mb-6 leading-relaxed max-w-3xl">
                            "Ship or be Shipped" started as a hackathon, but it's evolving into something bigger—a
                            community of builders, designers, and innovators solving real-world problems.
                        </p>
                        <p className="text-lg text-teal-200/60 leading-relaxed max-w-3xl">
                            We're partnering with leading startups to connect talented individuals with meaningful projects.
                            This year, our focus is on <span className="text-teal-300 font-medium">Healthcare</span> and{' '}
                            <span className="text-teal-300 font-medium">Logistics</span>, but we're just getting started.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className={`group bg-teal-500/5 border border-teal-300/20 rounded-2xl p-8 hover:bg-teal-500/10 hover:border-teal-300/40 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-teal-500/20 ${isVisible ? 'animate-fade-in-up delay-200' : 'opacity-0'}`}>
                            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block animate-float">🏥</div>
                            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-teal-300 transition-colors duration-300">Healthcare Innovation</h3>
                            <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                                Transform patient care, medical systems, and health tech with cutting-edge solutions
                                that make a real difference in people's lives.
                            </p>
                        </div>
                        <div className={`group bg-teal-500/5 border border-teal-300/20 rounded-2xl p-8 hover:bg-teal-500/10 hover:border-teal-300/40 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20 ${isVisible ? 'animate-fade-in-up delay-400' : 'opacity-0'}`}>
                            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block animate-float" style={{ animationDelay: '0.5s' }}>📦</div>
                            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">Logistics Optimization</h3>
                            <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                                Revolutionize supply chains, delivery networks, and operational efficiency with
                                smart technology and innovative thinking.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
