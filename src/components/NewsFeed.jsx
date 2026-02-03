import React from 'react';
import { motion } from 'framer-motion';
import {
  Newspaper,
  Calendar,
  Tag,
  Share2,
  Heart,
  MessageCircle,
  ExternalLink,
  ArrowRight,
  Sparkles,
  Rocket,
  Users,
  Code2
} from 'lucide-react';

const newsData = [
  {
    id: 1,
    title: 'OpenClaw v2.5 Released: Enterprise Scaling Capabilities',
    excerpt: 'The latest major release brings multi-tenancy, advanced analytics, and custom model support to enterprise users.',
    content: 'We are thrilled to announce OpenClaw v2.5, our most significant release to date. This update introduces enterprise-grade scaling capabilities including multi-tenancy support, advanced analytics dashboards, and the ability to deploy custom AI models. The release also includes performance improvements reducing response times by up to 40%.',
    date: '2025-07-15',
    category: 'Release',
    author: 'OpenClaw Team',
    image: 'bg-gradient-to-br from-purple-500 to-pink-600',
    icon: Rocket,
    readTime: '5 min',
    likes: 245,
    comments: 42,
    featured: true
  },
  {
    id: 2,
    title: 'New Plugin Marketplace Launch',
    excerpt: 'Discover and share plugins created by the community. Now with over 500 plugins available.',
    content: 'The official OpenClaw Plugin Marketplace is now live! Browse, install, and rate plugins created by our vibrant community. With categories for automation, data processing, integrations, and more, there is something for everyone. Plugin developers can now publish their work and reach thousands of users.',
    date: '2025-07-10',
    category: 'Feature',
    author: 'Sarah Chen',
    image: 'bg-gradient-to-br from-blue-500 to-cyan-600',
    icon: Sparkles,
    readTime: '4 min',
    likes: 189,
    comments: 31,
    featured: true
  },
  {
    id: 3,
    title: 'Community Spotlight: How Acme Corp Uses OpenClaw',
    excerpt: 'Learn how a Fortune 500 company scaled their AI operations with OpenClaw.',
    content: 'In our latest community spotlight, we sit down with the engineering team at Acme Corp to discuss their journey implementing OpenClaw at scale. They share insights on deployment strategies, custom integrations, and lessons learned from processing over 1 million AI interactions per month.',
    date: '2025-07-05',
    category: 'Case Study',
    author: 'Mike Johnson',
    image: 'bg-gradient-to-br from-green-500 to-emerald-600',
    icon: Users,
    readTime: '8 min',
    likes: 312,
    comments: 67,
    featured: false
  },
  {
    id: 4,
    title: 'Documentation Overhaul: New Tutorials and Guides',
    excerpt: 'Completely rewritten documentation with 50+ new tutorials for beginners and advanced users.',
    content: 'We have completely overhauled our documentation platform with a fresh design, improved navigation, and over 50 new tutorials. Whether you are just getting started or building complex agent systems, you will find comprehensive guides to help you succeed.',
    date: '2025-06-28',
    category: 'Documentation',
    author: 'Documentation Team',
    image: 'bg-gradient-to-br from-orange-500 to-red-600',
    icon: Code2,
    readTime: '3 min',
    likes: 156,
    comments: 23,
    featured: false
  },
  {
    id: 5,
    title: 'OpenClaw Summit 2025: Registration Now Open',
    excerpt: 'Join us for the biggest OpenClaw event of the year. Early bird pricing available until August.',
    content: 'The OpenClaw Summit 2025 is happening this September in San Francisco! Join developers, contributors, and enthusiasts for two days of talks, workshops, and networking. Early bird registration is now open with 40% off standard pricing.',
    date: '2025-06-20',
    category: 'Event',
    author: 'Events Team',
    image: 'bg-gradient-to-br from-indigo-500 to-purple-600',
    icon: Calendar,
    readTime: '2 min',
    likes: 423,
    comments: 89,
    featured: true
  },
  {
    id: 6,
    title: 'Performance Update: 50% Faster Code Execution',
    excerpt: 'Optimizations to the code executor plugin reduce execution time by half.',
    content: 'Our engineering team has been hard at work optimizing the code execution pipeline. With this update, users can expect up to 50% faster code execution for most workloads. The improvements are automatic and require no changes to existing agents.',
    date: '2025-06-15',
    category: 'Performance',
    author: 'Performance Team',
    image: 'bg-gradient-to-br from-teal-500 to-cyan-600',
    icon: Sparkles,
    readTime: '4 min',
    likes: 201,
    comments: 38,
    featured: false
  }
];

const categories = ['All', 'Release', 'Feature', 'Case Study', 'Documentation', 'Event', 'Performance'];

