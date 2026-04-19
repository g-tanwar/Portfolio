import { Section } from '../components/Section';
import { ExternalLink } from 'lucide-react';
import { FaGithub as Github } from 'react-icons/fa';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  show: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
  image: string;
}

const PROJECTS: Project[] = [
  {
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce solution with Redux state management, Stripe payment integration, and a complete admin dashboard.',
    tech: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
    github: '#',
    live: '#',
    image: '/project-preview.png',
  },
  {
    title: 'Real-time Chat App',
    description: 'A responsive chat application supporting real-time messaging, file sharing, and online status indicators using WebSockets.',
    tech: ['Next.js', 'Socket.io', 'PostgreSQL', 'Prisma'],
    github: '#',
    live: '#',
    image: '/project-preview.png',
  },
  {
    title: 'Task Management System',
    description: 'A Kanban-style task manager allowing users to organize workflows. Includes drag-and-drop functionality and team collaboration.',
    tech: ['Vue.js', 'Firebase', 'Vuex', 'SCSS'],
    github: '#',
    live: '#',
    image: '/project-preview.png',
  }
];

export function Projects() {
  return (
    <Section id="projects" title="Featured Work">
      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {PROJECTS.map((project, index) => (
          <motion.div 
            key={index} 
            variants={itemVariants}
            whileHover={{ y: -10 }}
            className="glass-card rounded-3xl overflow-hidden flex flex-col group transition-all duration-500"
          >
            <div className="relative h-64 overflow-hidden">
              <div className="absolute inset-0 bg-blue-600/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
              />
              <motion.div 
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 flex items-center justify-center z-20 bg-black/40 backdrop-blur-sm transition-opacity duration-500"
              >
                 <div className="flex space-x-4">
                    <motion.a 
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.github} 
                      className="p-3 rounded-full bg-white/10 hover:bg-blue-600 text-white transition-all transform"
                    >
                      <Github size={20} />
                    </motion.a>
                    <motion.a 
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.live} 
                      className="p-3 rounded-full bg-white/10 hover:bg-blue-600 text-white transition-all transform"
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                 </div>
              </motion.div>
            </div>
            
            <div className="p-8 flex flex-col flex-1">
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-gray-400 text-sm leading-relaxed mb-8">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tech: string, i: number) => (
                  <span 
                    key={i} 
                    className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-blue-400 bg-blue-400/5 border border-blue-400/10 rounded-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
