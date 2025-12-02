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

    const details = [
        {
            icon: Calendar,
            title: "Date",
            main: "Dec 5 - Dec 6, 2025",
            sub: "24-Hour Sprint",
            accent: "teal"
        },
        {
            icon: Clock,
            title: "Time",
            main: "7:00 PM - 7:00 PM",
            sub: "Overnight Building",
            accent: "orange"
        },
        {
            icon: MapPin,
            title: "Location",
            main: "Kaya Founders Office",
            sub: "Level 8, Liberty Plaza, H.V. Dela Costa St",
            accent: "teal",
            link: "https://maps.app.goo.gl/VpHFFpdqx3kpkXi87"
        }
    ];

    const getAccentClasses = (accent: string) => ({
        iconBg: accent === "orange" ? "bg-orange-500/10 group-hover:bg-orange-500/20" : "bg-teal-500/10 group-hover:bg-teal-500/20",
        iconColor: accent === "orange" ? "text-orange-400" : "text-teal-400",
        border: accent === "orange" ? "hover:border-orange-500/50" : "hover:border-teal-500/50",
    });

    return (
        <section id="details" ref={sectionRef} className="py-32 bg-black relative border-t border-zinc-800">
            <div className="container mx-auto px-6">
                <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 mb-6">
                        <span className="text-xs font-semibold text-teal-400 uppercase tracking-wider">Event Details</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white font-[family-name:var(--font-poppins)]">
                        Mark Your <span className="text-orange-400">Calendar</span>
                    </h2>
                    <p className="text-lg text-gray-400">Everything you need to know about the hackathon.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {details.map((item, index) => {
                        const IconComponent = item.icon;
                        const classes = getAccentClasses(item.accent);
                        const Card = item.link ? 'a' : 'div';
                        const linkProps = item.link ? { href: item.link, target: "_blank", rel: "noopener noreferrer" } : {};
                        
                        return (
                            <Card
                                key={item.title}
                                {...linkProps}
                                className={`block p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 ${classes.border} transition-all duration-300 text-center group ${item.link ? 'cursor-pointer' : ''} ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                                style={{ animationDelay: `${0.2 + index * 0.2}s` }}
                            >
                                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl ${classes.iconBg} flex items-center justify-center transition-colors`}>
                                    <IconComponent className={`w-8 h-8 ${classes.iconColor}`} />
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-2 font-[family-name:var(--font-poppins)]">{item.title}</h3>
                                <p className="text-gray-300">{item.main}</p>
                                <p className="text-sm text-gray-500 mt-2">{item.sub}</p>
                                {item.link && (
                                    <p className="text-sm text-teal-400 mt-3 flex items-center justify-center gap-1 group-hover:text-teal-300 transition-colors duration-300">
                                        <ExternalLink className="w-4 h-4" />
                                        View on Maps
                                    </p>
                                )}
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
