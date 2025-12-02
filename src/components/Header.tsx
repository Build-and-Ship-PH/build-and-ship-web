'use client';

import Link from 'next/link';

import { Button } from './ui/Button';

export const Header = () => {
    const scrollToRegister = () => {
        document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800 bg-black/80 backdrop-blur-md">
            <div className="container mx-auto px-6 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center group">
                    <img
                        src="/assets/logo-white.png"
                        alt="Ship or be Shipped Logo"
                        className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                </Link>

                <nav className="hidden md:flex items-center gap-8">
                    <Link href="#about" className="text-sm text-gray-400 hover:text-white transition-colors duration-300">
                        About
                    </Link>
                    <Link href="#details" className="text-sm text-gray-400 hover:text-white transition-colors duration-300">
                        Details
                    </Link>
                    <Link href="#sponsors" className="text-sm text-gray-400 hover:text-white transition-colors duration-300">
                        Sponsors
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
