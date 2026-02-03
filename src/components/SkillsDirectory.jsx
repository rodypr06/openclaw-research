import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  BrainCircuit,
  Code2,
  Database,
  Globe,
  Lock,
  Zap,
  MessageSquare,
  Image,
  Cpu,
  Shield,
  Search,
  ChevronRight,
  ExternalLink,
  Award,
  Users,
  Flame
} from 'lucide-react';

const skillsData = [
  {
    category: 'Core Capabilities',
    icon: BrainCircuit,
    color: 'from-purple-500 to-purple-700',
    skills: [
      {
        name: 'Natural Language Understanding',
        level: 95,
        description: 'Advanced comprehension of complex queries and context',
        usage: 'High'
      },
      {
        name: 'Task Planning',
        level: 90,
        description: 'Intelligent decomposition and execution planning',
        usage: 'High'
      },
      {
        name: 'Multi-step Reasoning',
        level: 88,
        description: 'Chain-of-thought reasoning for complex problems',
        usage: 'High'
      },
      {
        name: 'Memory Management',
        level: 85,
        description: 'Short and long-term memory with context retention',
        usage: 'Medium'
      }
    ]
  },
  {
    category: 'Development',
    icon: Code2,
    color: 'from-blue-500 to-blue-700',
    skills: [
      {
        name: 'Code Generation',
        level: 92,
        description: 'Generate clean, efficient code in multiple languages',
        usage: 'High'
      },
      {
        name: 'Debugging',
        level: 88,
        description: 'Identify and fix bugs with detailed explanations',
        usage: 'High'
      },
      {
        name: 'Code Review',
        level: 85,
        description: 'Analyze code quality and suggest improvements',
        usage: 'Medium'
      },
      {
        name: 'Testing',
        level: 82,
        description: 'Generate comprehensive test cases and mocks',
        usage: 'Medium'
      }
    ]
  },
  {
    category: 'Data Management',
    icon: Database,
    color: 'from-green-500 to-green-700',
    skills: [
      {
        name: 'SQL Queries',
        level: 90,
        description: 'Write complex SQL queries and optimize performance',
        usage: 'High'
      },
      {
        name: 'Data Analysis',
        level: 87,
        description: 'Analyze datasets and generate insights',
        usage: 'High'
      },
      {
        name: 'ETL Operations',
        level: 80,
        description: 'Extract, transform, and load data pipelines',
        usage: 'Medium'
      },
      {
        name: 'Data Visualization',
        level: 78,
        description: 'Create charts and visual representations',
        usage: 'Low'
      }
    ]
  },
  {
    category: 'Web & Automation',
    icon: Globe,
    color: 'from-cyan-500 to-cyan-700',
    skills: [
      {
        name: 'Web Scraping',
        level: 88,
        description: 'Extract data from websites efficiently',
        usage: 'High'
      },
      {
        name: 'Browser Automation',
        level: 85,
        description: 'Control browsers for testing and automation',
        usage: 'High'
      },
      {
        name: 'API Integration',
        level: 92,
        description: 'Connect to and interact with REST APIs',
        usage: 'High'
      },
      {
        name: 'Webhook Handling',
        level: 80,
        description: 'Process incoming webhook events',
        usage: 'Medium'
      }
    ]
  },
  {
    category: 'Security',
    icon: Shield,
    color: 'from-red-500 to-red-700',
    skills: [
      {
        name: 'Input Validation',
        level: 95,
        description: 'Validate and sanitize all user inputs',
        usage: 'Critical'
      },
      {
        name: 'Error Handling',
        level: 90,
        description: 'Graceful error recovery and reporting',
        usage: 'Critical'
      },
      {
        name: 'Access Control',
        level: 88,
        description: 'Enforce permissions and role-based access',
        usage: 'High'
      },
      {
        name: 'Audit Logging',
        level: 85,
        description: 'Track all operations for compliance',
        usage: 'High'
      }
    ]
  },
  {
    category: 'AI & ML',
    icon: Cpu,
    color: 'from-indigo-500 to-indigo-700',
    skills: [
      {
        name: 'Model Selection',
        level: 88,
        description: 'Choose optimal models for specific tasks',
        usage: 'High'
      },
      {
        name: 'Prompt Engineering',
        level: 92,
        description: 'Craft effective prompts for desired outputs',
        usage: 'High'
      },
      {
        name: 'Fine-tuning',
        level: 75,
        description: 'Adapt models to specific use cases',
        usage: 'Medium'
      },
      {
        name: 'Embeddings',
        level: 85,
        description: 'Generate and use semantic embeddings',
        usage: 'High'
      }
    ]
  }
];

const getLevelColor = (level) => {
  if (level >= 90) return 'text-green-400';
  if (level >= 80) return 'text-openclaw-400';
  if (level >= 70) return 'text-yellow-400';
  return 'text-gray-400';
};

const getUsageColor = (usage) => {
  if (usage === 'Critical' || usage === 'High') return 'bg-green-500/20 text-green-400';
  if (usage === 'Medium') return 'bg-yellow-500/20 text-yellow-400';
  return 'bg-gray-500/20 text-gray-400';
};

