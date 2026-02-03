import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import { 
  MessageSquare, 
  Users, 
  Star, 
  GitFork,
  TrendingUp,
  Heart,
  ThumbsUp,
  Eye
} from 'lucide-react';

const engagementData = [
  { month: 'Jan', users: 2500, active: 1800, contributors: 45 },
  { month: 'Feb', users: 3200, active: 2200, contributors: 52 },
  { month: 'Mar', users: 4100, active: 2800, contributors: 68 },
  { month: 'Apr', users: 5200, active: 3500, contributors: 81 },
  { month: 'May', users: 6800, active: 4500, contributors: 95 },
];

const sentimentDistribution = [
  { name: 'Very Positive', value: 45, color: '#22c55e' },
  { name: 'Positive', value: 30, color: '#86efac' },
  { name: 'Neutral', value: 15, color: '#6b7280' },
  { name: 'Negative', value: 7, color: '#fbbf24' },
  { name: 'Very Negative', value: 3, color: '#ef4444' },
];

const feedbackByCategory = [
  { category: 'Features', positive: 450, neutral: 80, negative: 25 },
  { category: 'Performance', positive: 380, neutral: 120, negative: 40 },
  { category: 'Documentation', positive: 520, neutral: 60, negative: 15 },
  { category: 'Support', positive: 320, neutral: 180, negative: 50 },
  { category: 'UI/UX', positive: 280, neutral: 200, negative: 60 },
];

const communityGrowth = [
  { week: 'W1', members: 1200, contributors: 30, commits: 85 },
  { week: 'W2', members: 1450, contributors: 38, commits: 120 },
  { week: 'W3', members: 1800, contributors: 45, commits: 165 },
  { week: 'W4', members: 2100, contributors: 52, commits: 210 },
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

export default function CommunitySentimentChart() {
  const [activeTab, setActiveTab] = useState('engagement');

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <h2 className="section-title">
          <Users className="w-6 h-6 text-openclaw-400" />
          Community Analytics
        </h2>
        
        {/* Tab buttons */}
        <div className="flex flex-wrap gap-2">
          {[
            { id: 'engagement', label: 'Engagement', icon: TrendingUp },
            { id: 'sentiment', label: 'Sentiment', icon: Heart },
            { id: 'feedback', label: 'Feedback', icon: ThumbsUp },
            { id: 'growth', label: 'Growth', icon: Star },
          ].map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors ${
                activeTab === tab.id
                  ? 'bg-openclaw-500 text-white'
                  : 'bg-gray-800 text-gray-400 hover:text-white'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <motion.div
          className="widget-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
              <Users className="w-5 h-5 text-green-400" />
            </div>
            <div>
              <div className="text-2xl font-bold text-white">6.8K</div>
              <div className="text-xs text-gray-400">Total Users</div>
            </div>
          </div>
          <div className="text-green-400 text-xs flex items-center gap-1">
            <TrendingUp className="w-3 h-3" />
            <span>+32.5% this month</span>
          </div>
        </motion.div>

        <motion.div
          className="widget-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-openclaw-500/20 rounded-lg flex items-center justify-center">
              <GitFork className="w-5 h-5 text-openclaw-400" />
            </div>
            <div>
              <div className="text-2xl font-bold text-white">95</div>
              <div className="text-xs text-gray-400">Contributors</div>
            </div>
          </div>
          <div className="text-green-400 text-xs flex items-center gap-1">
            <TrendingUp className="w-3 h-3" />
            <span>+12 this month</span>
          </div>
        </motion.div>

        <motion.div
          className="widget-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
              <Star className="w-5 h-5 text-purple-400" />
            </div>
            <div>
              <div className="text-2xl font-bold text-white">8.7K</div>
              <div className="text-xs text-gray-400">GitHub Stars</div>
            </div>
          </div>
          <div className="text-green-400 text-xs flex items-center gap-1">
            <TrendingUp className="w-3 h-3" />
            <span>+156 this week</span>
          </div>
        </motion.div>

        <motion.div
          className="widget-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center">
              <MessageSquare className="w-5 h-5 text-yellow-400" />
            </div>
            <div>
              <div className="text-2xl font-bold text-white">4.5K</div>
              <div className="text-xs text-gray-400">Discussions</div>
            </div>
          </div>
          <div className="text-green-400 text-xs flex items-center gap-1">
            <TrendingUp className="w-3 h-3" />
            <span>+234 this week</span>
          </div>
        </motion.div>
      </div>

      {/* Charts */}
      <motion.div
        className="widget-card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        {activeTab === 'engagement' && (
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">User Engagement Trends</h3>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={engagementData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="month" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Area
                  type="monotone"
                  dataKey="users"
                  stroke="#0ea5e9"
                  fill="#0ea5e9"
                  fillOpacity={0.3}
                  name="Total Users"
                />
                <Area
                  type="monotone"
                  dataKey="active"
                  stroke="#22c55e"
                  fill="#22c55e"
                  fillOpacity={0.3}
                  name="Active Users"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        )}

        {activeTab === 'sentiment' && (
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Sentiment Distribution</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={sentimentDistribution}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {sentimentDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="space-y-3">
                <h4 className="text-white font-medium">Key Insights</h4>
                {sentimentDistribution.map((item) => (
                  <div key={item.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="text-gray-300 text-sm">{item.name}</span>
                    </div>
                    <span className="text-white font-medium">{item.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'feedback' && (
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Feedback by Category</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={feedbackByCategory}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="category" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Bar dataKey="positive" stackId="a" fill="#22c55e" name="Positive" />
                <Bar dataKey="neutral" stackId="a" fill="#6b7280" name="Neutral" />
                <Bar dataKey="negative" stackId="a" fill="#ef4444" name="Negative" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        )}

        {activeTab === 'growth' && (
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Community Growth</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={communityGrowth}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="week" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="members"
                  stroke="#0ea5e9"
                  strokeWidth={2}
                  name="Members"
                />
                <Line
                  type="monotone"
                  dataKey="contributors"
                  stroke="#a855f7"
                  strokeWidth={2}
                  name="Contributors"
                />
                <Line
                  type="monotone"
                  dataKey="commits"
                  stroke="#22c55e"
                  strokeWidth={2}
                  name="Commits"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}
      </motion.div>
    </div>
  );
}
