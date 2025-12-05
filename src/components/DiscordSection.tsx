'use client';

import { useEffect, useRef, useState } from 'react';
import { MessageCircle } from 'lucide-react';

export const DiscordSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [qrHovered, setQrHovered] = useState(false);
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

    const discordLink = "https://discord.gg/QQNkeHkS";

    return (
        <section 
            id="discord" 
            ref={sectionRef} 
            className="py-32 relative overflow-hidden bg-black border-t border-zinc-800"
        >
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-[#5865F2]/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-3xl mx-auto">
                    
                    {/* Header */}
                    <div className={`mb-12 text-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#5865F2]/10 border border-[#5865F2]/30 rounded-full font-mono text-sm mb-6">
                            <MessageCircle className="w-4 h-4 text-[#5865F2]" />
                            <span className="text-[#5865F2]">Join the Hive</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white font-[family-name:var(--font-poppins)]">
                            Discord <span className="text-[#5865F2]">Command Center</span>
                        </h2>
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                            Your hackathon headquarters. Coordinate with your team, get updates, and discover surprises.
                        </p>
                    </div>

                    {/* QR Code Card */}
                    <div className={`${isVisible ? 'animate-fade-in-up delay-200' : 'opacity-0'}`}>
                        <div 
                            className="relative group max-w-md mx-auto"
                            onMouseEnter={() => setQrHovered(true)}
                            onMouseLeave={() => setQrHovered(false)}
                        >
                            {/* Glow effect */}
                            <div className={`absolute -inset-1 bg-gradient-to-r from-[#5865F2] via-teal-500 to-[#5865F2] rounded-2xl blur-lg transition-opacity duration-500 ${qrHovered ? 'opacity-60' : 'opacity-30'} animate-gradient`} />
                            
                            <div className="relative bg-zinc-900/90 border border-zinc-700 rounded-2xl p-8 backdrop-blur-sm">
                                {/* Terminal header */}
                                <div className="flex items-center gap-2 mb-6">
                                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                    <span className="text-xs font-mono text-zinc-500 ml-2">discord_invite.sh</span>
                                </div>

                                {/* QR Code container */}
                                <div className="flex flex-col items-center">
                                    <div className={`relative p-4 bg-white rounded-xl transition-all duration-500 ${qrHovered ? 'scale-105 shadow-2xl shadow-[#5865F2]/30' : 'scale-100'}`}>
                                        {/* QR Code using API */}
                                        <img 
                                            src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(discordLink)}&bgcolor=ffffff&color=000000&format=svg`}
                                            alt="Discord Invite QR Code"
                                            className="w-48 h-48"
                                        />
                                        {/* Discord logo overlay */}
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-12 h-12 bg-[#5865F2] rounded-xl flex items-center justify-center shadow-lg">
                                                <svg viewBox="0 0 24 24" className="w-7 h-7 text-white fill-current">
                                                    <path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.369-.444.85-.608 1.23a18.566 18.566 0 0 0-5.487 0 12.36 12.36 0 0 0-.617-1.23A.077.077 0 0 0 8.562 3c-1.714.29-3.354.8-4.885 1.491a.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055 20.03 20.03 0 0 0 5.993 2.98.078.078 0 0 0 .084-.026 13.83 13.83 0 0 0 1.226-1.963.074.074 0 0 0-.041-.104 13.201 13.201 0 0 1-1.872-.878.075.075 0 0 1-.008-.125c.126-.093.252-.19.372-.287a.075.075 0 0 1 .078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 0 1 .079.009c.12.098.245.195.372.288a.075.075 0 0 1-.006.125c-.598.344-1.22.635-1.873.877a.075.075 0 0 0-.041.105c.36.687.772 1.341 1.225 1.962a.077.077 0 0 0 .084.028 19.963 19.963 0 0 0 6.002-2.981.076.076 0 0 0 .032-.054c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 0 0-.031-.028zM8.02 15.278c-1.182 0-2.157-1.069-2.157-2.38 0-1.312.956-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.956 2.38-2.157 2.38zm7.975 0c-1.183 0-2.157-1.069-2.157-2.38 0-1.312.955-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.946 2.38-2.157 2.38z"/>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Scan instruction */}
                                    <div className="mt-6 font-mono text-sm text-center">
                                        <div className="flex items-center justify-center gap-2 text-zinc-400 mb-3">
                                            <span className="text-green-400">$</span>
                                            <span className="text-white">scan --device=phone</span>
                                        </div>
                                        <p className="text-zinc-500 text-xs">Point your camera at the QR code to join</p>
                                    </div>

                                    {/* Direct link button */}
                                    <a 
                                        href={discordLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-[#5865F2] hover:bg-[#4752C4] text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#5865F2]/30"
                                    >
                                        <MessageCircle className="w-5 h-5" />
                                        Join Discord Server
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
