import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Search,
  Database,
  Terminal,
  Globe,
  MessageSquare,
  Calendar,
  Image,
  Code2,
  FileText,
  Settings,
  Zap,
  Shield,
  Clock,
  ExternalLink,
  Download,
  Play
} from 'lucide-react';

const toolsData = [
  {
    id: 'web-search',
    name: 'Web Search',
    description: 'Powered by Brave Search API for fast, accurate web searches',
    icon: Search,
    color: 'from-blue-500 to-blue-700',
    category: 'Information',
    popularity: 95,
    usage: '12.5K',
    features: ['Real-time results', 'Country-specific', 'Freshness filters']
  },
  {
    id: 'file-manager',
    name: 'File Manager',
    description: 'Read, write, and organize files in your workspace',
    icon: FileText,
    color: 'from-green-500 to-green-700',
    category: 'System',
    popularity: 92,
    usage: '10.2K',
    features: ['CRUD operations', 'Binary support', 'Path manipulation']
  },
  {
    id: 'code-executor',
    name: 'Code Executor',
    description: 'Run shell commands and execute code safely',
    icon: Terminal,
    color: 'from-purple-500 to-purple-700',
    category: 'Development',
    popularity: 88,
    usage: '8.7K',
    features: ['PTY support', 'Background tasks', 'Process management']
  },
  {
    id: 'browser-control',
    name: 'Browser Control',
    description: 'Automate web browsers with full control',
    icon: Globe,
    color: 'from-cyan-500 to-cyan-700',
    category: 'Automation',
    popularity: 85,
    usage: '7.4K',
    features: ['Screenshots', 'Form filling', 'Navigation']
  },
  {
    id: 'messaging',
    name: 'Messaging',
    description: 'Send and manage messages across platforms',
    icon: MessageSquare,
    color: 'from-pink-500 to-pink-700',
    category: 'Communication',
    popularity: 90,
    usage: '9.8K',
    features: ['Telegram', 'Discord', 'WhatsApp support']
  },
  {
    id: 'calendar',
    name: 'Calendar',
    description: 'Manage events, schedules, and reminders',
    icon: Calendar,
    color: 'from-orange-500 to-orange-700',
    category: 'Productivity',
    popularity: 82,
    usage: '6.3K',
    features: ['Google Calendar', 'Outlook', 'Event creation']
  },
  {
    id: 'image-analysis',
    name: 'Image Analysis',
    description: 'Analyze images with AI-powered vision',
    icon: Image,
    color: 'from-indigo-500 to-indigo-700',
    category: 'AI',
    popularity: 78,
    usage: '5.2K',
    features: ['Object detection', 'OCR', 'Captioning']
  },
  {
    id: 'database',
    name: 'Database',
    description: 'Connect and query databases seamlessly',
    icon: Database,
    color: 'from-teal-500 to-teal-700',
    category: 'Data',
    popularity: 75,
    usage: '4.8K',
    features: ['SQL support', 'NoSQL', 'Connection pooling']
  },
  {
    id: 'git',
    name: 'Git Operations',
    description: 'Version control and repository management',
    icon: Code2,
    color: 'from-red-500 to-red-700',
    category: 'Development',
    popularity: 80,
    usage: '5.9K',
    features: ['Commit/Push', 'Branch management', 'PR automation']
  },
  {
    id: 'notifications',
    name: 'Notifications',
    description: 'Send alerts and push notifications',
    icon: Bell,
    color: 'from-yellow-500 to-yellow-700',
    category: 'Communication',
    popularity: 72,
    usage: '4.1K',
    features: ['Push notifications', 'Email alerts', 'Webhooks']
  },
  {
    id: 'home-assistant',
    name: 'Home Assistant',
    description: 'Control smart home devices',
    icon: Home,
    color: 'from-emerald-500 to-emerald-700',
    category: 'IoT',
    popularity: 68,
    usage: '3.5K',
    features: ['Lights', 'Climate', 'Security']
  },
  {
    id: 'proxmox',
    name: 'Proxmox',
    description: 'Virtual machine management',
    icon: Server,
    color: 'from-gray-500 to-gray-700',
    category: 'Infrastructure',
    popularity: 65,
    usage: '3.2K',
    features: ['VM control', 'LXC containers', 'Storage']
  }
];

