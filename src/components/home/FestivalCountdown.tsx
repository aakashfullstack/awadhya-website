'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { upcomingFestival } from '@/lib/mock-data';

export default function FestivalCountdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    if (!upcomingFestival) return;
    
    const festivalDate = new Date(upcomingFestival.date).getTime();
    
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = festivalDate - now;
      
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      
      if (days <= 30 && difference > 0) {
        setIsVisible(true);
        setTimeLeft({
          days: days,
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        setIsVisible(false);
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    
    return () => clearInterval(timer);
  }, []);

  if (!isMounted || !isVisible || !upcomingFestival) return null;

  return (
    <section className="relative overflow-hidden w-full">
      {/* Black base with cream design woven in */}
      <div className="absolute inset-0 bg-[var(--bg-dark)] -z-10" />
      <div className="absolute inset-0 chikankari-overlay opacity-[0.05] -z-10" />
      {/* Gold accent borders */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[var(--accent-primary)] to-transparent" />
      
      <div className="container mx-auto px-4 py-6 md:py-8 text-center flex flex-col items-center">
        <h2 className="font-display text-2xl md:text-3xl text-[var(--text-on-dark)] mb-1">
          {upcomingFestival.name}
        </h2>
        <p className="font-devanagari text-lg text-[var(--accent-primary)] mb-4">
          {upcomingFestival.nameDevanagari}
        </p>
        
        <div className="flex items-center justify-center space-x-2 md:space-x-4 mb-4">
          <TimeBox value={timeLeft.days} label="Days" />
          <TimeBox value={timeLeft.hours} label="Hours" />
          <TimeBox value={timeLeft.minutes} label="Mins" />
          <TimeBox value={timeLeft.seconds} label="Secs" />
        </div>
        
        <p className="font-body italic text-[var(--text-muted-on-dark)] mb-4">
          "Handcrafted rakhis, made with a mother's love"
        </p>
        
        <Link 
          href={upcomingFestival.ctaHref}
          className="bg-[var(--accent-primary)] text-[var(--bg-primary)] px-8 py-3 rounded-full font-semibold hover:bg-[var(--accent-primary-hover)] transition-colors inline-block"
        >
          {upcomingFestival.ctaText}
        </Link>
      </div>
      
      {/* Bottom gold accent border */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[var(--accent-primary)] to-transparent" />
    </section>
  );
}

function TimeBox({ value, label }: { value: number; label: string }) {
  return (
    <div className="bg-[var(--bg-dark-card)] backdrop-blur rounded-xl px-4 py-3 min-w-[70px] md:min-w-[90px] shadow-sm border border-[var(--bg-primary)]/20">
      <div className="font-display text-3xl text-[var(--text-on-dark)] mb-1">
        {value.toString().padStart(2, '0')}
      </div>
      <div className="text-[10px] md:text-xs uppercase tracking-wider text-[var(--text-muted-on-dark)] font-medium">
        {label}
      </div>
    </div>
  );
}