export default function SkillsDirectory() {
  const [selectedCategory, setSelectedCategory] = useState(skillsData[0]);
  const [selectedSkill, setSelectedSkill] = useState(null);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="section-title">
          <Award className="w-6 h-6 text-openclaw-400" />
          Skills Directory
        </h2>
        <div className="flex items-center gap-2">
          <Flame className="w-4 h-4 text-orange-400" />
          <span className="text-sm text-gray-400">{skillsData.reduce((acc, cat) => acc + cat.skills.length, 0)} capabilities</span>
        </div>
      </div>

      <div className="grid lg:grid-cols-4 gap-6">
        {/* Category Sidebar */}
        <div className="lg:col-span-1">
          <div className="widget-card">
            <h3 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">Categories</h3>
            <div className="space-y-2">
              {skillsData.map((category) => (
                <motion.button
                  key={category.category}
                  onClick={() => {
                    setSelectedCategory(category);
                    setSelectedSkill(null);
                  }}
                  className={`w-full flex items-center justify-between p-3 rounded-lg transition-all ${
                    selectedCategory.category === category.category
                      ? 'bg-openclaw-500/20 border border-openclaw-500/30'
                      : 'bg-gray-900/50 hover:bg-gray-800'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center`}>
                      <category.icon className="w-4 h-4 text-white" />
                    </div>
                    <span className={`text-sm font-medium ${
                      selectedCategory.category === category.category ? 'text-white' : 'text-gray-400'
                    }`}>
                      {category.category}
                    </span>
                  </div>
                  <ChevronRight className={`w-4 h-4 transition-transform ${
                    selectedCategory.category === category.category ? 'text-openclaw-400 rotate-90' : 'text-gray-500'
                  }`} />
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        {/* Skills List */}
        <div className="lg:col-span-2">
          <div className="widget-card-alt mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className={`w-10 h-10 bg-gradient-to-br ${selectedCategory.color} rounded-xl flex items-center justify-center`}>
                <selectedCategory.icon className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{selectedCategory.category}</h3>
                <p className="text-sm text-gray-400">{selectedCategory.skills.length} skills</p>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            {selectedCategory.skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className={`widget-card cursor-pointer transition-all ${
                  selectedSkill?.name === skill.name ? 'ring-2 ring-openclaw-500' : ''
                }`}
                onClick={() => setSelectedSkill(skill)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.01 }}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="text-white font-medium">{skill.name}</h4>
                      <span className={`badge ${getUsageColor(skill.usage)}`}>{skill.usage}</span>
                    </div>
                    <p className="text-sm text-gray-400">{skill.description}</p>
                  </div>
                  <div className={`text-2xl font-bold ${getLevelColor(skill.level)}`}>
                    {skill.level}%
                  </div>
                </div>
                
                {/* Progress bar */}
                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full ${skill.level >= 90 ? 'bg-green-500' : skill.level >= 80 ? 'bg-openclaw-500' : 'bg-yellow-500'}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.05 + 0.2 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Skill Details */}
        <div className="lg:col-span-1">
          {selectedSkill ? (
            <motion.div
              className="widget-card sticky top-24"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="flex items-center justify-between mb-4">
                <span className={`badge ${getUsageColor(selectedSkill.usage)}`}>
                  {selectedSkill.usage} Usage
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">{selectedSkill.name}</h3>
              <p className="text-gray-300 mb-6">{selectedSkill.description}</p>

              {/* Level gauge */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-400">Proficiency Level</span>
                  <span className={`text-2xl font-bold ${getLevelColor(selectedSkill.level)}`}>
                    {selectedSkill.level}%
                  </span>
                </div>
                <div className="h-4 bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${
                      selectedSkill.level >= 90 ? 'from-green-500 to-green-400' :
                      selectedSkill.level >= 80 ? 'from-openclaw-500 to-openclaw-400' :
                      'from-yellow-500 to-yellow-400'
                    }`}
                    initial={{ width: 0 }}
                    animate={{ width: `${selectedSkill.level}%` }}
                    transition={{ duration: 1, delay: 0.3 }}
                  />
                </div>
              </div>

              {/* Skill metrics */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between p-3 bg-gray-900/50 rounded-lg">
                  <span className="text-sm text-gray-400">Accuracy</span>
                  <span className="text-white font-medium">{(selectedSkill.level * 0.95).toFixed(0)}%</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-900/50 rounded-lg">
                  <span className="text-sm text-gray-400">Speed</span>
                  <span className="text-white font-medium">Fast</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-900/50 rounded-lg">
                  <span className="text-sm text-gray-400">Reliability</span>
                  <span className="text-white font-medium">High</span>
                </div>
              </div>

              {/* Use cases */}
              <div>
                <h4 className="text-sm font-semibold text-white mb-2">Common Use Cases</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <ChevronRight className="w-4 h-4 text-openclaw-400 flex-shrink-0 mt-0.5" />
                    <span>{selectedSkill.name.toLowerCase()} tasks</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <ChevronRight className="w-4 h-4 text-openclaw-400 flex-shrink-0 mt-0.5" />
                    <span>Automated workflows</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-300">
                    <ChevronRight className="w-4 h-4 text-openclaw-400 flex-shrink-0 mt-0.5" />
                    <span>Integration scenarios</span>
                  </li>
                </ul>
              </div>

              <motion.button
                className="w-full mt-6 px-4 py-3 bg-openclaw-500 hover:bg-openclaw-600 text-white rounded-lg font-medium flex items-center justify-center gap-2 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink className="w-4 h-4" />
                View Documentation
              </motion.button>
            </motion.div>
          ) : (
            <div className="widget-card sticky top-24 text-center">
              <BrainCircuit className="w-12 h-12 text-gray-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Select a Skill</h3>
              <p className="text-gray-400 text-sm">
                Click on any skill to view detailed information, proficiency levels, and use cases.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
