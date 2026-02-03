import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BrainCircuit, 
  GitBranch, 
  Zap, 
  Shield, 
  Code2,
  Terminal,
  Activity,
  ArrowRight
} from 'lucide-react';
import ResearchWidget from './components/ResearchWidget';
import TerminalWidget from './components/TerminalWidget';
import StatsWidget from './components/StatsWidget';
import ArchitectureWidget from './components/ArchitectureWidget';

function App() {
  const [activeWidget, setActiveWidget] = useState(null);

  const widgets = [
    {
      id: 'research',
      title: 'Research Overview',
      icon: <BrainCircuit className="w-6 h-6" />,
      description: 'Explore OpenClaw\'s cutting-edge AI agent research',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'terminal',
      title: 'Interactive Terminal',
      icon: <Terminal className="w-6 h-6" />,
      description: 'Experience OpenClaw\'s command interface',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'stats',
      title: 'Live Statistics',
      icon: <Activity className="w-6 h-6" />,
      description: 'Real-time metrics and performance data',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'architecture',
      title: 'Architecture',
      icon: <Code2 className="w-6 h-6" />,
      description: 'Deep dive into system design',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const features = [
    { icon: <Zap className="w-5 h-5" />, text: 'Lightning-fast execution' },
    { icon: <GitBranch className="w-5 h-5" />, text: 'Multi-tool orchestration' },
    { icon: <Shield className="w-5 h-5" />, text: 'Secure by design' },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-openclaw-primary/20 to-openclaw-secondary/20" />
        <div className="relative max-w-7xl mx-auto px-6 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="gradient-text">OpenClaw</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Next-Generation AI Agent Framework
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass-card px-6 py-3 flex items-center gap-2"
                >
                  <span className="text-openclaw-primary">{feature.icon}</span>
                  <span className="text-gray-300">{feature.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {activeWidget ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <button
              onClick={() => setActiveWidget(null)}
              className="mb-4 flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <ArrowRight className="w-5 h-5 rotate-180" />
              Back to Overview
            </button>
            {activeWidget === 'research' && <ResearchWidget />}
            {activeWidget === 'terminal' && <TerminalWidget />}
            {activeWidget === 'stats' && <StatsWidget />}
            {activeWidget === 'architecture' && <ArchitectureWidget />}
          </motion.div>
        ) : (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Explore OpenClaw</h2>
              <p className="text-gray-400">Click on a widget to dive deeper</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {widgets.map((widget, idx) => (
                <motion.button
                  key={widget.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  onClick={() => setActiveWidget(widget.id)}
                  className="glass-card p-8 text-left hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${widget.color} mb-4`}>
                    {widget.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{widget.title}</h3>
                  <p className="text-gray-400">{widget.description}</p>
                  <div className="mt-4 flex items-center gap-2 text-openclaw-primary group-hover:gap-4 transition-all">
                    <span className="text-sm font-medium">Explore</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </motion.button>
              ))}
            </div>
          </>
        )}
      </main>

      {/* Footer */}
      <footer className="mt-16 py-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-500">
          <p>© 2026 OpenClaw Research. Built with ❤️ for the AI community.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
