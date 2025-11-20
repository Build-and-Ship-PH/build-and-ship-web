'use client';

import Link from 'next/link';

import { Button } from './ui/Button';

export const Header = () => {
    const scrollToRegister = () => {
        document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-teal-300/20 bg-black/70 backdrop-blur-md animate-fade-in-down">
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="relative w-10 h-10 transition-transform duration-300 group-hover:scale-110">
                        <img
                            src="/assets/logo.png"
                            alt="Ship or be Shipped Logo"
                            width={40}
                            height={40}
                            className="object-contain"
                        />
                    </div>
                    <span className="font-bold text-xl tracking-tight text-white">
                        Ship<span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">/</span>Shipped
                    </span>
                </Link>

                <nav className="hidden md:flex items-center gap-8">
                    <Link href="#about" className="text-sm text-gray-400 hover:text-teal-300 transition-all duration-300 relative group">
                        About
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
                    </Link>
                    <Link href="#details" className="text-sm text-gray-400 hover:text-teal-300 transition-all duration-300 relative group">
                        Details
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
                    </Link>
                    <Link href="#sponsors" className="text-sm text-gray-400 hover:text-teal-300 transition-all duration-300 relative group">
                        Sponsors
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
                    </Link>
                </nav>

                <div className="flex items-center gap-4">
                    <Button variant="primary" size="sm" onClick={scrollToRegister}>
                        Register Now
                    </Button>
                </div>
            </div>
        </header>
    );
};