export default function NewsFeed() {
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredNews = selectedCategory === 'All'
    ? newsData
    : newsData.filter(news => news.category === selectedCategory);

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <h2 className="section-title">
          <Newspaper className="w-6 h-6 text-openclaw-400" />
          Latest News
        </h2>

        {/* Category Filter */}
        <div className="flex gap-2 overflow-x-auto pb-2">
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
        {/* Featured Post */}
        {filteredNews.filter(n => n.featured).slice(0, 1).map((news) => (
          <motion.div
            key={news.id}
            className="lg:col-span-2 widget-card-alt overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className={`h-48 ${news.image} relative overflow-hidden`}>
              <div className="absolute inset-0 bg-black/30" />
              <news.icon className="absolute bottom-4 right-4 w-16 h-16 text-white/20" />
              <div className="absolute top-4 left-4">
                <span className="badge badge-success">Featured</span>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="badge badge-info">{news.category}</span>
                <span className="text-sm text-gray-400">•</span>
                <div className="flex items-center gap-1 text-sm text-gray-400">
                  <Calendar className="w-3 h-3" />
                  {news.date}
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3 hover:text-openclaw-400 transition-colors cursor-pointer">
                {news.title}
              </h3>
              
              <p className="text-gray-300 mb-4 line-clamp-2">{news.excerpt}</p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1 text-sm text-gray-400">
                    <MessageCircle className="w-4 h-4" />
                    {news.comments}
                  </div>
                  <div className="flex items-center gap-1 text-sm text-gray-400">
                    <Heart className="w-4 h-4" />
                    {news.likes}
                  </div>
                  <div className="text-sm text-gray-400">
                    {news.readTime} read
                  </div>
                </div>
                <motion.button
                  className="flex items-center gap-2 text-openclaw-400 hover:text-openclaw-300 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Trending Topics */}
        <motion.div
          className="widget-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h3 className="text-lg font-semibold text-white mb-4">Trending Topics</h3>
          <div className="space-y-3">
            {[
              { tag: '#OpenClaw25', count: '1.2K' },
              { tag: '#AI Agents', count: '856' },
              { tag: '#Automation', count: '642' },
              { tag: '#Enterprise', count: '523' },
              { tag: '#PluginDev', count: '412' },
            ].map((topic, index) => (
              <motion.button
                key={topic.tag}
                className="w-full flex items-center justify-between p-3 bg-gray-900/50 rounded-lg hover:bg-gray-800/50 transition-colors text-left"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center gap-2">
                  <Tag className="w-4 h-4 text-openclaw-400" />
                  <span className="text-white text-sm">{topic.tag}</span>
                </div>
                <span className="text-gray-400 text-xs">{topic.count}</span>
              </motion.button>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-gray-700">
            <h4 className="text-sm font-semibold text-white mb-3">Subscribe to Newsletter</h4>
            <p className="text-xs text-gray-400 mb-3">Get the latest updates delivered to your inbox.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-openclaw-500"
              />
              <motion.button
                className="px-4 py-2 bg-openclaw500 hover:bg-openclaw-600 text-white rounded-lg text-sm transition-colors bg-openclaw-500"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Join
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* News Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {filteredNews.filter(n => !n.featured).map((news, index) => (
          <motion.article
            key={news.id}
            className="widget-card cursor-pointer hover:border-openclaw-500/30 transition-all"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.05 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className={`h-32 ${news.image} rounded-lg mb-4 relative overflow-hidden`}>
              <news.icon className="absolute bottom-2 right-2 w-8 h-8 text-white/20" />
            </div>

            <div className="flex items-center gap-2 mb-2">
              <span className="badge badge-info">{news.category}</span>
              <div className="flex items-center gap-1 text-xs text-gray-400">
                <Calendar className="w-3 h-3" />
                {news.date}
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">
              {news.title}
            </h3>
            
            <p className="text-gray-400 text-sm mb-4 line-clamp-2">
              {news.excerpt}
            </p>

            <div className="flex items-center justify-between pt-3 border-t border-gray-700">
              <div className="flex items-center gap-3 text-xs text-gray-400">
                <div className="flex items-center gap-1">
                  <Heart className="w-3 h-3" />
                  {news.likes}
                </div>
                <div className="flex items-center gap-1">
                  <MessageCircle className="w-3 h-3" />
                  {news.comments}
                </div>
                <span>{news.readTime}</span>
              </div>
              <motion.button
                className="p-2 text-gray-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ExternalLink className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Load More */}
      <motion.div
        className="flex justify-center mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <motion.button
          className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg font-medium flex items-center gap-2 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Load More Articles
          <ArrowRight className="w-4 h-4" />
        </motion.button>
      </motion.div>
    </div>
  );
}
