import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar
} from 'recharts';
import {
  BarChart3,
  PieChart as PieChartIcon,
  Activity,
  Globe,
  Code,
  TrendingUp,
  Download,
  RefreshCw,
  Maximize2,
  Target,
  Zap,
  Clock
} from 'lucide-react';

const performanceData = [
  { metric: 'Response Time', value: 85, benchmark: 70 },
  { metric: 'Throughput', value: 92, benchmark: 80 },
  { metric: 'Uptime', value: 99.9, benchmark: 99.5 },
  { metric: 'Accuracy', value: 94, benchmark: 85 },
  { metric: 'User Satisfaction', value: 88, benchmark: 80 },
];

const usageByPlatform = [
  { platform: 'Telegram', users: 3500, growth: 25 },
  { platform: 'Discord', users: 2100, growth: 32 },
  { platform: 'Slack', users: 890, growth: 18 },
  { platform: 'Web', users: 420, growth: 45 },
  { platform: 'API', users: 280, growth: 67 },
];

const toolUsageDistribution = [
  { name: 'Web Search', value: 28, color: '#0ea5e9' },
  { name: 'File Manager', value: 22, color: '#22c55e' },
  { name: 'Code Executor', value: 18, color: '#a855f7' },
  { name: 'Messaging', value: 15, color: '#ec4899' },
  { name: 'Browser', value: 10, color: '#f59e0b' },
  { name: 'Others', value: 7, color: '#6b7280' },
];

const weeklyActivity = [
  { day: 'Mon', requests: 4500, errors: 45, latency: 120 },
  { day: 'Tue', requests: 5200, errors: 52, latency: 115 },
  { day: 'Wed', requests: 4800, errors: 38, latency: 125 },
  { day: 'Thu', requests: 6100, errors: 61, latency: 108 },
  { day: 'Fri', requests: 5800, errors: 48, latency: 112 },
  { day: 'Sat', requests: 3200, errors: 22, latency: 135 },
  { day: 'Sun', requests: 2800, errors: 18, latency: 142 },
];

