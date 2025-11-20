'use client';

import { useEffect, useRef, useState } from 'react';

export const DetailsSection = () => {
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
        <section id="details" ref={sectionRef} className="py-32 bg-white/[0.02] relative border-t border-teal-300/10">
            <div className="container mx-auto px-6">
                <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-500/10 border border-teal-300/30 mb-6 animate-pulse-glow">
                        <span className="text-xs font-medium text-teal-300 uppercase tracking-wider">Event Details</span>
                    </div>
                    <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-teal-300 via-cyan-400 to-sky-300 bg-clip-text text-transparent">Mark Your Calendar</h2>
                    <p className="text-xl text-teal-100/80">Everything you need to know about the hackathon.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {/* Date Card */}
                    <div className={`p-8 rounded-2xl bg-teal-500/5 border border-teal-300/20 hover:bg-teal-500/10 hover:border-teal-300/40 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-teal-500/20 text-center group ${isVisible ? 'animate-fade-in-up delay-200' : 'opacity-0'}`}>
                        <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-teal-500/10 flex items-center justify-center group-hover:scale-110 transition-transform animate-pulse-glow">
                            <svg className="w-8 h-8 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-teal-300 transition-colors duration-300">Date</h3>
                        <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Dec 5 - Dec 6, 2025</p>
                        <p className="text-sm text-teal-200/60 mt-2">24-Hour Sprint</p>
                    </div>

                    {/* Time Card */}
                    <div className={`p-8 rounded-2xl bg-teal-500/5 border border-teal-300/20 hover:bg-teal-500/10 hover:border-teal-300/40 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20 text-center group ${isVisible ? 'animate-fade-in-up delay-400' : 'opacity-0'}`}>
                        <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-cyan-500/10 flex items-center justify-center group-hover:scale-110 transition-transform animate-pulse-glow" style={{ animationDelay: '0.3s' }}>
                            <svg className="w-8 h-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">Time</h3>
                        <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">7:00 PM - 7:00 PM</p>
                        <p className="text-sm text-teal-200/60 mt-2">Overnight Building</p>
                    </div>

                    {/* Location Card */}
                    <a
                        href="https://maps.app.goo.gl/VpHFFpdqx3kpkXi87"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`block p-8 rounded-2xl bg-teal-500/5 border border-teal-300/20 hover:bg-teal-500/10 hover:border-teal-300/40 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-sky-500/20 text-center group cursor-pointer ${isVisible ? 'animate-fade-in-up delay-600' : 'opacity-0'}`}
                    >
                        <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-sky-500/10 flex items-center justify-center group-hover:scale-110 transition-transform animate-pulse-glow" style={{ animationDelay: '0.6s' }}>
                            <svg className="w-8 h-8 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-sky-300 transition-colors duration-300">Location</h3>
                        <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Kaya Founders Office</p>
                        <p className="text-sm text-teal-200/60 mt-2">Level 8, Liberty Plaza, H.V. Dela Costa St</p>
                        <p className="text-xs text-sky-400/80 mt-3 flex items-center justify-center gap-1 group-hover:text-sky-300 transition-colors duration-300">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                            View on Maps
                        </p>
                    </a>
                </div>
            </div>
        </section>
    );
};