// Add missing icon components
const Bell = (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>;
const Home = (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>;
const Server = (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/></svg>;

const categories = ['All', 'Information', 'System', 'Development', 'Automation', 'Communication', 'Productivity', 'AI', 'Data', 'IoT', 'Infrastructure'];

export default function ToolsShowcase() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTool, setSelectedTool] = useState(null);

  const filteredTools = selectedCategory === 'All' 
    ? toolsData 
    : toolsData.filter(tool => tool.category === selectedCategory);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="section-title">
          <Settings className="w-6 h-6 text-openclaw-400" />
          Tools Showcase
        </h2>
        <div className="flex items-center gap-2">
          <Zap className="w-4 h-4 text-yellow-400" />
          <span className="text-sm text-gray-400">{toolsData.length} tools available</span>
        </div>
      </div>

      {/* Category Filter */}
      <div className="mb-6 overflow-x-auto">
        <div className="flex gap-2 pb-2">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                selectedCategory === category
                  ? 'bg-openclaw-500 text-white'
                  : 'bg-gray-800 text-gray-400 hover:text-white'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Tools Grid */}
        <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
          {filteredTools.map((tool, index) => (
            <motion.div
              key={tool.id}
              className={`widget-card cursor-pointer transition-all ${
                selectedTool?.id === tool.id ? 'ring-2 ring-openclaw-500' : ''
              }`}
              onClick={() => setSelectedTool(tool)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start justify-between mb-3">
                <div className={`w-12 h-12 bg-gradient-to-br ${tool.color} rounded-xl flex items-center justify-center shadow-lg`}>
                  <tool.icon className="w-6 h-6 text-white" />
                </div>
                <span className="badge badge-info">{tool.category}</span>
              </div>

              <h3 className="text-lg font-semibold text-white mb-2">{tool.name}</h3>
              <p className="text-gray-400 text-sm mb-4 line-clamp-2">{tool.description}</p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-green-400" />
                  <span className="text-xs text-gray-400">{tool.usage} uses</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-green-500 to-green-400"
                      initial={{ width: 0 }}
                      animate={{ width: `${tool.popularity}%` }}
                      transition={{ duration: 1, delay: index * 0.05 }}
                    />
                  </div>
                  <span className="text-xs text-gray-400">{tool.popularity}%</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tool Details Panel */}
        <div className="lg:col-span-1">
          {selectedTool ? (
            <motion.div
              className="widget-card-alt sticky top-24"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${selectedTool.color} rounded-2xl flex items-center justify-center mb-4 shadow-xl`}>
                <selectedTool.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">{selectedTool.name}</h3>
              <span className="badge badge-info mb-4">{selectedTool.category}</span>

              <p className="text-gray-300 mb-6">{selectedTool.description}</p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-900/50 rounded-lg p-3">
                  <div className="text-xs text-gray-400 mb-1">Popularity</div>
                  <div className="text-xl font-bold text-white">{selectedTool.popularity}%</div>
                </div>
                <div className="bg-gray-900/50 rounded-lg p-3">
                  <div className="text-xs text-gray-400 mb-1">Usage</div>
                  <div className="text-xl font-bold text-white">{selectedTool.usage}</div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-white mb-3">Key Features</h4>
                <ul className="space-y-2">
                  {selectedTool.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                      <Clock className="w-4 h-4 text-openclaw-400 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-2">
                <motion.button
                  className="flex-1 px-4 py-3 bg-openclaw-500 hover:bg-openclaw-600 text-white rounded-lg font-medium flex items-center justify-center gap-2 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Play className="w-4 h-4" />
                  Try Demo
                </motion.button>
                <motion.button
                  className="px-4 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          ) : (
            <div className="widget-card sticky top-24 text-center">
              <Settings className="w-12 h-12 text-gray-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Select a Tool</h3>
              <p className="text-gray-400 text-sm">
                Click on any tool to view detailed information, features, and usage statistics.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
