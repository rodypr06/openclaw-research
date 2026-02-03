import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Terminal as TerminalIcon, Copy, Check } from 'lucide-react';

const commands = [
  { cmd: 'openclaw status', output: '✓ OpenClaw Gateway: Running\n✓ Agent Manager: Active\n✓ Skills Loaded: 42\n✓ Uptime: 5d 12h 34m' },
  { cmd: 'openclaw agent list', output: 'ID           TYPE           STATUS\n----------------------------------------\nmain         assistant      Active\nresearch     specialist     Idle\ndev          coder          Active\nsecurity     guardian       Active' },
  { cmd: 'openclaw skill install weather', output: '→ Checking dependencies...\n✓ Dependencies satisfied\n→ Downloading skill: weather\n✓ Download complete\n→ Installing...\n✓ Skill installed successfully\n\nUsage: "What\'s the weather like?"' },
  { cmd: 'openclaw --help', output: 'OpenClaw CLI - AI Agent Framework\n\nUsage: openclaw [command] [options]\n\nCommands:\n  status     Show system status\n  agent      Manage agents\n  skill      Manage skills\n  gateway    Control gateway daemon\n  config     View/edit configuration\n  --help     Show this help message\n\nOptions:\n  -v, --verbose  Enable verbose logging\n  --profile      Use specific profile' }
];

function TerminalWidget() {
  const [history, setHistory] = useState([]);
  const [input, setInput] = useState('');
  const [copied, setCopied] = useState(false);
  const terminalRef = useRef(null);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const executeCommand = (cmd) => {
    const normalizedCmd = cmd.trim().toLowerCase();
    let output = 'Command not found. Type "openclaw --help" for available commands.';

    if (normalizedCmd === 'openclaw status') {
      output = commands[0].output;
    } else if (normalizedCmd === 'openclaw agent list') {
      output = commands[1].output;
    } else if (normalizedCmd === 'openclaw skill install weather') {
      output = commands[2].output;
    } else if (normalizedCmd === 'openclaw --help') {
      output = commands[3].output;
    } else if (normalizedCmd === 'clear') {
      setHistory([]);
      return;
    } else if (normalizedCmd === '') {
      return;
    }

    setHistory([...history, { cmd, output }]);
    setInput('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      executeCommand(input);
    }
  };

  const copyTerminal = () => {
    const text = history.map(h => `$ ${h.cmd}\n${h.output}`).join('\n\n');
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const quickCommand = (cmd) => {
    setInput(cmd);
    setTimeout(() => executeCommand(cmd), 100);
  };

  return (
    <div className="glass-card p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <TerminalIcon className="w-6 h-6 text-openclaw-primary" />
          <h2 className="text-2xl font-bold">Interactive Terminal</h2>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={copyTerminal}
          className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
        >
          {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
          <span className="text-sm">{copied ? 'Copied!' : 'Copy'}</span>
        </motion.button>
      </div>

      <div className="bg-black/50 rounded-xl p-4 font-mono text-sm mb-4">
        <div className="flex items-center gap-2 mb-3 text-gray-500">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
          <span className="ml-4">OpenClaw Terminal</span>
        </div>

        <div
          ref={terminalRef}
          className="h-80 overflow-y-auto mb-4 pr-2 scrollbar-thin"
        >
          {history.length === 0 && (
            <div className="text-gray-500 mb-4">
              Welcome to OpenClaw Terminal v1.0.0
              <br />
              Type <span className="text-green-400">openclaw --help</span> to get started
            </div>
          )}

          {history.map((item, idx) => (
            <div key={idx} className="mb-4">
              <div className="flex items-center gap-2 text-green-400">
                <span>$</span>
                <span className="text-white">{item.cmd}</span>
              </div>
              <pre className="text-gray-300 whitespace-pre-wrap mt-1">{item.output}</pre>
            </div>
          ))}

          <div className="flex items-center gap-2">
            <span className="text-green-400">$</span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              className="flex-1 bg-transparent outline-none text-white"
              placeholder="Type a command..."
              autoFocus
            />
          </div>
        </div>
      </div>

      <div>
        <h4 className="text-sm font-semibold text-gray-400 mb-3">Quick Commands:</h4>
        <div className="flex flex-wrap gap-2">
          {commands.map((item, idx) => (
            <motion.button
              key={idx}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => quickCommand(item.cmd)}
              className="px-3 py-1.5 bg-white/5 rounded-lg text-sm text-gray-300 hover:bg-white/10 transition-colors font-mono"
            >
              {item.cmd}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TerminalWidget;
