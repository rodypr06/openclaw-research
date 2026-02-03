import React from 'react';
import { motion } from 'framer-motion';
import { 
  Github, 
  Twitter, 
  Linkedin, 
  MessageSquare, 
  Mail, 
  Heart,
  ArrowUp,
  ExternalLink
} from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900/50 border-t border-gray-800 mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-openclaw-500 to-openclaw-700 rounded-lg flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">OpenClaw</h3>
                <p className="text-xs text-gray-400">Research Platform</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              The most advanced open-source AI agent framework. Build intelligent agents with ease.
            </p>
            <motion.button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
              whileHover={{ x: -5 }}
            >
              <ArrowUp className="w-4 h-4" />
              Back to top
            </motion.button>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {[
                { name: 'Documentation', href: '#' },
                { name: 'API Reference', href: '#' },
                { name: 'Tutorials', href: '#' },
                { name: 'Examples', href: '#' },
              ].map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                    whileHover={{ x: 5 }}
                  >
                    {link.name}
                    <ExternalLink className="w-3 h-3" />
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="text-white font-semibold mb-4">Community</h4>
            <ul className="space-y-2">
              {[
                { name: 'GitHub', icon: Github, href: '#' },
                { name: 'Discord', icon: MessageSquare, href: '#' },
                { name: 'Twitter', icon: Twitter, href: '#' },
                { name: 'Reddit', href: '#' },
              ].map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                    whileHover={{ x: 5 }}
                  >
                    {link.icon && <link.icon className="w-4 h-4" />}
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-semibold mb-4">Stay Updated</h4>
            <p className="text-sm text-gray-400 mb-4">
              Get the latest news and updates delivered to your inbox.
            </p>
            <div className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-openclaw-500 transition-colors"
              />
              <motion.button
                className="px-4 py-2 bg-openclaw500 hover:bg-openclaw-600 text-white rounded-lg text-sm font-medium transition-colors bg-openclaw-500"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-400 flex items-center gap-2">
              © 2025 OpenClaw. Built with{' '}
              <Heart className="w-4 h-4 text-red-400 animate-pulse" />
              by the community
            </p>
            
            <div className="flex items-center gap-4">
              {[
                { icon: Github, href: '#', color: 'hover:text-white' },
                { icon: Twitter, href: '#', color: 'hover:text-white' },
                { icon: Linkedin, href: '#', color: 'hover:text-white' },
                { icon: Mail, href: '#', color: 'hover:text-white' },
              ].map((social) => (
                <motion.a
                  key={social.href}
                  href={social.href}
                  className={`p-2 text-gray-400 transition-colors ${social.color}`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
