import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Box, 
  ArrowRight, 
  Database,
  Cpu,
  Shield,
  Globe,
  Layers,
  ChevronRight,
  Zap
} from 'lucide-react';

const layers = [
  {
    id: 'user',
    name: 'User Interface',
    icon: <Globe className="w-5 h-5" />,
    description: 'Web, CLI, and API interfaces for interacting with OpenClaw',
    color: 'from-blue-500 to-cyan-500',
    components: ['Web Dashboard', 'CLI Tools', 'REST API', 'WebSocket']
  },
  {
    id: 'gateway',
    name: 'Gateway',
    icon: <Zap className="w-5 h-5" />,
    description: 'Central message router and connection manager',
    color: 'from-green-500 to-emerald-500',
    components: ['Message Router', 'Session Management', 'Authentication', 'Rate Limiting']
  },
  {
    id: 'agents',
    name: 'Agent Layer',
    icon: <Layers className="w-5 h-5" />,
    description: 'Specialized AI agents for different tasks and domains',
    color: 'from-purple-500 to-pink-500',
    components: ['Main Agent', 'Specialist Agents', 'Coder Agent', 'Security Agent']
  },
  {
    id: 'skills',
    name: 'Skills & Tools',
    icon: <Box className="w-5 h-5" />,
    description: 'Modular capabilities and external service integrations',
    color: 'from-orange-500 to-red-500',
    components: ['Browser Control', 'File Operations', 'Web Search', 'System Commands']
  },
  {
    id: 'models',
    name: 'Model Layer',
    icon: <Cpu className="w-5 h-5" />,
    description: 'LLM providers and local model execution',
    color: 'from-indigo-500 to-violet-500',
    components: ['OpenAI', 'Claude', 'Local Ollama', 'Model Routing']
  },
  {
    id: 'storage',
    name: 'Storage & State',
    icon: <Database className="w-5 h-5" />,
    description: 'Persistent data and memory management',
    color: 'from-teal-500 to-cyan-500',
    components: ['File System', 'Vector DB', 'Context Memory', 'User Settings']
  }
];

function ArchitectureWidget() {
  const [selectedLayer, setSelectedLayer] = useState(null);

  return (
    <div className="glass-card p-8">
      <h2 className="text-3xl font-bold mb-2 gradient-text">System Architecture</h2>
      <p className="text-gray-400 mb-8">
        A modular, scalable architecture designed for flexibility and extensibility
      </p>

      <div className="space-y-4">
        {layers.map((layer, idx) => (
          <motion.div
            key={layer.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="border border-white/10 rounded-xl overflow-hidden"
          >
            <button
              onClick={() => setSelectedLayer(selectedLayer === layer.id ? null : layer.id)}
              className="w-full p-6 flex items-center gap-4 hover:bg-white/5 transition-colors text-left"
            >
              <div className={`p-3 bg-gradient-to-br ${layer.color} rounded-lg text-white shrink-0`}>
                {layer.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">{layer.name}</h3>
                  <ChevronRight 
                    className={`w-5 h-5 text-gray-400 transition-transform ${
                      selectedLayer === layer.id ? 'rotate-90' : ''
                    }`} 
                  />
                </div>
                <p className="text-gray-400 text-sm mt-1">{layer.description}</p>
              </div>
            </button>

            <AnimatePresence>
              {selectedLayer === layer.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="px-6 pb-6"
                >
                  <div className="ml-16 p-4 bg-white/5 rounded-lg">
                    <h4 className="text-sm font-semibold text-openclaw-primary mb-3">Components:</h4>
                    <div className="flex flex-wrap gap-2">
                      {layer.components.map((component) => (
                        <span
                          key={component}
                          className="px-3 py-1 bg-openclaw-primary/20 text-openclaw-primary rounded-full text-sm"
                        >
                          {component}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="glass-card p-4 text-center"
        >
          <Shield className="w-8 h-8 text-green-400 mx-auto mb-2" />
          <h4 className="font-semibold mb-1">Security First</h4>
          <p className="text-xs text-gray-400">Authentication, encryption, and sandboxing at every layer</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="glass-card p-4 text-center"
        >
          <Zap className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
          <h4 className="font-semibold mb-1">High Performance</h4>
          <p className="text-xs text-gray-400">Parallel execution, intelligent caching, and optimized routing</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="glass-card p-4 text-center"
        >
          <Layers className="w-8 h-8 text-blue-400 mx-auto mb-2" />
          <h4 className="font-semibold mb-1">Modular Design</h4>
          <p className="text-xs text-gray-400">Plugin-based architecture for easy extension</p>
        </motion.div>
      </div>

      <div className="mt-8 p-6 bg-gradient-to-r from-openclaw-primary/10 to-openclaw-secondary/10 rounded-xl border border-openclaw-primary/20">
        <h4 className="font-semibold text-openclaw-primary mb-2">📚 Learn More</h4>
        <p className="text-gray-300 text-sm">
          The complete architecture documentation is available in the repository's 
          <span className="text-openclaw-primary"> /docs/architecture.md</span> file. 
          It includes detailed diagrams, API specifications, and deployment guides.
        </p>
      </div>
    </div>
  );
}

export default ArchitectureWidget;
