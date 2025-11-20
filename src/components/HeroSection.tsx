
import { Button } from './ui/Button';

export const HeroSection = () => {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden pt-32 pb-20">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-600/10 via-black to-black" />
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-orange-500/20 to-transparent blur-[150px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl">
                    {/* Tag */}
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 mb-8">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                        <span className="text-xs font-medium text-orange-500 uppercase tracking-wider">Hackathon 2025</span>
                    </div>

                    {/* Main Headline */}
                    <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8 leading-[1.1]">
                        <span className="block text-white">Ship or be</span>
                        <span className="block text-white">Shipped.</span>
                    </h1>

                    {/* Description */}
                    <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mb-6 leading-relaxed">
                        Transform your ideas into reality. Join the ultimate hackathon where builders,
                        designers, and innovators come together to create solutions that matter.
                    </p>

                    <p className="text-lg text-gray-500 max-w-2xl mb-12 leading-relaxed">
                        Ship or be Shipped adapts to your unique vision, automating the tedious so you can
                        focus on building impactful solutions in <span className="text-white font-medium">Healthcare</span> and{' '}
                        <span className="text-white font-medium">Logistics</span>. Partner with leading startups
                        and find the talent to bring your ideas to life.
                    </p>

                    {/* CTA */}
                    <div className="flex flex-col sm:flex-row items-start gap-4">
                        <Button size="lg" className="text-base px-8">
                            Start Building →
                        </Button>
                        <p className="text-sm text-gray-500 flex items-center gap-2 mt-3 sm:mt-0">
                            <span className="text-gray-600">✓</span> No credit card required
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
