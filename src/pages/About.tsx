import { Section } from '../components/Section';
import { Code2, Server, MonitorSmartphone, Database } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
}

const SERVICES: Service[] = [
  {
    title: 'Frontend Development',
    description: 'Building responsive, accessible, and highly interactive user interfaces using React and modern CSS.',
    icon: MonitorSmartphone,
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Backend Architecture',
    description: 'Designing scalable APIs and microservices with Node.js, Express, and PostgreSQL.',
    icon: Server,
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Clean Code',
    description: 'Writing maintainable, well-documented, and testable code following best practices.',
    icon: Code2,
    gradient: 'from-orange-500 to-red-500',
  },
  {
    title: 'Database Management',
    description: 'Optimizing schemas, queries, and data storage for optimal application performance.',
    icon: Database,
    gradient: 'from-green-500 to-emerald-500',
  }
];

export function About() {
  return (
    <Section id="about" title="About Me">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        <div className="space-y-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="prose prose-invert max-w-none text-gray-400 text-lg leading-relaxed"
          >
            <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-white first-letter:mr-3 first-letter:float-left">
              I'm a dedicated software engineer with a passion for building robust web applications. With multiple years of experience across the stack, I enjoy bridging the gap between design and engineering.
            </p>
            <p>
              My journey into programming started with curiosity about how the web works, which quickly blossomed into a professional career. When I'm not writing code, you can find me contributing to open-source projects or enjoying a good cup of coffee.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex gap-10 py-6 border-y border-white/5"
          >
            <div>
              <div className="text-3xl font-bold text-white">5+</div>
              <div className="text-xs text-gray-500 uppercase tracking-widest font-bold">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">50+</div>
              <div className="text-xs text-gray-500 uppercase tracking-widest font-bold">Projects Done</div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div 
                variants={itemVariants}
                key={index} 
                whileHover={{ y: -5, backgroundColor: 'rgba(255,255,255,0.05)' }}
                className="glass-card rounded-2xl p-6 transition-colors group cursor-default"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 shadow-lg shadow-blue-500/10`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </Section>
  );
}
