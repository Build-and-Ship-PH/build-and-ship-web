import { Button } from './ui/Button';

export const CTASection = () => {
    return (
        <section id="register" className="py-32 relative overflow-hidden border-t border-white/10">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-orange-500/10" />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white">
                    Ready to Ship?
                </h2>
                <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                    Join the community of builders, creators, and innovators.
                    Limited spots available—register now to secure your place.
                </p>

                <Button size="lg" className="text-lg px-12 py-6 shadow-2xl shadow-orange-500/30">
                    Register for Hackathon →
                </Button>
            </div>
        </section>
    );
};
