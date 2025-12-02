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
                    <div className="font-mono text-sm text-zinc-500 mb-4">
                        <span className="text-yellow-400">const</span>
                        <span className="text-white"> eventDetails</span>
                        <span className="text-zinc-500"> = </span>
                        <span className="text-teal-400">{'{'}</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white font-[family-name:var(--font-poppins)]">
                        Mark Your Calendar
                    </h2>
                    <p className="text-lg text-gray-400">Everything you need to know about the hackathon.</p>
                </div>

                {/* Config file style layout */}
                <div className="max-w-4xl mx-auto">
                    <div className="bg-zinc-900/80 border border-zinc-800 rounded-lg overflow-hidden">
                        {/* Editor tab */}
                        <div className="flex items-center gap-2 px-4 py-2 bg-zinc-950 border-b border-zinc-800">
                            <div className="w-3 h-3 rounded-full bg-red-500/80" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                            <div className="w-3 h-3 rounded-full bg-green-500/80" />
                            <span className="text-xs font-mono text-zinc-500 ml-2">config.json</span>
                        </div>
                        
                        <div className="p-6 font-mono text-sm">
                            {/* JSON-like config display */}
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <span className="text-zinc-600 select-none w-6 text-right">1</span>
                                    <span className="text-zinc-500">{'{'}</span>
                                </div>
                                
                                {/* Date */}
                                <div className={`flex items-start gap-4 ${isVisible ? 'animate-fade-in-up delay-200' : 'opacity-0'}`}>
                                    <span className="text-zinc-600 select-none w-6 text-right">2</span>
                                    <div className="flex items-center gap-4 flex-1">
                                        <div className="flex items-center gap-3">
                                            <Calendar className="w-5 h-5 text-teal-400" />
                                            <span className="text-teal-400">"date"</span>
                                            <span className="text-zinc-500">:</span>
                                        </div>
                                        <div>
                                            <span className="text-orange-400">"December 5-6, 2025"</span>
                                            <span className="text-zinc-500">,</span>
                                            <span className="text-zinc-600 ml-4">// 24-hour sprint</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Time */}
                                <div className={`flex items-start gap-4 ${isVisible ? 'animate-fade-in-up delay-400' : 'opacity-0'}`}>
                                    <span className="text-zinc-600 select-none w-6 text-right">3</span>
                                    <div className="flex items-center gap-4 flex-1">
                                        <div className="flex items-center gap-3">
                                            <Clock className="w-5 h-5 text-teal-400" />
                                            <span className="text-teal-400">"time"</span>
                                            <span className="text-zinc-500">:</span>
                                        </div>
                                        <div>
                                            <span className="text-orange-400">"7:00 PM - 7:00 PM"</span>
                                            <span className="text-zinc-500">,</span>
                                            <span className="text-zinc-600 ml-4">// overnight building</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Location */}
                                <div className={`flex items-start gap-4 ${isVisible ? 'animate-fade-in-up delay-600' : 'opacity-0'}`}>
                                    <span className="text-zinc-600 select-none w-6 text-right">4</span>
                                    <div className="flex items-center gap-4 flex-1">
                                        <div className="flex items-center gap-3">
                                            <MapPin className="w-5 h-5 text-teal-400" />
                                            <span className="text-teal-400">"location"</span>
                                            <span className="text-zinc-500">:</span>
                                        </div>
                                        <div>
                                            <span className="text-orange-400">"Kaya Founders Office"</span>
                                            <span className="text-zinc-500">,</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Address */}
                                <div className={`flex items-start gap-4 ${isVisible ? 'animate-fade-in-up delay-600' : 'opacity-0'}`}>
                                    <span className="text-zinc-600 select-none w-6 text-right">5</span>
                                    <div className="flex items-center gap-4 flex-1 pl-8">
                                        <div className="flex items-center gap-3">
                                            <span className="text-teal-400">"address"</span>
                                            <span className="text-zinc-500">:</span>
                                        </div>
                                        <span className="text-green-400">"Level 8, Liberty Plaza, H.V. Dela Costa St"</span>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <span className="text-zinc-600 select-none w-6 text-right">6</span>
                                    <span className="text-zinc-500">{'}'}</span>
                                </div>
                            </div>
                        </div>

                        {/* Footer with link */}
                        <div className="px-6 py-4 bg-zinc-950 border-t border-zinc-800">
                            <a
                                href="https://maps.app.goo.gl/VpHFFpdqx3kpkXi87"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-sm text-teal-400 hover:text-teal-300 transition-colors font-mono"
                            >
                                <ExternalLink className="w-4 h-4" />
                                <span>Open in Google Maps →</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className={`text-center mt-8 font-mono text-sm text-zinc-500 ${isVisible ? 'animate-fade-in-up delay-700' : 'opacity-0'}`}>
                    <span className="text-teal-400">{'}'}</span>
                    <span className="text-zinc-600">;</span>
                </div>
            </div>
        </section>
    );
};
