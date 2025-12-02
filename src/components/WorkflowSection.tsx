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
            codeJsx: (
                <>
                    <span className="text-pink-400">import</span>
                    <span className="text-white">{" { "}</span>
                    <span className="text-cyan-300">idea</span>
                    <span className="text-white">{" } "}</span>
                    <span className="text-pink-400">from</span>
                    <span className="text-orange-300">{" './brain'"}</span>
                </>
            )
        },
        {
            number: "02",
            title: "Build & Collaborate",
            description: "Work with talented developers, designers, and domain experts to build your solution.",
            icon: Users,
            codeJsx: (
                <>
                    <span className="text-pink-400">const</span>
                    <span className="text-white">{" team "}</span>
                    <span className="text-pink-400">=</span>
                    <span className="text-pink-400">{" await "}</span>
                    <span className="text-yellow-300">collaborate</span>
                    <span className="text-white">()</span>
                </>
            )
        },
        {
            number: "03",
            title: "Ship Your Product",
            description: "Launch your MVP and present to judges, investors, and potential users.",
            icon: Rocket,
            codeJsx: (
                <>
                    <span className="text-pink-400">await</span>
                    <span className="text-yellow-300">{" deploy"}</span>
                    <span className="text-white">(</span>
                    <span className="text-cyan-300">product</span>
                    <span className="text-white">)</span>
                </>
            )
        }
    ];

    return (
        <section id="workflow" ref={sectionRef} className="py-32 relative overflow-hidden bg-black">
            <div className="container mx-auto px-6">
                <div className={`max-w-4xl mb-20 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                    {/* Code comment style header */}
                    <div className="font-mono text-sm text-zinc-500 mb-4">
                        <span className="text-zinc-600">{'// '}</span>
                        <span className="text-teal-400">workflow</span>
                        <span className="text-zinc-600">.ts</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight font-[family-name:var(--font-poppins)]">
                        Your Journey to Shipping
                    </h2>
                    <p className="text-lg text-gray-400 leading-relaxed">
                        A streamlined process designed to help you go from idea to shipped product in 24 hours.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {steps.map((step, index) => {
                        const IconComponent = step.icon;
                        return (
                            <div
                                key={step.number}
                                className={`group ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                                style={{ animationDelay: `${0.2 + index * 0.15}s` }}
                            >
                                {/* VS Code style card */}
                                <div className="bg-zinc-900/80 border border-zinc-800 rounded-lg overflow-hidden hover:border-teal-500/50 transition-all duration-300">
                                    {/* Tab bar */}
                                    <div className="flex items-center gap-2 px-4 py-2 bg-zinc-950 border-b border-zinc-800">
                                        <div className="flex gap-1.5">
                                            <div className="w-3 h-3 rounded-full bg-zinc-700" />
                                            <div className="w-3 h-3 rounded-full bg-zinc-700" />
                                            <div className="w-3 h-3 rounded-full bg-zinc-700" />
                                        </div>
                                        <span className="text-xs font-mono text-zinc-500 ml-2">step_{step.number}.ts</span>
                                    </div>
                                    
                                    <div className="p-6">
                                        {/* Line number + code */}
                                        <div className="font-mono text-sm mb-6 flex">
                                            <span className="text-zinc-600 select-none mr-4">{index + 1}</span>
                                            <code>{step.codeJsx}</code>
                                        </div>
                                        
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center group-hover:bg-teal-500/20 transition-colors">
                                                <IconComponent className="w-5 h-5 text-teal-400" />
                                            </div>
                                            <h3 className="text-lg font-semibold text-white group-hover:text-teal-400 transition-colors font-[family-name:var(--font-poppins)]">
                                                {step.title}
                                            </h3>
                                        </div>
                                        <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
