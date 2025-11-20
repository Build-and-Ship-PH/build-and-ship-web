'use client';

import { useEffect, useRef, useState } from 'react';

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
            icon: "📥"
        },
        {
            number: "02",
            title: "Build & Collaborate",
            description: "Work with talented developers, designers, and domain experts to build your solution.",
            icon: "🛠️"
        },
        {
            number: "03",
            title: "Ship Your Product",
            description: "Launch your MVP and present to judges, investors, and potential users.",
            icon: "🚀"
        }
    ];

    return (
        <section ref={sectionRef} className="py-32 relative overflow-hidden bg-black">
            <div className="container mx-auto px-6">
                <div className={`max-w-4xl mb-20 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-500/10 border border-teal-300/30 mb-6 animate-pulse-glow">
                        <span className="text-xs font-medium text-teal-300 uppercase tracking-wider">How it Works</span>
                    </div>
                    <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-teal-300 via-cyan-400 to-sky-300 bg-clip-text text-transparent mb-6 leading-tight">
                        Your Journey to Shipping
                    </h2>
                    <p className="text-xl text-teal-100/80 leading-relaxed">
                        A streamlined process designed to help you go from idea to shipped product in 24 hours.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <div
                            key={step.number}
                            className={`group ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                            style={{ animationDelay: `${0.2 + index * 0.2}s` }}
                        >
                            <div className="bg-teal-500/5 border border-teal-300/20 rounded-2xl p-8 hover:bg-teal-500/10 hover:border-teal-300/40 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-teal-500/20">
                                <div className="flex items-start justify-between mb-6">
                                    <span className="text-5xl group-hover:scale-110 transition-transform duration-300 inline-block">{step.icon}</span>
                                    <span className="text-sm font-mono text-teal-400/60 bg-teal-500/10 px-3 py-1 rounded-full animate-pulse-scale">{step.number}</span>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-teal-300 transition-colors duration-300">{step.title}</h3>
                                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
