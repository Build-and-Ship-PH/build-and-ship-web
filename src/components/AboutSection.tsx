'use client';

import { useEffect, useRef, useState } from 'react';
import { HeartPulse, Truck } from 'lucide-react';

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
        <section id="about" ref={sectionRef} className="py-32 relative overflow-hidden bg-zinc-950 border-t border-zinc-800">
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-5xl mx-auto">
                    <div className={`mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 mb-6">
                            <span className="text-xs font-semibold text-orange-400 uppercase tracking-wider">Our Mission</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white leading-tight font-[family-name:var(--font-poppins)]">
                            Building the Future, <span className="text-orange-400">Together</span>
                        </h2>
                        <p className="text-lg text-gray-300 mb-4 leading-relaxed max-w-3xl">
                            "Ship or be Shipped" started as a hackathon, but it's evolving into something bigger—a
                            community of builders, designers, and innovators solving real-world problems.
                        </p>
                        <p className="text-base text-gray-500 leading-relaxed max-w-3xl">
                            We're partnering with leading startups to connect talented individuals with meaningful projects.
                            This year, our focus is on <span className="text-teal-400 font-medium">Healthcare</span> and{' '}
                            <span className="text-orange-400 font-medium">Logistics</span>, but we're just getting started.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className={`group bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 hover:border-teal-500/50 transition-all duration-300 ${isVisible ? 'animate-fade-in-up delay-200' : 'opacity-0'}`}>
                            <div className="w-14 h-14 rounded-xl bg-teal-500/10 flex items-center justify-center mb-6 group-hover:bg-teal-500/20 transition-colors">
                                <HeartPulse className="w-7 h-7 text-teal-400" />
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-teal-400 transition-colors duration-300 font-[family-name:var(--font-poppins)]">Healthcare Innovation</h3>
                            <p className="text-gray-500 leading-relaxed text-sm">
                                Transform patient care, medical systems, and health tech with cutting-edge solutions
                                that make a real difference in people's lives.
                            </p>
                        </div>
                        <div className={`group bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 hover:border-orange-500/50 transition-all duration-300 ${isVisible ? 'animate-fade-in-up delay-400' : 'opacity-0'}`}>
                            <div className="w-14 h-14 rounded-xl bg-orange-500/10 flex items-center justify-center mb-6 group-hover:bg-orange-500/20 transition-colors">
                                <Truck className="w-7 h-7 text-orange-400" />
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-orange-400 transition-colors duration-300 font-[family-name:var(--font-poppins)]">Logistics Optimization</h3>
                            <p className="text-gray-500 leading-relaxed text-sm">
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