const featureAdoption = [
  { feature: 'Multi-agent', adoption: 65, satisfaction: 85 },
  { feature: 'Custom Models', adoption: 42, satisfaction: 92 },
  { feature: 'Visual Builder', adoption: 58, satisfaction: 78 },
  { feature: 'Marketplace', adoption: 71, satisfaction: 88 },
  { feature: 'Analytics', adoption: 53, satisfaction: 90 },
  { feature: 'Webhooks', adoption: 38, satisfaction: 82 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-gray-800 border border-gray-700 rounded-lg p-3 shadow-xl">
        <p className="text-white font-medium mb-2">{label}</p>
        {payload.map((entry, index) => (
          <p key={index} style={{ color: entry.color }} className="text-sm">
            {entry.name}: {entry.value}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export default function DataVisualizations() {
  const [activeChart, setActiveChart] = useState('performance');

  const chartConfigs = [
    { id: 'performance', label: 'Performance', icon: Activity },
    { id: 'platforms', label: 'Platforms', icon: Globe },
    { id: 'tools', label: 'Tools Usage', icon: BarChart3 },
    { id: 'activity', label: 'Activity', icon: TrendingUp },
    { id: 'features', label: 'Features', icon: Target },
  ];

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <h2 className="section-title">
          <BarChart3 className="w-6 h-6 text-openclaw-400" />
          Data Visualizations
        </h2>

        <div className="flex items-center gap-2">
          {chartConfigs.map((config) => (
            <motion.button
              key={config.id}
              onClick={() => setActiveChart(config.id)}
              className={`p-2 rounded-lg transition-colors ${
                activeChart === config.id
                  ? 'bg-openclaw-500 text-white'
                  : 'bg-gray-800 text-gray-400 hover:text-white'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              title={config.label}
            >
              <config.icon className="w-5 h-5" />
            </motion.button>
          ))}
          <div className="w-px h-6 bg-gray-700" />
          <motion.button
            className="p-2 text-gray-400 hover:text-white transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            title="Refresh"
          >
            <RefreshCw className="w-5 h-5" />
          </motion.button>
          <motion.button
            className="p-2 text-gray-400 hover:text-white transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            title="Download"
          >
            <Download className="w-5 h-5" />
          </motion.button>
          <motion.button
            className="p-2 text-gray-400 hover:text-white transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            title="Fullscreen"
          >
            <Maximize2 className="w-5 h-5" />
          </motion.button>
        </div>
      </div>

      {/* Performance Charts */}
      {activeChart === 'performance' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid lg:grid-cols-2 gap-6"
        >
          <div className="widget-card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">Key Metrics</h3>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Clock className="w-4 h-4" />
                Last 7 days
              </div>
            </div>
            <div className="space-y-4">
              {performanceData.map((item, index) => (
                <motion.div
                  key={item.metric}
                  className="space-y-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-300">{item.metric}</span>
                    <span className={`font-medium ${item.value >= item.benchmark ? 'text-green-400' : 'text-yellow-400'}`}>
                      {item.value}%
                    </span>
                  </div>
                  <div className="relative h-3 bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      className={`absolute h-full ${item.value >= item.benchmark ? 'bg-green-500' : 'bg-yellow-500'}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${item.value}%` }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.2 }}
                    />
                    <div
                      className="absolute h-1 bg-gray-600 rounded-full"
                      style={{ left: `${item.benchmark}%`, width: '2px' }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="widget-card">
            <h3 className="text-lg font-semibold text-white mb-4">Performance Radar</h3>
            <ResponsiveContainer width="100%" height={300}>
              <RadarChart data={performanceData}>
                <PolarGrid stroke="#374151" />
                <PolarAngleAxis dataKey="metric" stroke="#9CA3AF" tick={{ fill: '#9CA3AF', fontSize: 10 }} />
                <PolarRadiusAxis stroke="#374151" angle={90} domain={[0, 100]} tick={{ fill: '#9CA3AF', fontSize: 10 }} />
                <Radar
                  name="Current"
                  dataKey="value"
                  stroke="#0ea5e9"
                  fill="#0ea5e9"
                  fillOpacity={0.3}
                  strokeWidth={2}
                />
                <Radar
                  name="Benchmark"
                  dataKey="benchmark"
                  stroke="#22c55e"
                  fill="#22c55e"
                  fillOpacity={0.1}
                  strokeWidth={2}
                  strokeDasharray="5 5"
                />
                <Legend />
                <Tooltip content={<CustomTooltip />} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      )}

      {/* Platform Usage */}
      {activeChart === 'platforms' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="widget-card"
        >
          <h3 className="text-lg font-semibold text-white mb-4">Usage by Platform</h3>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={usageByPlatform}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="platform" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Bar dataKey="users" fill="#0ea5e9" name="Active Users" radius={[4, 4, 0, 0]} />
              <Bar dataKey="growth" fill="#22c55e" name="Growth %" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      )}

      {/* Tools Distribution */}
      {activeChart === 'tools' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid lg:grid-cols-2 gap-6"
        >
          <div className="widget-card">
            <h3 className="text-lg font-semibold text-white mb-4">Tool Usage Distribution</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={toolUsageDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {toolUsageDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="widget-card">
            <h3 className="text-lg font-semibold text-white mb-4">Top Tools Breakdown</h3>
            <div className="space-y-3">
              {toolUsageDistribution.slice(0, 4).map((tool, index) => (
                <motion.div
                  key={tool.name}
                  className="flex items-center justify-between p-3 bg-gray-900/50 rounded-lg"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: tool.color }}
                    />
                    <span className="text-white text-sm">{tool.name}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-white">{tool.value}%</div>
                    <div className="text-xs text-gray-400">{Math.round(tool.value * 245)} uses/day</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      )}

      {/* Activity Charts */}
      {activeChart === 'activity' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid lg:grid-cols-2 gap-6"
        >
          <div className="widget-card">
            <h3 className="text-lg font-semibold text-white mb-4">Weekly Requests</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={weeklyActivity}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="day" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="requests"
                  stroke="#0ea5e9"
                  strokeWidth={2}
                  name="Requests"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="widget-card">
            <h3 className="text-lg font-semibold text-white mb-4">Error Rate & Latency</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={weeklyActivity}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="day" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" yAxisId="left" />
                <YAxis stroke="#9CA3AF" yAxisId="right" orientation="right" />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Line
                  yAxisId="left"
                  type="monotone"
                  dataKey="errors"
                  stroke="#ef4444"
                  strokeWidth={2}
                  name="Errors"
                />
                <Line
                  yAxisId="right"
                  type="monotone"
                  dataKey="latency"
                  stroke="#a855f7"
                  strokeWidth={2}
                  name="Latency (ms)"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      )}

      {/* Feature Adoption */}
      {activeChart === 'features' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="widget-card"
        >
          <h3 className="text-lg font-semibold text-white mb-4">Feature Adoption & Satisfaction</h3>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={featureAdoption} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis type="number" stroke="#9CA3AF" />
              <YAxis dataKey="feature" type="category" stroke="#9CA3AF" width={100} tick={{ fill: '#9CA3AF' }} />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Bar dataKey="adoption" fill="#0ea5e9" name="Adoption %" radius={[0, 4, 4, 0]} />
              <Bar dataKey="satisfaction" fill="#22c55e" name="Satisfaction %" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      )}

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        <motion.div
          className="widget-card text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Zap className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
          <div className="text-2xl font-bold text-white">31.4K</div>
          <div className="text-xs text-gray-400">Requests/Day</div>
        </motion.div>
        <motion.div
          className="widget-card text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Target className="w-8 h-8 text-green-400 mx-auto mb-2" />
          <div className="text-2xl font-bold text-white">0.12%</div>
          <div className="text-xs text-gray-400">Error Rate</div>
        </motion.div>
        <motion.div
          className="widget-card text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Clock className="w-8 h-8 text-openclaw-400 mx-auto mb-2" />
          <div className="text-2xl font-bold text-white">124ms</div>
          <div className="text-xs text-gray-400">Avg Latency</div>
        </motion.div>
        <motion.div
          className="widget-card text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Activity className="w-8 h-8 text-purple-400 mx-auto mb-2" />
          <div className="text-2xl font-bold text-white">99.9%</div>
          <div className="text-xs text-gray-400">Uptime</div>
        </motion.div>
      </div>
    </div>
  );
}
