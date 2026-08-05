'use client';

import React from 'react';
import { useTheme } from '@/components/providers/ThemeProvider';
import { Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isNoir = theme === 'noir';

  return (
    <button
      onClick={toggleTheme}
      className="relative flex items-center justify-center w-16 h-8 rounded-full bg-[var(--bg-secondary)] border border-[var(--border)] hover:border-[var(--accent-primary)] transition-colors duration-300 overflow-hidden min-w-[44px] min-h-[44px]"
      aria-label={`Switch to ${isNoir ? 'bloom' : 'noir'} theme`}
    >
      <div className="absolute inset-0 flex items-center justify-between px-2 w-full h-full text-[var(--text-muted)] text-[10px] font-bold uppercase tracking-wider pointer-events-none">
        <span>B</span>
        <span>N</span>
      </div>
      
      <motion.div
        className="absolute top-1 w-6 h-6 rounded-full bg-[var(--text-primary)] flex items-center justify-center shadow-sm z-10"
        animate={{
          left: isNoir ? '4px' : 'calc(100% - 28px)',
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <AnimatePresence mode="wait">
          {isNoir ? (
            <motion.div
              key="moon"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Moon className="w-3.5 h-3.5 text-[var(--bg-primary)]" />
            </motion.div>
          ) : (
            <motion.div
              key="sun"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Sun className="w-3.5 h-3.5 text-[var(--bg-primary)]" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </button>
  );
}
