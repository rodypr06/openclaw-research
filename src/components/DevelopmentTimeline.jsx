import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Rocket, 
  Code, 
  GitBranch, 
  Users, 
  Zap, 
  Globe,
  CheckCircle2,
  Circle,
  Calendar,
  Tag
} from 'lucide-react';

const timelineEvents = [
  {
    year: '2024',
    quarter: 'Q1',
    title: 'Project Inception',
    description: 'Initial concept and architecture design',
    status: 'completed',
    color: 'from-green-500 to-green-700',
    milestones: [
      'Core architecture defined',
      'First prototype built',
      'Initial team assembled'
    ]
  },
  {
    year: '2024',
    quarter: 'Q2',
    title: 'Alpha Release',
    description: 'First public alpha with basic features',
    status: 'completed',
    color: 'from-green-500 to-green-700',
    milestones: [
      'Telegram integration',
      'Basic tool system',
      'First 100 users'
    ]
  },
  {
    year: '2024',
    quarter: 'Q3',
    title: 'Beta Launch',
    description: 'Beta release with enhanced features',
    status: 'completed',
    color: 'from-green-500 to-green-700',
    milestones: [
      'Multi-platform support',
      'Plugin system',
      'Documentation portal'
    ]
  },
  {
    year: '2024',
    quarter: 'Q4',
    title: 'v1.0 Stable',
    description: 'First stable production release',
    status: 'completed',
    color: 'from-green-500 to-green-700',
    milestones: [
      'Enterprise features',
      'Security audit',
      'API availability'
    ]
  },
  {
    year: '2025',
    quarter: 'Q1',
    title: 'v2.0 Major Update',
    description: 'Significant feature expansion',
    status: 'completed',
    color: 'from-green-500 to-green-700',
    milestones: [
      'Advanced AI routing',
      'Visual builder',
      'Community marketplace'
    ]
  },
  {
    year: '2025',
    quarter: 'Q2',
    title: 'v2.1 Enhancement',
    description: 'Performance and usability improvements',
    status: 'completed',
    color: 'from-green-500 to-green-700',
    milestones: [
      '50% faster execution',
      'Enhanced UI',
      'New integrations'
    ]
  },
  {
    year: '2025',
    quarter: 'Q3',
    title: 'v2.5 Scale Release',
    description: 'Enterprise scaling capabilities',
    status: 'in-progress',
    color: 'from-openclaw-500 to-openclaw-700',
    milestones: [
      'Multi-tenancy',
      'Advanced analytics',
      'Custom models'
    ]
  },
  {
    year: '2025',
    quarter: 'Q4',
    title: 'v3.0 Next Gen',
    description: 'Next-generation features and capabilities',
    status: 'planned',
    color: 'from-gray-500 to-gray-700',
    milestones: [
      'Auto-ML capabilities',
      'Edge deployment',
      'Advanced security'
    ]
  },
  {
    year: '2026',
    quarter: 'Q1',
    title: 'Ecosystem Expansion',
    description: 'Growing the OpenClaw ecosystem',
    status: 'planned',
    color: 'from-gray-500 to-gray-700',
    milestones: [
      'Partner integrations',
      'Mobile apps',
      'Enterprise suite'
    ]
  }
];

export default function DevelopmentTimeline() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="section-title">
          <Calendar className="w-6 h-6 text-openclaw-400" />
          Development Timeline
        </h2>
        <div className="flex items-center gap-2 text-sm">
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-gray-400">Completed</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 bg-openclaw-500 rounded-full"></div>
            <span className="text-gray-400">In Progress</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
            <span className="text-gray-400">Planned</span>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Timeline */}
        <div className="lg:col-span-2 space-y-4">
          {timelineEvents.map((event, index) => (
            <motion.div
              key={`${event.year}-${event.quarter}`}
              className={`relative pl-8 pb-4 ${
                index !== timelineEvents.length - 1 ? 'border-l-2 border-gray-700' : ''
              }`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Timeline dot */}
              <motion.div
                className={`absolute left-0 top-0 w-6 h-6 rounded-full border-4 border-gray-900 bg-gradient-to-br ${event.color} transform -translate-x-3/4`}
                whileHover={{ scale: 1.2 }}
              >
                {event.status === 'completed' && (
                  <CheckCircle2 className="w-full h-full p-1 text-white" />
                )}
              </motion.div>

              {/* Event card */}
              <motion.div
                className={`widget-card cursor-pointer ${
                  selectedEvent === index ? 'ring-2 ring-openclaw-500' : ''
                }`}
                onClick={() => setSelectedEvent(selectedEvent === index ? null : index)}
                whileHover={{ scale: 1.01 }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="badge badge-info">{event.year} {event.quarter}</span>
                      {event.status === 'in-progress' && (
                        <span className="badge badge-warning">In Progress</span>
                      )}
                      {event.status === 'planned' && (
                        <span className="badge badge-success">Planned</span>
                      )}
                    </div>
                    <h3 className="text-lg font-semibold text-white">{event.title}</h3>
                  </div>
                  <Tag className="w-5 h-5 text-gray-500 flex-shrink-0" />
                </div>
                <p className="text-gray-400 text-sm mb-3">{event.description}</p>
                
                <div className="grid grid-cols-3 gap-2">
                  {event.milestones.map((milestone, i) => (
                    <div
                      key={i}
                      className={`flex items-center gap-1 text-xs ${
                        event.status === 'completed' ? 'text-green-400' : 'text-gray-500'
                      }`}
                    >
                      {event.status === 'completed' ? (
                        <CheckCircle2 className="w-3 h-3" />
                      ) : (
                        <Circle className="w-3 h-3" />
                      )}
                      <span className="truncate">{milestone}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Selected Event Details */}
        <motion.div
          className="lg:col-span-1"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          {selectedEvent !== null ? (
            <div className="widget-card-alt sticky top-24">
              <div className="flex items-center gap-2 mb-4">
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${timelineEvents[selectedEvent].color} flex items-center justify-center`}>
                  <Rocket className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="badge badge-info">
                    {timelineEvents[selectedEvent].year} {timelineEvents[selectedEvent].quarter}
                  </span>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">
                {timelineEvents[selectedEvent].title}
              </h3>
              <p className="text-gray-400 text-sm mb-6">
                {timelineEvents[selectedEvent].description}
              </p>

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-white mb-2">Key Milestones</h4>
                  <ul className="space-y-2">
                    {timelineEvents[selectedEvent].milestones.map((milestone, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-gray-300"
                      >
                        {timelineEvents[selectedEvent].status === 'completed' ? (
                          <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                        ) : (
                          <Circle className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                        )}
                        <span>{milestone}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-gray-700">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Progress</span>
                    <span className="text-white font-semibold">
                      {timelineEvents[selectedEvent].status === 'completed' ? '100%' : 
                       timelineEvents[selectedEvent].status === 'in-progress' ? '65%' : '0%'}
                    </span>
                  </div>
                  <div className="mt-2 h-2 bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${timelineEvents[selectedEvent].color}`}
                      initial={{ width: 0 }}
                      animate={{
                        width: timelineEvents[selectedEvent].status === 'completed' ? '100%' : 
                               timelineEvents[selectedEvent].status === 'in-progress' ? '65%' : '0%'
                      }}
                      transition={{ duration: 1 }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="widget-card sticky top-24 text-center">
              <Rocket className="w-12 h-12 text-gray-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Select a Release</h3>
              <p className="text-gray-400 text-sm">
                Click on any release to view detailed information and milestones.
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
