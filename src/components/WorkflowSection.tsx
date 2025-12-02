'use client';

import { useEffect, useRef, useState } from 'react';
import { Lightbulb, Users, Rocket } from 'lucide-react';

export const WorkflowSection = () => {
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

    const steps = [
        {
            number: "01",
            title: "Import Your Idea",
            description: "Bring your concept to the hackathon. Share your vision with mentors and teammates.",
            icon: Lightbulb,
            accent: "teal"
        },
        {
            number: "02",
            title: "Build & Collaborate",
            description: "Work with talented developers, designers, and domain experts to build your solution.",
            icon: Users,
            accent: "orange"
        },
        {
            number: "03",
            title: "Ship Your Product",
            description: "Launch your MVP and present to judges, investors, and potential users.",
            icon: Rocket,
            accent: "teal"
        }
    ];

    const getAccentClasses = (accent: string) => ({
        iconBg: accent === "orange" ? "bg-orange-500/10 group-hover:bg-orange-500/20" : "bg-teal-500/10 group-hover:bg-teal-500/20",
        iconColor: accent === "orange" ? "text-orange-400" : "text-teal-400",
        titleHover: accent === "orange" ? "group-hover:text-orange-400" : "group-hover:text-teal-400",
        border: accent === "orange" ? "hover:border-orange-500/50" : "hover:border-teal-500/50",
    });

    return (
        <section ref={sectionRef} className="py-32 relative overflow-hidden bg-black">
            <div className="container mx-auto px-6">
                <div className={`max-w-4xl mb-20 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 mb-6">
                        <span className="text-xs font-semibold text-teal-400 uppercase tracking-wider">How it Works</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight font-[family-name:var(--font-poppins)]">
                        Your Journey to <span className="text-orange-400">Shipping</span>
                    </h2>
                    <p className="text-lg text-gray-400 leading-relaxed">
                        A streamlined process designed to help you go from idea to shipped product in 24 hours.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {steps.map((step, index) => {
                        const IconComponent = step.icon;
                        const classes = getAccentClasses(step.accent);
                        return (
                            <div
                                key={step.number}
                                className={`group ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                                style={{ animationDelay: `${0.2 + index * 0.15}s` }}
                            >
                                <div className={`bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 ${classes.border} transition-all duration-300 hover:bg-zinc-900`}>
                                    <div className="flex items-start justify-between mb-6">
                                        <div className={`w-14 h-14 rounded-xl ${classes.iconBg} flex items-center justify-center transition-colors`}>
                                            <IconComponent className={`w-7 h-7 ${classes.iconColor}`} />
                                        </div>
                                        <span className="text-sm font-mono text-zinc-600">{step.number}</span>
                                    </div>
                                    <h3 className={`text-xl font-semibold text-white mb-3 ${classes.titleHover} transition-colors duration-300 font-[family-name:var(--font-poppins)]`}>{step.title}</h3>
                                    <p className="text-gray-500 leading-relaxed text-sm">{step.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
