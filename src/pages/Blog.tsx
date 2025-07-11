import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const Blog: React.FC = () => {
  const posts = [
    {
      id: 1,
      title: 'The Art of Interactive Storytelling',
      excerpt: 'Exploring how player choice can enhance emotional depth in narrative-driven games.',
      date: 'March 15, 2024',
      readTime: '8 min read',
      image: 'https://images.pexels.com/photos/159832/book-reading-read-literature-159832.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      category: 'Game Design',
      author: 'Alex Chen'
    },
    {
      id: 2,
      title: 'Behind the Scenes: Creating Whispers of the Void',
      excerpt: 'A deep dive into our creative process and the challenges we faced bringing this story to life.',
      date: 'March 10, 2024',
      readTime: '12 min read',
      image: 'https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      category: 'Development',
      author: 'Maya Rodriguez'
    },
    {
      id: 3,
      title: 'The Future of Visual Novels',
      excerpt: 'How emerging technologies are reshaping the visual novel landscape.',
      date: 'March 5, 2024',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      category: 'Industry',
      author: 'Jordan Kim'
    },
    {
      id: 4,
      title: 'Character Development in Comics',
      excerpt: 'Building compelling characters that resonate with readers across different mediums.',
      date: 'February 28, 2024',
      readTime: '10 min read',
      image: 'https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      category: 'Comics',
      author: 'Sam Taylor'
    },
    {
      id: 5,
      title: 'Music and Atmosphere in Interactive Media',
      excerpt: 'How sound design shapes the emotional landscape of our stories.',
      date: 'February 22, 2024',
      readTime: '7 min read',
      image: 'https://images.pexels.com/photos/164743/pexels-photo-164743.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      category: 'Audio Design',
      author: 'Alex Chen'
    },
    {
      id: 6,
      title: 'Community Feedback and Iteration',
      excerpt: 'How player feedback shapes our creative process and improves our storytelling.',
      date: 'February 15, 2024',
      readTime: '9 min read',
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      category: 'Community',
      author: 'Maya Rodriguez'
    }
  ];

  const categories = ['All', 'Game Design', 'Development', 'Industry', 'Comics', 'Audio Design', 'Community'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredPosts = selectedCategory === 'All' 
    ? posts 
    : posts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">Creative Journal</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Insights, stories, and reflections from our creative process. 
              Join us as we explore the art of storytelling.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-violet-600 to-blue-600 text-white'
                    : 'bg-slate-800/50 text-gray-300 hover:text-white hover:bg-slate-700/50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="group bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 border border-slate-700/50"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-violet-600/90 text-white text-xs font-semibold rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-3">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Calendar size={14} />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock size={14} />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-violet-400 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">By {post.author}</span>
                    <button className="flex items-center space-x-2 text-violet-400 hover:text-white transition-colors duration-200">
                      <span className="font-medium">Read More</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No posts found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blog;