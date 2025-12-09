import React from 'react';
import EditableText from './EditableText';
import EditableImage from './EditableImage';
import { ArrowDownCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroProps {
  name: string;
  tagline: string;
  profileUrl: string;
  backgroundUrl: string;
}

const Hero = ({ name, tagline, profileUrl, backgroundUrl }: HeroProps) => {
  // Scroll handler function
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 -z-10">
        <EditableImage
          initialSrc={backgroundUrl}
          alt="Background"
          className="w-full h-full aspect-auto"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-portfolio-navy/30 to-black/60"></div>
      </div>

      <div className="container mx-auto px-4 pt-20 md:pt-32 z-10 flex flex-col items-center text-center">
        <div className="mb-8 w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white shadow-lg mx-auto">
          <EditableImage
            initialSrc="/Main.png"
            alt="Profile picture"
            className="w-full h-full"
          />
        </div>

        <EditableText
          initialValue={name}
          as="h1"
          className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight"
        />

        <EditableText
          initialValue={tagline}
          as="p"
          className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-12"
        />

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          <Button 
            size="lg" 
            className="bg-portfolio-teal hover:bg-portfolio-teal/90"
            onClick={() => scrollToSection('projects')}
          >
            View My Work
          </Button>

          <Button 
            variant="outline" 
            size="lg" 
            className="text-green border-white hover:bg-green/10"
            onClick={() => scrollToSection('contact')}
          >
            Contact Me
          </Button>
        </div>

        <a
          href="#about"
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/80 hover:text-white transition-colors animation-bounce"
        >
          <ArrowDownCircle className="w-10 h-10 floating" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
