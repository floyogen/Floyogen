import React from 'react';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1955134/pexels-photo-1955134.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/70 to-slate-900/90"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-violet-900/30 to-blue-900/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="block mb-2">Stories That</span>
            <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
              Transcend Reality
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            We craft immersive worlds where every pixel tells a story, every frame holds emotion, 
            and every interaction becomes a memory.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-gradient-to-r from-violet-600 to-blue-600 text-white font-semibold rounded-lg hover:from-violet-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explore Our Worlds
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="px-8 py-3 border-2 border-violet-400 text-violet-400 font-semibold rounded-lg hover:bg-violet-400 hover:text-white transition-all duration-300"
            >
              Our Story
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <button
          onClick={() => scrollToSection('projects')}
          className="animate-bounce text-white hover:text-violet-400 transition-colors duration-300"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;