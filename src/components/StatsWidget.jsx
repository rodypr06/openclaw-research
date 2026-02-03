import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Activity, Zap, Cpu, Clock } from 'lucide-react';
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const performanceData = [
  { time: '00:00', requests: 120, latency: 45 },
  { time: '04:00', requests: 80, latency: 38 },
  { time: '08:00', requests: 250, latency: 52 },
  { time: '12:00', requests: 380, latency: 65 },
  { time: '16:00', requests: 420, latency: 58 },
  { time: '20:00', requests: 350, latency: 48 },
  { time: '24:00', requests: 180, latency: 42 }
];

const skillUsageData = [
  { name: 'Browser', value: 35 },
  { name: 'Search', value: 28 },
  { name: 'Code', value: 18 },
  { name: 'System', value: 12 },
  { name: 'Other', value: 7 }
];

const StatCard = ({ icon, label, value, unit, trend }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="glass-card p-6"
  >
    <div className="flex items-center justify-between mb-4">
      <div className="p-3 bg-openclaw-primary/20 rounded-lg text-openclaw-primary">
        {icon}
      </div>
      {trend && (
        <span className={`text-sm font-medium ${trend > 0 ? 'text-green-400' : 'text-red-400'}`}>
          {trend > 0 ? '↑' : '↓'} {Math.abs(trend)}%
        </span>
      )}
    </div>
    <h3 className="text-3xl font-bold mb-1">
      {value}
      <span className="text-lg text-gray-400 ml-1">{unit}</span>
    </h3>
    <p className="text-gray-400">{label}</p>
  </motion.div>
);

function StatsWidget() {
  const [liveRequests, setLiveRequests] = useState(0);
  const [liveLatency, setLiveLatency] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveRequests(Math.floor(Math.random() * 50) + 300);
      setLiveLatency(Math.floor(Math.random() * 20) + 40);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-6">
      <div className="glass-card p-6">
        <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
          <Activity className="w-6 h-6 text-openclaw-primary" />
          Live Statistics
        </h2>
        <p className="text-gray-400 mb-6">Real-time metrics from the OpenClaw system</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard
            icon={<Zap className="w-5 h-5" />}
            label="Total Requests"
            value={8423}
            unit=""
            trend={12}
          />
          <StatCard
            icon={<Activity className="w-5 h-5" />}
            label="Active Agents"
            value={4}
            unit="/ 6"
            trend={0}
          />
          <StatCard
            icon={<Cpu className="w-5 h-5" />}
            label="Avg Latency"
            value={liveLatency}
            unit="ms"
            trend={-8}
          />
          <StatCard
            icon={<Clock className="w-5 h-5" />}
            label="Uptime"
            value={5}
            unit="days"
            trend={0}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="glass-card p-6"
        >
          <h3 className="text-lg font-semibold mb-4">Request Volume (24h)</h3>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
              <XAxis dataKey="time" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'rgba(15, 23, 42, 0.9)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '8px'
                }}
              />
              <Area
                type="monotone"
                dataKey="requests"
                stroke="#6366f1"
                fill="#6366f1"
                fillOpacity={0.3}
              />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="glass-card p-6"
        >
          <h3 className="text-lg font-semibold mb-4">Response Latency (24h)</h3>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
              <XAxis dataKey="time" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'rgba(15, 23, 42, 0.9)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '8px'
                }}
              />
              <Line
                type="monotone"
                dataKey="latency"
                stroke="#10b981"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card p-6"
      >
        <h3 className="text-lg font-semibold mb-4">Skill Usage Distribution</h3>
        <div className="space-y-3">
          {skillUsageData.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-300">{skill.name}</span>
                <span className="text-gray-400">{skill.value}%</span>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.value}%` }}
                  transition={{ duration: 1, delay: skillUsageData.indexOf(skill) * 0.1 }}
                  className="h-full bg-gradient-to-r from-openclaw-primary to-openclaw-secondary rounded-full"
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <div className="glass-card p-4 bg-openclaw-primary/10 border-openclaw-primary/20">
        <p className="text-sm text-gray-300">
          <span className="text-openclaw-primary font-semibold">ℹ️ Live Demo:</span> Statistics are simulated for demonstration purposes. 
          In production, this would connect to the actual OpenClaw metrics endpoint.
        </p>
      </div>
    </div>
  );
}

export default StatsWidget;
