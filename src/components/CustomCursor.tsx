import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export function CustomCursor() {
  const [isMobile, setIsMobile] = useState(false);
  
  const mouseX = useSpring(0, { stiffness: 500, damping: 50 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 50 });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia('(max-width: 768px)').matches);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', checkMobile);
    };
  }, [mouseX, mouseY]);

  if (isMobile) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      {/* Primary Glow */}
      <motion.div
        className="w-80 h-80 bg-blue-500/10 rounded-full blur-[100px]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
      
      {/* Center Dot */}
      <motion.div
        className="w-2 h-2 bg-blue-400 rounded-full mix-blend-screen"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
      
      {/* Outer Ring */}
      <motion.div
        className="w-10 h-10 border border-white/20 rounded-full"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
    </div>
  );
}
