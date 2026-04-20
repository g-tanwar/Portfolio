import { Section } from '../components/Section';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { 
  Server, Layout, Database, Cpu, Sparkles
} from 'lucide-react';

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
};

interface SkillCategory {
  title: string;
  icon: any;
  skills: string[];
  gradient: string;
  size: 'large' | 'medium' | 'small';
}

const TECHNICAL_SKILLS: SkillCategory[] = [
  {
    title: 'Frontend Architecture',
    icon: Layout,
    gradient: 'from-blue-500 to-indigo-600',
    size: 'large',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Figma', 'HTML', 'CSS']
  },
  {
    title: 'Backend Systems',
    icon: Server,
    gradient: 'from-purple-500 to-pink-600',
    size: 'medium',
    skills: ['Node.js', 'Express JS', 'Prisma ORM', 'REST APIs']
  },
  {
    title: 'Database Management',
    icon: Database,
    gradient: 'from-cyan-500 to-blue-500',
    size: 'small',
    skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'SQL']
  },
  {
    title: 'Core Engineering',
    icon: Cpu,
    gradient: 'from-orange-500 to-red-600',
    size: 'medium',
    skills: ['C++', 'Data Structures', 'API Testing', 'JavaScript']
  },
  {
    title: 'Data & Intelligence',
    icon: Sparkles,
    gradient: 'from-emerald-500 to-teal-600',
    size: 'small',
    skills: ['Python', 'GenAI', 'NumPy', 'Pandas']
  }
];

export function Skills() {
  return (
    <Section id="skills" title="Technical Arsenal">
      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 auto-rows-min"
      >
        {TECHNICAL_SKILLS.map((cat, idx) => (
          <motion.div 
            key={idx}
            variants={itemVariants}
            className={`relative group h-full ${
              cat.size === 'large' ? 'md:col-span-6 lg:col-span-6' : 
              cat.size === 'medium' ? 'md:col-span-3 lg:col-span-3' : 
              'md:col-span-3 lg:col-span-3'
            }`}
          >
            <div className="glass-card rounded-[2.5rem] p-8 h-full border-white/5 group-hover:border-white/20 transition-all duration-500 flex flex-col">
              <div className="flex items-center gap-4 mb-8">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${cat.gradient} text-white shadow-lg shadow-blue-500/10`}>
                  <cat.icon size={20} />
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">{cat.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, sIdx) => (
                  <motion.span 
                    key={sIdx}
                    whileHover={{ scale: 1.05, y: -2, backgroundColor: 'rgba(255,255,255,0.08)' }}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
              
              {/* Dynamic light effect on hover */}
              <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500"></div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
