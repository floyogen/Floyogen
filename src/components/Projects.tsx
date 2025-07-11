import React from 'react';
import { ExternalLink, Book, Gamepad2, Image } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'Whispers of the Void',
      category: 'Visual Novel',
      description: 'A haunting tale of loss and redemption set in a world between dreams and reality.',
      image: 'https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      icon: <Book className="h-6 w-6" />,
      status: 'Coming Soon',
      color: 'from-purple-600 to-blue-600'
    },
    {
      id: 2,
      title: 'Echoes of Tomorrow',
      category: 'Story-Rich Game',
      description: 'Navigate through a post-apocalyptic world where every choice shapes the future.',
      image: 'https://images.pexels.com/photos/2832382/pexels-photo-2832382.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      icon: <Gamepad2 className="h-6 w-6" />,
      status: 'In Development',
      color: 'from-blue-600 to-teal-600'
    },
    {
      id: 3,
      title: 'The Artisan Chronicles',
      category: 'Original Comic',
      description: 'Follow the journey of a young artist discovering magical powers through their art.',
      image: 'https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      icon: <Image className="h-6 w-6" />,
      status: 'Available Now',
      color: 'from-teal-600 to-green-600'
    },
    {
      id: 4,
      title: 'Midnight Reverie',
      category: 'Visual Novel',
      description: 'A psychological thriller exploring the boundaries between sleep and consciousness.',
      image: 'https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      icon: <Book className="h-6 w-6" />,
      status: 'Coming Soon',
      color: 'from-violet-600 to-purple-600'
    },
    {
      id: 5,
      title: 'Celestial Wanderers',
      category: 'Story-Rich Game',
      description: 'Explore the cosmos and uncover ancient mysteries in this atmospheric adventure.',
      image: 'https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      icon: <Gamepad2 className="h-6 w-6" />,
      status: 'In Development',
      color: 'from-indigo-600 to-purple-600'
    },
    {
      id: 6,
      title: 'Tales of the Forgotten',
      category: 'Original Comic',
      description: 'A collection of short stories about forgotten heroes and their untold legends.',
      image: 'https://images.pexels.com/photos/3246665/pexels-photo-3246665.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      icon: <Image className="h-6 w-6" />,
      status: 'Available Now',
      color: 'from-green-600 to-teal-600'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">Creative Works</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Each project is a journey into the extraordinary, where storytelling meets artistry 
            and imagination knows no bounds.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
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
                  <ExternalLink size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;