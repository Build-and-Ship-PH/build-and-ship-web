'use client';

import { useEffect, useRef, useState } from 'react';

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

    return (
        <section ref={sectionRef} className="py-32 relative overflow-hidden bg-gradient-to-b from-black via-teal-950/10 to-black border-t border-teal-300/10">
            {/* Gradient Background Animation */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-teal-500/20 rounded-full blur-3xl animate-pulse-scale"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className={`text-center mb-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-500/10 border border-teal-300/30 mb-6 animate-pulse-glow">
                        <span className="text-xs font-medium text-teal-300 uppercase tracking-wider">Join Us</span>
                    </div>
                    <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-teal-300 via-cyan-400 to-sky-300 bg-clip-text text-transparent">
                        Register Now
                    </h2>
                    <p className="text-xl text-teal-100/80 max-w-2xl mx-auto">
                        Secure your spot at Ship or be Shipped. Limited seats available!
                    </p>
                </div>

                <div className={`max-w-4xl mx-auto space-y-8 ${isVisible ? 'animate-fade-in-up delay-200' : 'opacity-0'}`}>
                    {/* Luma Event Iframe */}
                    <div className="rounded-2xl overflow-hidden border border-teal-300/20 bg-teal-500/5 p-4 hover:border-teal-300/40 transition-all duration-300 hover:shadow-xl hover:shadow-teal-500/20">
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
                            className="inline-flex items-center gap-2 px-8 py-4 bg-teal-500/10 border border-teal-300/30 hover:bg-teal-500/20 hover:border-teal-300/50 text-teal-100 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                            View Event Page
                        </a>
                    </div>

                    {/* Event Highlights */}
                    <div className={`grid md:grid-cols-3 gap-6 mt-16 ${isVisible ? 'animate-fade-in-up delay-600' : 'opacity-0'}`}>
                        <div className="text-center p-6 bg-teal-500/5 border border-teal-300/20 rounded-xl hover:bg-teal-500/10 transition-all duration-300 hover:scale-105">
                            <div className="text-3xl mb-3">🎯</div>
                            <h3 className="font-bold text-white mb-2">24-Hour Sprint</h3>
                            <p className="text-sm text-teal-100/70">Build your MVP in one intense day</p>
                        </div>
                        <div className="text-center p-6 bg-teal-500/5 border border-teal-300/20 rounded-xl hover:bg-teal-500/10 transition-all duration-300 hover:scale-105">
                            <div className="text-3xl mb-3">👥</div>
                            <h3 className="font-bold text-white mb-2">Expert Mentors</h3>
                            <p className="text-sm text-teal-100/70">Get guidance from industry leaders</p>
                        </div>
                        <div className="text-center p-6 bg-teal-500/5 border border-teal-300/20 rounded-xl hover:bg-teal-500/10 transition-all duration-300 hover:scale-105">
                            <div className="text-3xl mb-3">🏆</div>
                            <h3 className="font-bold text-white mb-2">Amazing Prizes</h3>
                            <p className="text-sm text-teal-100/70">Win rewards and opportunities</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
