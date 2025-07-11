import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Book, Gamepad2, Image } from 'lucide-react';
import NewsCarousel from '../components/NewsCarousel';

const Home: React.FC = () => {
  const featuredProjects = [
    {
      id: 1,
      title: 'Whispers of the Void',
      category: 'Visual Novel',
      description: 'A haunting tale of loss and redemption set in a world between dreams and reality.',
      image: 'https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      icon: <Book className="h-6 w-6" />,
      status: 'Available Now',
      color: 'from-purple-600 to-blue-600'
    },
    {
      id: 2,
      title: 'Echoes of Tomorrow',
      category: 'Story-Rich Game',
      description: 'Navigate through a post-apocalyptic world where every choice shapes the future.',
      image: 'https://images.pexels.com/photos/2832382/pexels-photo-2832382.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      icon: <Gamepad2 className="h-6 w-6" />,
      status: 'Beta Testing',
      color: 'from-blue-600 to-teal-600'
    },
    {
      id: 3,
      title: 'The Artisan Chronicles',
      category: 'Original Comic',
      description: 'Follow the journey of a young artist discovering magical powers through their art.',
      image: 'https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      icon: <Image className="h-6 w-6" />,
      status: 'Volume 2 Out',
      color: 'from-teal-600 to-green-600'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with News Carousel */}
      <section className="pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="block mb-2">Stories That</span>
              <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
                Transcend Reality
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              We craft immersive worlds where every pixel tells a story, every frame holds emotion, 
              and every interaction becomes a memory.
            </p>
          </div>

          {/* News Carousel */}
          <NewsCarousel />
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Featured <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our latest creations where storytelling meets artistry 
              and imagination knows no bounds.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 border border-slate-700/50"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${project.color} text-white`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="text-violet-400">
                      {project.icon}
                    </div>
                    <span className="text-sm font-medium text-violet-400">{project.category}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-violet-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <button className="flex items-center space-x-2 text-violet-400 hover:text-white transition-colors duration-200">
                    <span className="font-medium">Learn More</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/projects"
              className="inline-flex items-center space-x-2 px-8 py-3 bg-gradient-to-r from-violet-600 to-blue-600 text-white font-semibold rounded-lg hover:from-violet-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              <span>View All Projects</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Begin Your <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">Journey?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of players who have already discovered the magic of our interactive stories.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/projects"
              className="px-8 py-3 bg-gradient-to-r from-violet-600 to-blue-600 text-white font-semibold rounded-lg hover:from-violet-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Explore Our Worlds
            </Link>
            <Link
              to="/about"
              className="px-8 py-3 border-2 border-violet-400 text-violet-400 font-semibold rounded-lg hover:bg-violet-400 hover:text-white transition-all duration-300"
            >
              Our Story
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;