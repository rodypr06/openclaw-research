import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  Activity, 
  MessageSquare, 
  Calendar, 
  Users, 
  Wrench, 
  BookOpen, 
  BarChart3, 
  Newspaper,
  Github,
  Twitter,
  Book
} from 'lucide-react';

const navItems = [
  { id: 'overview', label: 'Overview', icon: Activity },
  { id: 'sentiment', label: 'Sentiment', icon: MessageSquare },
  { id: 'timeline', label: 'Timeline', icon: Calendar },
  { id: 'community', label: 'Community', icon: Users },
  { id: 'tools', label: 'Tools', icon: Wrench },
  { id: 'skills', label: 'Skills', icon: BookOpen },
  { id: 'visualizations', label: 'Analytics', icon: BarChart3 },
  { id: 'news', label: 'News', icon: Newspaper },
];

export default function Header({ activeSection, setActiveSection }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-xl border-b border-gray-800' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div 
            className="flex items-center gap-2 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollToSection('overview')}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-openclaw-500 to-openclaw-700 rounded-lg flex items-center justify-center shadow-lg">
              <Activity className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">OpenClaw</h1>
              <p className="text-xs text-gray-400">Research Platform</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                  activeSection === item.id 
                    ? 'bg-openclaw-500/20 text-openclaw-400 border border-openclaw-500/30' 
                    : 'text-gray-400 hover:text-white hover:bg-gray-800'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </motion.button>
            ))}
          </nav>

          {/* Social Links */}
          <div className="hidden lg:flex items-center gap-3">
            <motion.a
              href="https://github.com/openclaw/openclaw"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://twitter.com/openclaw"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Twitter className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://docs.openclaw.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-openclaw-500 hover:bg-openclaw-600 text-white rounded-lg font-medium transition-colors flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Book className="w-4 h-4" />
              Docs
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-gray-900/95 backdrop-blur-md border-t border-gray-800"
          >
            <nav className="container mx-auto px-4 py-4">
              <div className="grid grid-cols-2 gap-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`p-3 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors ${
                      activeSection === item.id 
                        ? 'bg-openclaw-500/20 text-openclaw-400 border border-openclaw-500/30' 
                        : 'text-gray-400 hover:text-white hover:bg-gray-800'
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                    {item.label}
                  </button>
                ))}
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-800 flex items-center justify-center gap-3">
                <a
                  href="https://github.com/openclaw/openclaw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 text-gray-400 hover:text-white bg-gray-800 rounded-lg transition-colors"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
                <a
                  href="https://docs.openclaw.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 text-white bg-openclaw-500 rounded-lg hover:bg-openclaw-600 transition-colors"
                >
                  <Book className="w-4 h-4" />
                  Docs
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
