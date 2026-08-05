'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageCarouselProps {
  productName: string;
  ornamentType: string;
}

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    };
  }
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export default function ImageCarousel({ productName, ornamentType }: ImageCarouselProps) {
  const [[page, direction], setPage] = useState([0, 0]);

  // Generate 4 placeholders per instructions
  const images = [1, 2, 3, 4];
  const imageIndex = Math.abs(page % images.length);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const symbol = ornamentType === 'earrings' ? '✦' :
                 ornamentType === 'rakhi' ? '🪢' :
                 ornamentType === 'necklace' ? '◇' :
                 ornamentType === 'bracelet' ? '○' :
                 ornamentType === 'rings' ? '◎' : '✧';

  const gradients = [
    'from-[var(--bg-elevated)] to-[var(--bg-card)]',
    'from-[var(--bg-card)] to-[var(--bg-primary)]',
    'from-[var(--bg-primary)] to-[var(--bg-elevated)]',
    'from-[var(--bg-elevated)] to-[var(--bg-primary)]'
  ];

  return (
    <div className="relative w-full aspect-[4/3] lg:aspect-[3/4] lg:max-h-[600px] overflow-hidden bg-[var(--bg-elevated)] rounded-2xl group flex items-center justify-center">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
          className={`absolute inset-0 w-full h-full flex items-center justify-center bg-gradient-to-br ${gradients[imageIndex]}`}
        >
          <span className="text-9xl opacity-30 select-none text-[var(--text-primary)]">{symbol}</span>
        </motion.div>
      </AnimatePresence>

      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[var(--bg-card)]/80 backdrop-blur-sm border border-[var(--border)] flex items-center justify-center text-[var(--text-primary)] md:opacity-0 md:group-hover:opacity-100 transition-opacity z-10 hover:scale-110 hover:border-[var(--accent-primary)]"
        onClick={() => paginate(-1)}
        aria-label="Previous image"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[var(--bg-card)]/80 backdrop-blur-sm border border-[var(--border)] flex items-center justify-center text-[var(--text-primary)] md:opacity-0 md:group-hover:opacity-100 transition-opacity z-10 hover:scale-110 hover:border-[var(--accent-primary)]"
        onClick={() => paginate(1)}
        aria-label="Next image"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              const newDirection = idx > imageIndex ? 1 : -1;
              setPage([page + (idx - imageIndex), newDirection]);
            }}
            className={`w-2 h-2 rounded-full transition-all ${
              idx === imageIndex 
                ? 'bg-[var(--accent-primary)] w-5' 
                : 'bg-[var(--border)] hover:bg-[var(--text-muted)]'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
