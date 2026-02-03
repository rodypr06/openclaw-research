import React from 'react';
import { motion } from 'framer-motion';
import { 
  Rocket, 
  Zap, 
  Shield, 
  Globe, 
  ArrowRight,
  Code2,
  Terminal,
  BrainCircuit,
  Sparkles
} from 'lucide-react';

const features = [
  {
    icon: BrainCircuit,
    title: 'AI-Powered',
    description: 'Intelligent task routing and execution',
    color: 'from-purple-500 to-purple-700'
  },
  {
    icon: Shield,
    title: 'Secure',
    description: 'Enterprise-grade security & privacy',
    color: 'from-green-500 to-green-700'
  },
  {
    icon: Globe,
    title: 'Multi-Platform',
    description: 'Telegram, Discord, Slack & more',
    color: 'from-openclaw-500 to-openclaw-700'
  },
  {
    icon: Zap,
    title: 'Fast',
    description: 'Lightweight & performant',
    color: 'from-yellow-500 to-yellow-700'
  }
];

export default function Hero() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative overflow-hidden rounded-3xl mb-12"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-openclaw-600/20 via-purple-600/20 to-pink-600/20" />
      <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm" />
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-openclaw-400 rounded-full opacity-20"
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 bg-openclaw-500/20 rounded-full text-openclaw-400 text-sm mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles className="w-4 h-4" />
              <span>Next-Gen AI Agent Framework</span>
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                OpenClaw
              </span>
              <br />
              <span className="bg-gradient-to-r from-openclaw-400 to-purple-400 bg-clip-text text-transparent">
                Research Platform
              </span>
            </h1>
            
            <p className="text-lg text-gray-300 mb-8 max-w-lg">
              The most advanced open-source AI agent framework. Build, deploy, and scale intelligent agents with ease.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.button
                className="px-6 py-3 bg-gradient-to-r from-openclaw-500 to-openclaw-600 hover:from-openclaw-600 hover:to-openclaw-700 text-white font-medium rounded-xl transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </motion.button>
              <motion.button
                className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-xl transition-all border border-gray-700 flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Terminal className="w-4 h-4" />
                Try Demo
              </motion.button>
            </div>

            {/* Quick stats */}
            <div className="flex gap-8 mt-8 pt-8 border-t border-gray-800">
              <div>
                <div className="text-2xl font-bold text-white">10K+</div>
                <div className="text-sm text-gray-400">Active Users</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-sm text-gray-400">Plugins</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">50+</div>
                <div className="text-sm text-gray-400">Integrations</div>
              </div>
            </div>
          </motion.div>

          {/* Right content - Code preview */}
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden shadow-2xl">
              {/* Window controls */}
              <div className="flex items-center gap-2 px-4 py-3 bg-gray-800/50 border-b border-gray-700">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-4 text-sm text-gray-400">agent.yml</span>
              </div>
              
              {/* Code content */}
              <div className="p-6 font-mono text-sm overflow-x-auto">
                <div className="text-gray-500"># OpenClaw Agent Configuration</div>
                <div className="mt-2">
                  <span className="text-purple-400">name</span>
                  <span className="text-white">:</span>
                  <span className="text-green-400"> "research-bot"</span>
                </div>
                <div>
                  <span className="text-purple-400">model</span>
                  <span className="text-white">:</span>
                  <span className="text-green-400"> "gpt-4"</span>
                </div>
                <div>
                  <span className="text-purple-400">tools</span>
                  <span className="text-white">:</span>
                </div>
                <div className="pl-4">
                  <span className="text-white">-</span>
                  <span className="text-green-400"> web-search</span>
                </div>
                <div className="pl-4">
                  <span className="text-white">-</span>
                  <span className="text-green-400"> code-executor</span>
                </div>
                <div className="pl-4">
                  <span className="text-white">-</span>
                  <span className="text-green-400"> file-manager</span>
                </div>
                <div>
                  <span className="text-purple-400">personality</span>
                  <span className="text-white">:</span>
                </div>
                <div className="pl-4">
                  <span className="text-purple-400">tone</span>
                  <span className="text-white">:</span>
                  <span className="text-green-400"> "professional"</span>
                </div>
                <div className="pl-4">
                  <span className="text-purple-400">style</span>
                  <span className="text-white">:</span>
                  <span className="text-green-400"> "concise"</span>
                </div>
              </div>

              {/* Animated typing indicator */}
              <motion.div
                className="absolute bottom-6 right-6 flex items-center gap-1 text-green-400"
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <span className="text-sm">Agent ready</span>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              </motion.div>
            </div>

            {/* Floating feature cards */}
            <motion.div
              className="absolute -top-4 -right-4 bg-gray-800/90 backdrop-blur-sm border border-gray-700 rounded-xl p-3 shadow-xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-yellow-400" />
                <span className="text-sm font-medium text-white">0.3ms response</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Features grid */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className={`p-4 bg-gradient-to-br ${feature.color} bg-opacity-10 border border-gray-700 rounded-xl hover:border-opacity-50 transition-all cursor-default`}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
            >
              <feature.icon className="w-6 h-6 mb-2 text-white" />
              <h3 className="font-semibold text-white mb-1">{feature.title}</h3>
              <p className="text-sm text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
