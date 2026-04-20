import { Section } from '../components/Section';
import { ExternalLink, Code2, Globe, Rocket, Layers } from 'lucide-react';
import { FaGithub as Github } from 'react-icons/fa';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
  image: string;
  icon: any;
  gradient: string;
}

const PROJECTS: Project[] = [
  {
    title: 'WeGo',
    description: 'A community-driven student platform with district-based networking, real-time collaboration, and secure doubt-clearing districts.',
    tech: ['Next.js', 'TypeScript', 'Socket.IO', 'MongoDB', 'JWT'],
    github: 'https://github.com/g-tanwar/WeGo',
    live: 'https://we-go-seven.vercel.app/',
    image: '/wego.png',
    icon: Globe,
    gradient: 'from-blue-600 to-indigo-600',
  },
  {
    title: 'Animated Website',
    description: 'A visually stunning cosmic-themed website featuring high-performance animations, parallax effects, and smooth scroll interactions.',
    tech: ['GSAP', 'HTML', 'CSS', 'JavaScript', 'FontAwesome'],
    github: 'https://github.com/g-tanwar/Creative-1',
    live: 'https://statuesque-rugelach-89550f.netlify.app/',
    image: '/cosmos.png',
    icon: Rocket,
    gradient: 'from-purple-500 to-blue-600',
  },
  {
    title: 'EduPortal',
    description: 'Comprehensive management system featuring automated attendance, fee tracking, and academic performance monitoring with REST APIs.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    github: 'https://github.com/g-tanwar/student_managment_system',
    live: 'https://student-managment-system-eta-self.vercel.app/',
    image: '/eduportal.png',
    icon: Layers,
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    title: 'Threadly',
    description: 'High-performance chat infrastructure with dedicated channels, persistent messaging, and relational data management.',
    tech: ['Nest.js', 'Socket.IO', 'PostgreSQL', 'Sequelize', 'Redux'],
    github: 'https://github.com/g-tanwar/Chatu',
    live: 'https://chatu-eight.vercel.app/',
    image: '/threadly.png',
    icon: Code2,
    gradient: 'from-indigo-600 to-blue-500',
  }
];

export function Projects() {
  return (
    <Section id="projects" title="Showcase">
      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-10"
      >
        {PROJECTS.map((project, index) => (
          <motion.div 
            key={index} 
            variants={itemVariants}
            className="group relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-white/10 to-transparent rounded-[2.5rem] blur opacity-15 group-hover:opacity-30 transition duration-500"></div>
            <div className="relative glass-card rounded-[2.5rem] overflow-hidden flex flex-col border-white/5 group-hover:border-white/10 transition-colors duration-500">
              {/* Image Container */}
              <div className="relative h-64 sm:h-80 overflow-hidden">
                <div className="absolute inset-0 bg-gray-900/60 group-hover:bg-gray-900/40 transition-colors duration-500 z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                
                {/* Floating Badge */}
                <div className={`absolute top-6 left-6 px-4 py-2 rounded-2xl bg-gradient-to-br ${project.gradient} text-white font-bold text-xs uppercase tracking-widest z-20 shadow-xl flex items-center gap-2`}>
                  <project.icon size={14} />
                  {project.title}
                </div>

                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-20">
                  <div className="flex gap-4">
                    <motion.a 
                      whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.2)' }}
                      whileTap={{ scale: 0.9 }}
                      href={project.github} 
                      className="p-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 text-white shadow-2xl"
                    >
                      <Github size={24} />
                    </motion.a>
                    <motion.a 
                      whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.2)' }}
                      whileTap={{ scale: 0.9 }}
                      href={project.live} 
                      className="p-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 text-white shadow-2xl"
                    >
                      <Globe size={24} />
                    </motion.a>
                  </div>
                </div>
              </div>
              
              {/* Content Container */}
              <div className="p-10 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-3xl font-black text-white tracking-tight leading-none group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-2">
                    <a href={project.github} className="text-gray-500 hover:text-white transition-colors"><Github size={18} /></a>
                    <a href={project.live} className="text-gray-500 hover:text-white transition-colors"><ExternalLink size={18} /></a>
                  </div>
                </div>
                
                <p className="text-gray-400 text-lg leading-relaxed mb-8 flex-1 font-light">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-blue-400 bg-blue-400/5 rounded-xl border border-blue-400/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
