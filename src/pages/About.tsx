import React from 'react';
import { Heart, Users, Award, Zap } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Emotional Resonance',
      description: 'Every story we tell aims to touch the deepest parts of the human experience.'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Community First',
      description: 'We believe in building lasting connections with our audience and fellow creators.'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Artistic Excellence',
      description: 'We push the boundaries of visual storytelling and interactive narrative.'
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Innovation',
      description: 'We constantly explore new ways to blend technology with timeless storytelling.'
    }
  ];

  const team = [
    {
      name: 'Alex Chen',
      role: 'Creative Director',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'Visionary storyteller with 10+ years in interactive media.'
    },
    {
      name: 'Maya Rodriguez',
      role: 'Lead Artist',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'Award-winning illustrator specializing in emotional character design.'
    },
    {
      name: 'Jordan Kim',
      role: 'Technical Director',
      image: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'Expert in game engines and interactive narrative systems.'
    },
    {
      name: 'Sam Taylor',
      role: 'Narrative Designer',
      image: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'Master of branching storylines and character development.'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              About <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">Floyogen</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Born from a passion for storytelling and a love for interactive art, 
              we are dreamers turned creators.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">Our Journey</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Founded in the heart of creativity, Floyogen emerged from a simple belief: 
                that stories have the power to transform, heal, and inspire. We are a collective 
                of artists, writers, and dreamers who found each other through our shared love 
                of narrative-driven experiences.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                From our first visual novel to our latest interactive comic, every project 
                is infused with our commitment to emotional authenticity and artistic integrity. 
                We don't just create games and stories—we craft experiences that linger in 
                your thoughts long after the final page is turned.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop"
                  alt="Our creative space"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-violet-900/30 to-blue-900/30"></div>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-violet-400/50 transition-all duration-300"
              >
                <div className="text-violet-400 mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-violet-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-8 border border-violet-400/20">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">50K+</div>
                <div className="text-gray-300">Players Reached</div>
              </div>
              <div className="w-px h-12 bg-violet-400/30"></div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">12</div>
                <div className="text-gray-300">Projects Created</div>
              </div>
              <div className="w-px h-12 bg-violet-400/30"></div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">5</div>
                <div className="text-gray-300">Awards Won</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Meet Our <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">Team</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The passionate individuals behind every story, every character, and every magical moment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="text-center group"
              >
                <div className="relative mb-6">
                  <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-violet-400/20 group-hover:border-violet-400/50 transition-all duration-300">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-violet-400 font-medium mb-3">{member.role}</p>
                <p className="text-gray-300 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;