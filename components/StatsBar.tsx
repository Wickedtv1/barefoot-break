'use client';

import { useState, useEffect, useRef } from 'react';

interface Stat {
  number: number;
  suffix?: string;
  label: string;
  icon: string;
}

const stats: Stat[] = [
  { number: 10, suffix: '+', label: 'Years Experience', icon: '⭐' },
  { number: 500, suffix: '+', label: 'Happy Surfers', icon: '🏄' },
  { number: 7, suffix: '', label: 'Weekly Tours', icon: '🌊' },
  { number: 100, suffix: '%', label: 'Local Guides', icon: '🇲🇽' },
];

function AnimatedNumber({ target, suffix = '', duration = 2000 }: { target: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Easing function
      const easeOutQuad = (t: number) => t * (2 - t);
      const easedProgress = easeOutQuad(progress);

      setCount(Math.floor(easedProgress * target));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [target, duration]);

  return (
    <span>
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function StatsBar() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <section
      ref={ref}
      className="py-16 bg-gradient-to-r from-amber-brand via-gold-brand to-amber-brand"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center transform transition-all duration-500 hover:scale-110"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className="text-5xl mb-2">{stat.icon}</div>
              <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2">
                {isVisible ? (
                  <AnimatedNumber target={stat.number} suffix={stat.suffix} />
                ) : (
                  <span>{stat.suffix ? `0${stat.suffix}` : '0'}</span>
                )}
              </div>
              <div className="text-sm md:text-base text-sand-brand font-semibold uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
