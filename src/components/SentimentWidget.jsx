import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Smile, 
  Meh, 
  Frown, 
  TrendingUp, 
  TrendingDown,
  Activity,
  Clock,
  BarChart3,
  Target
} from 'lucide-react';

const sentimentData = {
  overall: {
    score: 0.78,
    label: 'Very Positive',
    change: +0.05
  },
  categories: [
    { name: 'Documentation', score: 0.85, change: +0.03 },
    { name: 'Performance', score: 0.72, change: +0.07 },
    { name: 'Community', score: 0.81, change: +0.02 },
    { name: 'Bugs', score: 0.65, change: -0.04 },
  ],
  timeline: [
    { time: 'Jan', positive: 0.65, neutral: 0.20, negative: 0.15 },
    { time: 'Feb', positive: 0.70, neutral: 0.18, negative: 0.12 },
    { time: 'Mar', positive: 0.72, neutral: 0.17, negative: 0.11 },
    { time: 'Apr', positive: 0.75, neutral: 0.15, negative: 0.10 },
    { time: 'May', positive: 0.78, neutral: 0.14, negative: 0.08 },
  ]
};

export default function SentimentWidget() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const getSentimentColor = (score) => {
    if (score >= 0.7) return 'text-green-400';
    if (score >= 0.5) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getSentimentBg = (score) => {
    if (score >= 0.7) return 'bg-green-500/20 border-green-500/30';
    if (score >= 0.5) return 'bg-yellow-500/20 border-yellow-500/30';
    return 'bg-red-500/20 border-red-500/30';
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="section-title">
          <Activity className="w-6 h-6 text-openclaw-400" />
          Sentiment Analysis
        </h2>
        <motion.button
          className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg text-sm flex items-center gap-2 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Clock className="w-4 h-4" />
          Last 30 Days
        </motion.button>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Overall Sentiment */}
        <motion.div 
          className="widget-card-alt lg:col-span-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-1">Overall Sentiment</h3>
              <p className="text-sm text-gray-400">Based on user feedback, reviews, and community discussions</p>
            </div>
            <div className={`flex items-center gap-2 px-4 py-2 rounded-lg border ${getSentimentBg(sentimentData.overall.score)}`}>
              {sentimentData.overall.score >= 0.7 ? (
                <Smile className="w-5 h-5 text-green-400" />
              ) : sentimentData.overall.score >= 0.5 ? (
                <Meh className="w-5 h-5 text-yellow-400" />
              ) : (
                <Frown className="w-5 h-5 text-red-400" />
              )}
              <span className="font-semibold text-white">{sentimentData.overall.label}</span>
            </div>
          </div>

          {/* Sentiment Gauge */}
          <div className="relative h-32 mb-6">
            <div className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-full"></div>
            <motion.div
              className="absolute bottom-0 h-2 bg-white rounded-full shadow-lg"
              style={{ width: `${sentimentData.overall.score * 100}%` }}
              initial={{ width: 0 }}
              animate={{ width: `${sentimentData.overall.score * 100}%` }}
              transition={{ duration: 1, delay: 0.5 }}
            />
            <motion.div
              className="absolute bottom-2 w-4 h-4 bg-white rounded-full shadow-xl"
              style={{ left: `calc(${sentimentData.overall.score * 100}% - 8px)` }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            />
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
              <div className="text-5xl font-bold text-white">
                {(sentimentData.overall.score * 100).toFixed(0)}%
              </div>
              <div className="text-center text-gray-400 text-sm">Positive Sentiment</div>
            </div>
          </div>

          {/* Change indicator */}
          <div className="flex items-center gap-2">
            {sentimentData.overall.change >= 0 ? (
              <>
                <TrendingUp className="w-5 h-5 text-green-400" />
                <span className="text-green-400 font-medium">
                  +{(sentimentData.overall.change * 100).toFixed(1)}%
                </span>
                <span className="text-gray-400 text-sm">vs last month</span>
              </>
            ) : (
              <>
                <TrendingDown className="w-5 h-5 text-red-400" />
                <span className="text-red-400 font-medium">
                  {(sentimentData.overall.change * 100).toFixed(1)}%
                </span>
                <span className="text-gray-400 text-sm">vs last month</span>
              </>
            )}
          </div>
        </motion.div>

        {/* Category Breakdown */}
        <motion.div 
          className="widget-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h3 className="text-lg font-semibold text-white mb-4">Category Breakdown</h3>
          <div className="space-y-4">
            {sentimentData.categories.map((category, index) => (
              <motion.div
                key={category.name}
                className="p-3 bg-gray-900/50 rounded-lg hover:bg-gray-800/50 transition-colors cursor-pointer"
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedCategory(category.name === selectedCategory ? null : category.name)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-white">{category.name}</span>
                  <span className={`text-sm font-bold ${getSentimentColor(category.score)}`}>
                    {(category.score * 100).toFixed(0)}%
                  </span>
                </div>
                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full ${category.score >= 0.7 ? 'bg-green-500' : category.score >= 0.5 ? 'bg-yellow-500' : 'bg-red-500'}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${category.score * 100}%` }}
                    transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                  />
                </div>
                <div className="flex items-center gap-1 mt-1">
                  {category.change >= 0 ? (
                    <TrendingUp className="w-3 h-3 text-green-400" />
                  ) : (
                    <TrendingDown className="w-3 h-3 text-red-400" />
                  )}
                  <span className={`text-xs ${category.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                    {category.change >= 0 ? '+' : ''}{(category.change * 100).toFixed(1)}%
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Timeline Chart */}
      <motion.div 
        className="widget-card mt-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-white">Sentiment Trends</h3>
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-gray-400">Positive</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
              <span className="text-gray-400">Neutral</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <span className="text-gray-400">Negative</span>
            </div>
          </div>
        </div>

        <div className="h-64 flex items-end justify-between gap-4">
          {sentimentData.timeline.map((data, index) => (
            <motion.div
              key={data.time}
              className="flex-1 flex flex-col items-center gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <div className="w-full flex gap-1 h-48 items-end">
                <motion.div
                  className="flex-1 bg-green-500 rounded-t-md transition-all hover:bg-green-400"
                  style={{ height: `${data.positive * 100}%` }}
                  whileHover={{ opacity: 0.8 }}
                />
                <motion.div
                  className="flex-1 bg-gray-500 rounded-t-md transition-all hover:bg-gray-400"
                  style={{ height: `${data.neutral * 100}%` }}
                  whileHover={{ opacity: 0.8 }}
                />
                <motion.div
                  className="flex-1 bg-red-500 rounded-t-md transition-all hover:bg-red-400"
                  style={{ height: `${data.negative * 100}%` }}
                  whileHover={{ opacity: 0.8 }}
                />
              </div>
              <span className="text-sm text-gray-400">{data.time}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Key Insights */}
      <motion.div 
        className="grid md:grid-cols-3 gap-4 mt-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="widget-card flex items-start gap-3">
          <Target className="w-8 h-8 text-green-400 flex-shrink-0" />
          <div>
            <h4 className="font-semibold text-white mb-1">Documentation</h4>
            <p className="text-sm text-gray-400">Users praise clear guides and comprehensive docs</p>
          </div>
        </div>
        <div className="widget-card flex items-start gap-3">
          <Activity className="w-8 h-8 text-openclaw-400 flex-shrink-0" />
          <div>
            <h4 className="font-semibold text-white mb-1">Performance</h4>
            <p className="text-sm text-gray-400">Consistent improvements in response times</p>
          </div>
        </div>
        <div className="widget-card flex items-start gap-3">
          <BarChart3 className="w-8 h-8 text-yellow-400 flex-shrink-0" />
          <div>
            <h4 className="font-semibold text-white mb-1">Bug Reports</h4>
            <p className="text-sm text-gray-400">Quick resolution of reported issues</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
