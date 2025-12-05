'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import Hero from "@/components/ui/animated-shader-hero";
import { WorkflowSection } from '@/components/WorkflowSection';
import { AboutSection } from '@/components/AboutSection';
import { DetailsSection } from '@/components/DetailsSection';
import { BountiesSection } from '@/components/BountiesSection';
import { SponsorsSection } from '@/components/SponsorsSection';
import { RegistrationSection } from '@/components/RegistrationSection';
import { DiscordSection } from '@/components/DiscordSection';
import { BountiesChannelSection } from '@/components/BountiesChannelSection';
import { HackerRoomsSection } from '@/components/HackerRoomsSection';
import { EventIntroSection } from '@/components/EventIntroSection';
import { SlideIndicator } from '@/components/SlideIndicator';
import { useSlideNavigation } from '@/hooks/useSlideNavigation';

export default function Home() {
  const slideNav = useSlideNavigation();

  return (
    <main className="min-h-screen bg-black text-white selection:bg-teal-500 selection:text-black">
      <Header />
      <div id="hero">
        <Hero
          headline={{ line1: "Ship or Be Shipped", line2: "Build, Learn, Connect" }}
          subtitle="Transform your ideas into reality. Join the ultimate hackathon where builders, designers, and innovators come together to create solutions that matter."
          buttons={{
            primary: {
              text: "Register Now",
              onClick: () => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })
            },
            secondary: {
              text: "Learn More",
              onClick: () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
            }
          }}
        />
      </div>
      <WorkflowSection />
      <AboutSection />
      <DetailsSection />
      <BountiesSection />
      <SponsorsSection />
      <EventIntroSection />
      <DiscordSection />
      <HackerRoomsSection />
      <BountiesChannelSection />
      <div id="register">
        <RegistrationSection />
      </div>
      <Footer />
      
      {/* Slide Navigation Indicator */}
      <SlideIndicator
        currentIndex={slideNav.currentIndex}
        totalSections={slideNav.totalSections}
        sections={slideNav.sections}
        goToNext={slideNav.goToNext}
        goToPrevious={slideNav.goToPrevious}
        goToSection={slideNav.goToSection}
      />
    </main>
  );
}
