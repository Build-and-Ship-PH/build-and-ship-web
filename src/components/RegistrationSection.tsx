'use client';

import { useEffect, useRef, useState } from 'react';
import { Target, Users, Trophy, ExternalLink } from 'lucide-react';

export const RegistrationSection = () => {
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

    const highlights = [
        { icon: Target, title: "24-Hour Sprint", desc: "Build your MVP in one intense day" },
        { icon: Users, title: "Expert Mentors", desc: "Get guidance from industry leaders" },
        { icon: Trophy, title: "Amazing Prizes", desc: "Win rewards and opportunities" },
    ];

    return (
        <section ref={sectionRef} className="py-32 relative overflow-hidden bg-black border-t border-zinc-800">
            <div className="container mx-auto px-6 relative z-10">
                <div className={`text-center mb-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 mb-6">
                        <span className="text-xs font-semibold text-teal-400 uppercase tracking-wider">Join Us</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white font-[family-name:var(--font-poppins)]">
                        Register Now
                    </h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        Secure your spot at Ship or be Shipped. Limited seats available!
                    </p>
                </div>

                <div className={`max-w-4xl mx-auto space-y-8 ${isVisible ? 'animate-fade-in-up delay-200' : 'opacity-0'}`}>
                    {/* Luma Event Iframe */}
                    <div className="rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900/50 p-4 hover:border-teal-500/30 transition-all duration-300">
                        <iframe
                            src="https://luma.com/embed/event/evt-JPXQ14f2GRuukG7/simple"
                            width="100%"
                            height="450"
                            frameBorder="0"
                            style={{ border: 'none', borderRadius: '12px' }}
                            allow="fullscreen; payment"
                            aria-hidden="false"
                            tabIndex={0}
                            className="w-full"
                        />
                    </div>

                    {/* Registration Link */}
                    <div className={`text-center ${isVisible ? 'animate-fade-in-up delay-400' : 'opacity-0'}`}>
                        <a
                            href="https://luma.com/event/evt-JPXQ14f2GRuukG7"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-teal-500 hover:bg-teal-600 text-black font-semibold rounded-full transition-all duration-300 hover:scale-105"
                        >
                            <ExternalLink className="w-5 h-5" />
                            View Event Page
                        </a>
                    </div>

                    {/* Event Highlights */}
                    <div className={`grid md:grid-cols-3 gap-6 mt-16 ${isVisible ? 'animate-fade-in-up delay-600' : 'opacity-0'}`}>
                        {highlights.map((item, index) => {
                            const IconComponent = item.icon;
                            return (
                                <div key={item.title} className="text-center p-6 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:border-teal-500/30 transition-all duration-300 group">
                                    <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-teal-500/10 flex items-center justify-center group-hover:bg-teal-500/20 transition-colors">
                                        <IconComponent className="w-6 h-6 text-teal-400" />
                                    </div>
                                    <h3 className="font-semibold text-white mb-2 font-[family-name:var(--font-poppins)]">{item.title}</h3>
                                    <p className="text-sm text-gray-500">{item.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};
