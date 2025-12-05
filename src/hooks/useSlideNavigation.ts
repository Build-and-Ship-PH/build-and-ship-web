import { useEffect, useState, useCallback } from 'react';

const SECTIONS = [
    { id: 'hero', name: 'Hero' },
    { id: 'workflow', name: 'Workflow' },
    { id: 'about', name: 'About' },
    { id: 'details', name: 'Details' },
    { id: 'bounties', name: 'Bounties' },
    { id: 'sponsors', name: 'Sponsors' },
    { id: 'event-intro', name: 'Event Topic' },
    { id: 'discord', name: 'Discord' },
    { id: 'hacker-rooms', name: 'Hacker Rooms' },
    { id: 'bounties-channel', name: 'Bounties Channel' },
    { id: 'register', name: 'Register' },
];

export const useSlideNavigation = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isNavigating, setIsNavigating] = useState(false);

    const scrollToSection = useCallback((index: number) => {
        const section = SECTIONS[index];
        if (!section) return;

        const element = document.getElementById(section.id);
        if (element) {
            setIsNavigating(true);
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setCurrentIndex(index);
            
            // Reset navigating state after scroll completes
            setTimeout(() => setIsNavigating(false), 800);
        }
    }, []);

    const goToNext = useCallback(() => {
        if (isNavigating) return;
        const nextIndex = Math.min(currentIndex + 1, SECTIONS.length - 1);
        scrollToSection(nextIndex);
    }, [currentIndex, isNavigating, scrollToSection]);

    const goToPrevious = useCallback(() => {
        if (isNavigating) return;
        const prevIndex = Math.max(currentIndex - 1, 0);
        scrollToSection(prevIndex);
    }, [currentIndex, isNavigating, scrollToSection]);

    const goToSection = useCallback((index: number) => {
        if (isNavigating) return;
        scrollToSection(index);
    }, [isNavigating, scrollToSection]);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            // Don't navigate if user is typing in an input
            if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
                return;
            }

            switch (e.key) {
                case 'ArrowRight':
                case 'ArrowDown':
                case ' ': // Spacebar
                    e.preventDefault();
                    goToNext();
                    break;
                case 'ArrowLeft':
                case 'ArrowUp':
                    e.preventDefault();
                    goToPrevious();
                    break;
                case 'Home':
                    e.preventDefault();
                    scrollToSection(0);
                    break;
                case 'End':
                    e.preventDefault();
                    scrollToSection(SECTIONS.length - 1);
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [goToNext, goToPrevious, scrollToSection]);

    // Update current index based on scroll position
    useEffect(() => {
        const handleScroll = () => {
            if (isNavigating) return;

            const scrollPosition = window.scrollY + window.innerHeight / 3;

            for (let i = SECTIONS.length - 1; i >= 0; i--) {
                const element = document.getElementById(SECTIONS[i].id);
                if (element && element.offsetTop <= scrollPosition) {
                    setCurrentIndex(i);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isNavigating]);

    return {
        currentIndex,
        currentSection: SECTIONS[currentIndex],
        sections: SECTIONS,
        totalSections: SECTIONS.length,
        goToNext,
        goToPrevious,
        goToSection,
        isNavigating,
    };
};

