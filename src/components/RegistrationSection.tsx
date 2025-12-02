'use client';

import { useEffect, useRef, useState } from 'react';
import { Target, Users, Trophy, ExternalLink, Terminal } from 'lucide-react';

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
        { icon: Target, title: "24-Hour Sprint", desc: "Build your MVP in one intense day", cmd: "npm run build" },
        { icon: Users, title: "Expert Mentors", desc: "Get guidance from industry leaders", cmd: "git pull mentors" },
        { icon: Trophy, title: "Amazing Prizes", desc: "Win rewards and opportunities", cmd: "yarn deploy --prod" },
    ];

    return (
        <section ref={sectionRef} className="py-32 relative overflow-hidden bg-black border-t border-zinc-800">
            <div className="container mx-auto px-6 relative z-10">
                <div className={`text-center mb-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                    {/* Terminal prompt style */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg font-mono text-sm mb-6">
                        <Terminal className="w-4 h-4 text-teal-400" />
                        <span className="text-green-400">$</span>
                        <span className="text-white">./register.sh</span>
                        <span className="text-zinc-500">--now</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white font-[family-name:var(--font-poppins)]">
                        Register Now
                    </h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        Secure your spot at Ship or be Shipped. Limited seats available!
                    </p>
                </div>

                <div className={`max-w-4xl mx-auto space-y-8 ${isVisible ? 'animate-fade-in-up delay-200' : 'opacity-0'}`}>
                    {/* Luma Event Iframe in terminal window */}
                    <div className="bg-zinc-900/80 border border-zinc-800 rounded-lg overflow-hidden">
                        <div className="flex items-center gap-2 px-4 py-2 bg-zinc-950 border-b border-zinc-800">
                            <div className="w-3 h-3 rounded-full bg-red-500/80" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                            <div className="w-3 h-3 rounded-full bg-green-500/80" />
                            <span className="text-xs font-mono text-zinc-500 ml-2">luma-embed — bash</span>
                        </div>
                        <div className="p-4">
                            <iframe
                                src="https://luma.com/embed/event/evt-JPXQ14f2GRuukG7/simple"
                                width="100%"
                                height="450"
                                frameBorder="0"
                                style={{ border: 'none', borderRadius: '8px' }}
                                allow="fullscreen; payment"
                                aria-hidden="false"
                                tabIndex={0}
                                className="w-full"
                            />
                        </div>
                    </div>

                    {/* Registration Link */}
                    <div className={`text-center ${isVisible ? 'animate-fade-in-up delay-400' : 'opacity-0'}`}>
                        <a
                            href="https://luma.com/event/evt-JPXQ14f2GRuukG7"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-teal-500 hover:bg-teal-400 text-black font-semibold rounded-full transition-all duration-300 hover:scale-105"
                        >
                            <ExternalLink className="w-5 h-5" />
                            View Event Page
                        </a>
                    </div>

                    {/* Event Highlights - Command style */}
                    <div className={`grid md:grid-cols-3 gap-4 mt-16 ${isVisible ? 'animate-fade-in-up delay-600' : 'opacity-0'}`}>
                        {highlights.map((item) => {
                            const IconComponent = item.icon;
                            return (
                                <div key={item.title} className="bg-zinc-900/80 border border-zinc-800 rounded-lg p-5 hover:border-teal-500/50 transition-all duration-300 group">
                                    <div className="font-mono text-xs text-zinc-500 mb-3 flex items-center gap-2">
                                        <span className="text-green-400">$</span>
                                        <span className="text-teal-400">{item.cmd}</span>
                                    </div>
                                    <div className="flex items-center gap-3 mb-2">
                                        <IconComponent className="w-5 h-5 text-teal-400" />
                                        <h3 className="font-semibold text-white font-[family-name:var(--font-poppins)]">{item.title}</h3>
                                    </div>
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
