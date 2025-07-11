import React from 'react';
import { Gamepad2, Twitter, Instagram, Youtube, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Gamepad2 className="h-8 w-8 text-violet-400" />
              <span className="text-2xl font-bold text-white">Floyogen</span>
            </div>
            <p className="text-gray-300 max-w-md">
              Crafting immersive stories and interactive experiences that transcend reality. 
              Every pixel tells a story, every frame holds emotion.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-violet-400 transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-violet-400 transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-violet-400 transition-colors">
                <Youtube size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-violet-400 transition-colors">
                <Github size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-violet-400 transition-colors">Home</a></li>
              <li><a href="#projects" className="text-gray-300 hover:text-violet-400 transition-colors">Projects</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-violet-400 transition-colors">About</a></li>
              <li><a href="#blog" className="text-gray-300 hover:text-violet-400 transition-colors">Blog</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-violet-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-violet-400 transition-colors">Community</a></li>
              <li><a href="#" className="text-gray-300 hover:text-violet-400 transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-violet-400 transition-colors">Press Kit</a></li>
              <li><a href="#" className="text-gray-300 hover:text-violet-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-violet-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">© 2024 Floyogen. All rights reserved.</p>
          <p className="text-gray-400 mt-2 md:mt-0">
            Made with <span className="text-violet-400">♥</span> for storytellers everywhere
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;