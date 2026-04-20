import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface SectionProps {
  id: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
  fullHeight?: boolean;
}

export function Section({ id, title, children, className = '', fullHeight = false }: SectionProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.95]);

  return (
    <section 
      ref={ref}
      id={id} 
      className={`relative w-full ${fullHeight ? 'min-h-screen flex items-center' : 'py-24'} ${className} overflow-hidden`}
    >
      <motion.div
        style={{ y, opacity, scale }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full parallax-el transition-all"
      >
        {title && (
          <div className="mb-16 relative">
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase italic opacity-20 absolute -top-10 -left-6 select-none uppercase">
              {title}
            </h2>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight relative z-10">
              {title}
            </h2>
            <div className="h-1.5 w-12 bg-gradient-to-r from-blue-500 to-cyan-400 mt-4 rounded-full"></div>
          </div>
        )}
        {children}
      </motion.div>
    </section>
  );
}
