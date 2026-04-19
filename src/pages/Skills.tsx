import { Section } from '../components/Section';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

interface SkillGroup {
  category: string;
  items: string[];
}

const SKILLS: SkillGroup[] = [
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux', 'Vue.js']
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'NestJS', 'Python', 'GraphQL', 'REST APIs']
  },
  {
    category: 'Database',
    items: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'Prisma', 'Mongoose']
  },
  {
    category: 'DevOps & Tools',
    items: ['Git', 'Docker', 'AWS', 'CI/CD', 'Jest', 'Linux']
  }
];

export function Skills() {
  return (
    <Section id="skills" title="Expertise">
      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {SKILLS.map((skillGroup, index) => (
          <motion.div 
            variants={itemVariants}
            key={index} 
            whileHover={{ y: -5, backgroundColor: 'rgba(255,255,255,0.05)' }}
            className="glass-card rounded-3xl p-8 space-y-6 transition-all duration-300 group"
          >
            <h3 className="text-sm font-black text-gray-500 uppercase tracking-[0.2em] group-hover:text-blue-400 transition-colors">
              {skillGroup.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((itemValue: string, i: number) => (
                <motion.div 
                  key={i} 
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm font-medium text-gray-300 hover:border-blue-500/50 hover:text-white transition-all cursor-default"
                >
                  {itemValue}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
