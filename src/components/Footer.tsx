import Link from 'next/link';

export const Footer = () => {
    return (
        <footer className="border-t border-teal-300/10 bg-black py-12 relative overflow-hidden">
            {/* Subtle gradient background */}
            <div className="absolute inset-0 bg-gradient-to-t from-teal-950/10 to-transparent opacity-50"></div>

            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
                <div className="text-teal-200/60 text-sm">
                    © 2025 Ship or be Shipped. All rights reserved.
                </div>


            </div>
        </footer>
    );
};
