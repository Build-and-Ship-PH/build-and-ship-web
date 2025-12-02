'use client';

import Link from 'next/link';
import { Search, GitBranch, Circle } from 'lucide-react';

export const Header = () => {
    const scrollToRegister = () => {
        document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-900 border-b border-zinc-800">
            {/* VS Code Style Title Bar */}
            <div className="flex items-center h-8 px-3 bg-zinc-900 border-b border-zinc-800">
                {/* Traffic lights */}
                <div className="flex items-center gap-1.5 mr-4">
                    <div className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors cursor-pointer"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-500 transition-colors cursor-pointer"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80 hover:bg-green-500 transition-colors cursor-pointer"></div>
                </div>

                {/* VS Code Menu Items */}
                <nav className="hidden md:flex items-center gap-1 text-xs text-zinc-400">
                    <span className="px-2 py-1 hover:bg-zinc-800 rounded cursor-pointer transition-colors">File</span>
                    <span className="px-2 py-1 hover:bg-zinc-800 rounded cursor-pointer transition-colors">Edit</span>
                    <span className="px-2 py-1 hover:bg-zinc-800 rounded cursor-pointer transition-colors">View</span>
                    <span className="px-2 py-1 hover:bg-zinc-800 rounded cursor-pointer transition-colors">Go</span>
                    <span className="px-2 py-1 hover:bg-zinc-800 rounded cursor-pointer transition-colors">Run</span>
                    <span className="px-2 py-1 hover:bg-zinc-800 rounded cursor-pointer transition-colors">Terminal</span>
                    <span className="px-2 py-1 hover:bg-zinc-800 rounded cursor-pointer transition-colors">Help</span>
                </nav>

                {/* Center - Window Title */}
                <div className="flex-1 text-center">
                    <span className="text-xs text-zinc-500 font-mono">ship-or-be-shipped — ~/hackathon/2025</span>
                </div>

                {/* Right side icons */}
                <div className="flex items-center gap-2">
                    <Search className="w-3.5 h-3.5 text-zinc-500 hover:text-zinc-300 cursor-pointer transition-colors" />
                </div>
            </div>

            {/* Tab Bar */}
            <div className="flex items-center h-9 bg-zinc-950 border-b border-zinc-800 overflow-x-auto">
                {/* Logo as file icon */}
                <Link href="/" className="flex items-center gap-2 px-3 h-full bg-zinc-900 border-r border-zinc-800 hover:bg-zinc-800 transition-colors group">
                    <img
                        src="/assets/logo-white.png"
                        alt="Ship or be Shipped Logo"
                        className="h-5 w-auto object-contain"
                    />
                    <span className="text-xs text-zinc-300 font-mono hidden sm:inline">index.tsx</span>
                    <span className="text-zinc-600 hover:text-zinc-400 ml-1 text-xs hidden sm:inline">×</span>
                </Link>

                {/* Nav items as tabs */}
                <Link 
                    href="#workflow" 
                    className="hidden lg:flex items-center gap-2 px-3 h-full border-r border-zinc-800 hover:bg-zinc-800 transition-colors text-zinc-400 hover:text-zinc-200"
                >
                    <Circle className="w-2 h-2 fill-blue-400 text-blue-400" />
                    <span className="text-xs font-mono">workflow.tsx</span>
                </Link>
                <Link 
                    href="#about" 
                    className="flex items-center gap-2 px-3 h-full border-r border-zinc-800 hover:bg-zinc-800 transition-colors text-zinc-400 hover:text-zinc-200"
                >
                    <Circle className="w-2 h-2 fill-teal-400 text-teal-400" />
                    <span className="text-xs font-mono">about.tsx</span>
                </Link>
                <Link 
                    href="#details" 
                    className="flex items-center gap-2 px-3 h-full border-r border-zinc-800 hover:bg-zinc-800 transition-colors text-zinc-400 hover:text-zinc-200"
                >
                    <Circle className="w-2 h-2 fill-orange-400 text-orange-400" />
                    <span className="text-xs font-mono">details.tsx</span>
                </Link>
                <Link 
                    href="#bounties" 
                    className="hidden md:flex items-center gap-2 px-3 h-full border-r border-zinc-800 hover:bg-zinc-800 transition-colors text-zinc-400 hover:text-zinc-200"
                >
                    <Circle className="w-2 h-2 fill-amber-400 text-amber-400" />
                    <span className="text-xs font-mono">bounties.tsx</span>
                </Link>
                <Link 
                    href="#sponsors" 
                    className="hidden md:flex items-center gap-2 px-3 h-full border-r border-zinc-800 hover:bg-zinc-800 transition-colors text-zinc-400 hover:text-zinc-200"
                >
                    <Circle className="w-2 h-2 fill-purple-400 text-purple-400" />
                    <span className="text-xs font-mono">sponsors.tsx</span>
                </Link>

                {/* Spacer */}
                <div className="flex-1"></div>

                {/* Git branch indicator */}
                <div className="hidden md:flex items-center gap-2 px-4 text-xs text-zinc-500">
                    <GitBranch className="w-3.5 h-3.5" />
                    <span className="font-mono">main</span>
                </div>

                {/* Register button styled as run button */}
                <button 
                    onClick={scrollToRegister}
                    className="flex items-center gap-2 px-4 h-full bg-teal-600 hover:bg-teal-500 transition-colors text-white text-xs font-mono"
                >
                    <span className="text-teal-200">▶</span>
                    <span>./register.sh</span>
                </button>
            </div>
        </header>
    );
};
