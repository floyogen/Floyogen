import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Calendar, Clock } from 'lucide-react';

interface NewsItem {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  date: string;
  category: string;
  description: string;
}

const NewsCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const newsItems: NewsItem[] = [
    {
      id: 1,
      title: 'Whispers of the Void',
      subtitle: 'Chapter 3 Now Available',
      image: 'https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      date: 'March 20, 2024',
      category: 'Game Update',
      description: 'Dive deeper into the mysterious realm as new secrets unfold in our latest chapter.'
    },
    {
      id: 2,
      title: 'Echoes of Tomorrow',
      subtitle: 'Beta Testing Begins',
      image: 'https://images.pexels.com/photos/2832382/pexels-photo-2832382.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      date: 'March 18, 2024',
      category: 'Development',
      description: 'Join our exclusive beta program and help shape the future of interactive storytelling.'
    },
    {
      id: 3,
      title: 'The Artisan Chronicles',
      subtitle: 'Volume 2 Released',
      image: 'https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      date: 'March 15, 2024',
      category: 'Comic Release',
      description: 'Continue the magical journey with our beloved artist in this stunning new volume.'
    },
    {
      id: 4,
      title: 'Midnight Reverie',
      subtitle: 'Coming This Summer',
      image: 'https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      date: 'March 12, 2024',
      category: 'Announcement',
      description: 'A psychological thriller that blurs the line between dreams and reality.'
    },
    {
      id: 5,
      title: 'Community Showcase',
      subtitle: 'Fan Art Competition',
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      date: 'March 10, 2024',
      category: 'Community',
      description: 'Celebrating the incredible creativity of our amazing community members.'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % newsItems.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [newsItems.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % newsItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + newsItems.length) % newsItems.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full h-[70vh] overflow-hidden rounded-2xl">
      {/* Slides */}
      <div className="relative w-full h-full">
        {newsItems.map((item, index) => (
          <div
            key={item.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-slate-900/30"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
              
              <div className="relative z-10 h-full flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                  <div className="max-w-2xl">
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="px-3 py-1 bg-violet-600/90 text-white text-sm font-semibold rounded-full">
                        {item.category}
                      </span>
                      <div className="flex items-center space-x-2 text-gray-300">
                        <Calendar size={16} />
                        <span className="text-sm">{item.date}</span>
                      </div>
                    </div>
                    
                    <h2 className="text-5xl sm:text-6xl font-bold text-white mb-4 leading-tight">
                      {item.title}
                    </h2>
                    
                    <h3 className="text-2xl sm:text-3xl text-violet-400 mb-6 font-medium">
                      {item.subtitle}
                    </h3>
                    
                    <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                      {item.description}
                    </p>
                    
                    <button className="px-8 py-3 bg-gradient-to-r from-violet-600 to-blue-600 text-white font-semibold rounded-lg hover:from-violet-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 p-3 bg-slate-900/50 backdrop-blur-sm text-white rounded-full hover:bg-slate-900/70 transition-all duration-300"
      >
        <ChevronLeft size={24} />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 p-3 bg-slate-900/50 backdrop-blur-sm text-white rounded-full hover:bg-slate-900/70 transition-all duration-300"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {newsItems.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-violet-400 scale-125' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

      {/* Project Names Overlay */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-6 text-center">
          {newsItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 ${
                index === currentSlide 
                  ? 'text-violet-400 scale-110' 
                  : 'text-white/70 hover:text-white'
              }`}
            >
              <div className="text-sm font-medium">{item.title}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsCarousel;