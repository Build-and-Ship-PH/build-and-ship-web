'use client';

import { useEffect, useRef, useState } from 'react';
import { Calendar, Clock, MapPin, ExternalLink } from 'lucide-react';

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
        <section id="details" ref={sectionRef} className="py-32 bg-black relative border-t border-zinc-800">
            <div className="container mx-auto px-6">
                <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 mb-6">
                        <span className="text-xs font-semibold text-teal-400 uppercase tracking-wider">Event Details</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white font-[family-name:var(--font-poppins)]">Mark Your Calendar</h2>
                    <p className="text-lg text-gray-400">Everything you need to know about the hackathon.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {/* Date Card */}
                    <div className={`p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-teal-500/50 transition-all duration-300 text-center group ${isVisible ? 'animate-fade-in-up delay-200' : 'opacity-0'}`}>
                        <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-teal-500/10 flex items-center justify-center group-hover:bg-teal-500/20 transition-colors">
                            <Calendar className="w-8 h-8 text-teal-400" />
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2 font-[family-name:var(--font-poppins)]">Date</h3>
                        <p className="text-gray-300">Dec 5 - Dec 6, 2025</p>
                        <p className="text-sm text-gray-500 mt-2">24-Hour Sprint</p>
                    </div>

                    {/* Time Card */}
                    <div className={`p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-teal-500/50 transition-all duration-300 text-center group ${isVisible ? 'animate-fade-in-up delay-400' : 'opacity-0'}`}>
                        <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-teal-500/10 flex items-center justify-center group-hover:bg-teal-500/20 transition-colors">
                            <Clock className="w-8 h-8 text-teal-400" />
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2 font-[family-name:var(--font-poppins)]">Time</h3>
                        <p className="text-gray-300">7:00 PM - 7:00 PM</p>
                        <p className="text-sm text-gray-500 mt-2">Overnight Building</p>
                    </div>

                    {/* Location Card */}
                    <a
                        href="https://maps.app.goo.gl/VpHFFpdqx3kpkXi87"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`block p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-teal-500/50 transition-all duration-300 text-center group cursor-pointer ${isVisible ? 'animate-fade-in-up delay-600' : 'opacity-0'}`}
                    >
                        <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-teal-500/10 flex items-center justify-center group-hover:bg-teal-500/20 transition-colors">
                            <MapPin className="w-8 h-8 text-teal-400" />
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2 font-[family-name:var(--font-poppins)]">Location</h3>
                        <p className="text-gray-300">Kaya Founders Office</p>
                        <p className="text-sm text-gray-500 mt-2">Level 8, Liberty Plaza, H.V. Dela Costa St</p>
                        <p className="text-sm text-teal-400 mt-3 flex items-center justify-center gap-1 group-hover:text-teal-300 transition-colors duration-300">
                            <ExternalLink className="w-4 h-4" />
                            View on Maps
                        </p>
                    </a>
                </div>
            </div>
        </section>
    );
};
