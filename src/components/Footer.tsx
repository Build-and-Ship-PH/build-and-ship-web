import Link from 'next/link';

export const Footer = () => {
    return (
        <footer className="border-t border-zinc-800 bg-black py-12">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-4">
                        <img
                            src="/assets/logo-white.png"
                            alt="Ship or be Shipped"
                            className="h-8 w-auto opacity-80"
                        />
                    </div>
                    
                    <div className="flex items-center gap-6">
                        <Link href="#about" className="text-sm text-gray-500 hover:text-white transition-colors">
                            About
                        </Link>
                        <Link href="#details" className="text-sm text-gray-500 hover:text-white transition-colors">
                            Details
                        </Link>
                        <Link href="#sponsors" className="text-sm text-gray-500 hover:text-white transition-colors">
                            Sponsors
                        </Link>
                    </div>

                    <div className="text-gray-500 text-sm">
                        © 2025 Ship or be Shipped
                    </div>
                </div>
            </div>
        </footer>
    );
};
