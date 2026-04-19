import { motion } from 'framer-motion';

interface SectionProps {
  id: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
  fullHeight?: boolean;
}

export function Section({ id, title, children, className = '', fullHeight = false }: SectionProps) {
  return (
    <section 
      id={id} 
      className={`relative w-full ${fullHeight ? 'min-h-screen flex items-center' : 'py-20'} ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.6, ease: "easeOut" }}
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
      </div>
    </section>
  );
}
