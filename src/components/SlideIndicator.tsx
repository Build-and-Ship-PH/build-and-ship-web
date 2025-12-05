'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SlideIndicatorProps {
    currentIndex: number;
    totalSections: number;
    sections: { id: string; name: string }[];
    goToNext: () => void;
    goToPrevious: () => void;
    goToSection: (index: number) => void;
}

export const SlideIndicator = ({
    currentIndex,
    totalSections,
    sections,
    goToNext,
    goToPrevious,
    goToSection,
}: SlideIndicatorProps) => {
    return (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
            <div className="flex items-center gap-3 px-4 py-2 bg-zinc-900/90 backdrop-blur-md border border-zinc-700 rounded-full shadow-2xl">
                {/* Previous button */}
                <button
                    onClick={goToPrevious}
                    disabled={currentIndex === 0}
                    className="p-1.5 rounded-full hover:bg-zinc-800 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                    aria-label="Previous section"
                >
                    <ChevronLeft className="w-4 h-4 text-zinc-400" />
                </button>

                {/* Dots */}
                <div className="flex items-center gap-1.5">
                    {sections.map((section, index) => (
                        <button
                            key={section.id}
                            onClick={() => goToSection(index)}
                            className={`group relative transition-all duration-300 ${
                                index === currentIndex 
                                    ? 'w-6 h-2 bg-teal-400 rounded-full' 
                                    : 'w-2 h-2 bg-zinc-600 hover:bg-zinc-500 rounded-full'
                            }`}
                            aria-label={`Go to ${section.name}`}
                        >
                            {/* Tooltip */}
                            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs font-mono bg-zinc-800 text-zinc-300 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                                {section.name}
                            </span>
                        </button>
                    ))}
                </div>

                {/* Next button */}
                <button
                    onClick={goToNext}
                    disabled={currentIndex === totalSections - 1}
                    className="p-1.5 rounded-full hover:bg-zinc-800 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                    aria-label="Next section"
                >
                    <ChevronRight className="w-4 h-4 text-zinc-400" />
                </button>

                {/* Keyboard hint */}
                <div className="hidden sm:flex items-center gap-1 ml-2 pl-3 border-l border-zinc-700">
                    <kbd className="px-1.5 py-0.5 text-[10px] font-mono bg-zinc-800 text-zinc-500 rounded">←</kbd>
                    <kbd className="px-1.5 py-0.5 text-[10px] font-mono bg-zinc-800 text-zinc-500 rounded">→</kbd>
                </div>
            </div>

            {/* Section counter */}
            <div className="text-center mt-2">
                <span className="text-xs font-mono text-zinc-600">
                    {currentIndex + 1} / {totalSections}
                </span>
            </div>
        </div>
    );
};

