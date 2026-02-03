import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Layers, 
  Network, 
  Cpu,
  ChevronDown,
  ChevronRight
} from 'lucide-react';

const researchAreas = [
  {
    title: 'Multi-Agent Systems',
    icon: <Layers className="w-6 h-6" />,
    description: 'Coordinating multiple AI agents to solve complex tasks through collaboration and specialization.',
    details: [
      'Agent-to-agent communication protocols',
      'Task delegation and distribution',
      'Conflict resolution strategies',
      'Consensus mechanisms'
    ]
  },
  {
    title: 'Tool Orchestration',
    icon: <Network className="w-6 h-6" />,
    description: 'Seamlessly integrating with external tools, APIs, and services to expand capabilities.',
    details: [
      'Dynamic tool discovery',
      'Intelligent tool selection',
      'Error recovery and retry logic',
      'Tool dependency management'
    ]
  },
  {
    title: 'Cognitive Architecture',
    icon: <Brain className="w-6 h-6" />,
    description: 'Designing reasoning patterns that mirror human thought processes while leveraging AI strengths.',
    details: [
      'Chain-of-thought reasoning',
      'Multi-step planning',
      'Context-aware decision making',
      'Learning from feedback'
    ]
  },
  {
    title: 'Performance Optimization',
    icon: <Cpu className="w-6 h-6" />,
    description: 'Maximizing efficiency and reducing latency for real-time agent operations.',
    details: [
      'Parallel execution',
      'Caching strategies',
      'Memory management',
      'Model routing optimization'
    ]
  }
];

function ResearchWidget() {
  const [expanded, setExpanded] = useState(null);

  return (
    <div className="glass-card p-8">
      <h2 className="text-3xl font-bold mb-2 gradient-text">Research Overview</h2>
      <p className="text-gray-400 mb-8">
        Exploring the frontiers of AI agent capabilities and building systems that can reason, plan, and act autonomously.
      </p>

      <div className="space-y-4">
        {researchAreas.map((area, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="border border-white/10 rounded-xl overflow-hidden"
          >
            <button
              onClick={() => setExpanded(expanded === idx ? null : idx)}
              className="w-full p-6 flex items-start gap-4 hover:bg-white/5 transition-colors text-left"
            >
              <div className="p-3 bg-openclaw-primary/20 rounded-lg text-openclaw-primary shrink-0">
                {area.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold mb-1">{area.title}</h3>
                  {expanded === idx ? (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  )}
                </div>
                <p className="text-gray-400">{area.description}</p>
              </div>
            </button>

            {expanded === idx && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                className="px-6 pb-6"
              >
                <ul className="space-y-2 ml-16">
                  {area.details.map((detail, didx) => (
                    <li key={didx} className="flex items-center gap-2 text-gray-300">
                      <span className="w-1.5 h-1.5 bg-openclaw-primary rounded-full" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      <div className="mt-8 p-6 bg-openclaw-primary/10 rounded-xl border border-openclaw-primary/20">
        <h4 className="font-semibold text-openclaw-primary mb-2">🚀 Current Focus</h4>
        <p className="text-gray-300">
          Actively researching advanced multi-agent coordination and self-improving systems. 
          Our goal is to create AI agents that can learn, adapt, and solve increasingly complex problems.
        </p>
      </div>
    </div>
  );
}

export default ResearchWidget;
