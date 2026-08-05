'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <section className="relative flex flex-col items-center justify-center pt-4 pb-2 md:pt-6 md:pb-4 overflow-hidden bg-[var(--bg-primary)]">
      {/* Pattern & Gradients */}
      <div className="absolute inset-0 chikankari-overlay pointer-events-none opacity-40 mix-blend-overlay"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--bg-elevated)_0%,transparent_70%)] opacity-60 pointer-events-none"></div>

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl mx-auto py-2"
        initial="hidden"
        animate="show"
        variants={containerVariants}
      >
        <motion.div
          variants={itemVariants}
          className="mb-4"
        >
          <Image
            src="/logo-full.jpg"
            alt="Awadhya"
            width={800}
            height={400}
            className="h-48 md:h-72 w-auto object-contain mx-auto scale-110"
            priority
          />
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="font-body text-sm md:text-base text-[var(--text-secondary)] max-w-lg mx-auto mb-4"
        >
          Handcrafted ornaments from the heart of Awadh — each piece a symbol of what makes you, you.
        </motion.p>

        <motion.div variants={itemVariants}>
          <Link
            href="#collections"
            className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--accent-primary)] text-[var(--bg-primary)] font-body font-medium text-sm transition-all duration-300 hover:shadow-[0_0_30px_var(--accent-primary)] hover:scale-105 active:scale-95"
          >
            Explore the Collections
            <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </Link>
        </motion.div>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-[var(--bg-primary)] to-transparent pointer-events-none z-10"></div>
    </section>
  );
}
