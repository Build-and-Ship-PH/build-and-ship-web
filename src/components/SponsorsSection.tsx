'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { organizers, sponsors } from '@/config/sponsors';

export const SponsorsSection = () => {
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

    const tealGradients = [
        "from-teal-400 to-cyan-500",
        "from-cyan-400 to-sky-500",
        "from-teal-500 to-teal-600",
        "from-cyan-500 to-blue-500",
    ];

    return (
        <section id="sponsors" ref={sectionRef} className="py-32 relative overflow-hidden bg-black border-t border-teal-300/10">
            <div className="container mx-auto px-6 text-center">

                {/* Organizers */}
                <div className={`mb-20 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-500/10 border border-teal-300/30 mb-6 animate-pulse-glow">
                        <span className="text-xs font-medium text-teal-300 uppercase tracking-wider">Organized By</span>
                    </div>
                    <div className="flex flex-wrap justify-center gap-8 mt-8">
                        {organizers.map((org, index) => (
                            <div
                                key={org.name}
                                className={`group relative ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                            >
                                <div className={`absolute inset-0 bg-gradient-to-r ${tealGradients[index % tealGradients.length]} blur-xl opacity-20 group-hover:opacity-40 transition-opacity rounded-xl`} />
                                <div className="relative px-8 py-6 bg-teal-500/5 border border-teal-300/20 rounded-xl backdrop-blur-sm flex flex-col items-center justify-center min-w-[180px] min-h-[120px] hover:bg-teal-500/10 hover:border-teal-300/40 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-teal-500/20">
                                    {org.logo ? (
                                        <div className="mb-2">
                                            <Image
                                                src={org.logo}
                                                alt={org.name}
                                                width={80}
                                                height={80}
                                                className="object-contain transition-transform duration-300 group-hover:scale-110"
                                            />
                                        </div>
                                    ) : (
                                        <span className="font-bold text-xl text-white group-hover:text-teal-300 transition-colors duration-300">{org.name}</span>
                                    )}
                                    {org.description && (
                                        <span className="text-xs text-teal-200/60 mt-2">{org.description}</span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Sponsors */}
                <div className={`${isVisible ? 'animate-fade-in-up delay-400' : 'opacity-0'}`}>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-500/10 border border-teal-300/30 mb-6 animate-pulse-glow">
                        <span className="text-xs font-medium text-teal-300 uppercase tracking-wider">Sponsored By</span>
                    </div>
                    <div className="flex flex-wrap justify-center gap-8 mt-8">
                        {sponsors.map((sponsor, index) => (
                            <div
                                key={sponsor.name}
                                className={`group px-8 py-6 bg-teal-500/5 border border-teal-300/20 rounded-xl backdrop-blur-sm flex flex-col items-center justify-center min-w-[180px] min-h-[120px] hover:bg-teal-500/10 hover:border-teal-300/40 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                            >
                                {sponsor.logo ? (
                                    <div className="mb-2">
                                        <Image
                                            src={sponsor.logo}
                                            alt={sponsor.name}
                                            width={80}
                                            height={80}
                                            className="object-contain transition-transform duration-300 group-hover:scale-110"
                                        />
                                    </div>
                                ) : (
                                    <span className="font-medium text-lg text-gray-300 group-hover:text-teal-200 transition-colors duration-300">{sponsor.name}</span>
                                )}
                                {sponsor.description && (
                                    <span className="text-xs text-teal-200/60 mt-2">{sponsor.description}</span>
                                )}
                            </div>
                        ))}
                        <div className={`px-8 py-6 border border-dashed border-teal-300/30 rounded-xl flex items-center justify-center min-w-[180px] min-h-[120px] ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${0.6 + sponsors.length * 0.1}s` }}>
                            <span className="text-sm text-teal-200/60">More soon...</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};
