import { Section } from '../components/Section';
import { motion } from 'framer-motion';
import { 
  BookOpen, Cpu, Award, 
  GraduationCap, Calendar, Star 
} from 'lucide-react';
import { FaGithub as Github } from 'react-icons/fa';

export function About() {
  const milestones = [
    {
      year: '2023 - Present',
      title: 'B.Tech in Artificial Intelligence',
      org: 'Engineering College',
      desc: 'Deep diving into neural networks, data structures, and the mathematical foundations of AI.',
      icon: GraduationCap,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      year: '2023',
      title: 'Active GitHub Contributor',
      org: '@g-tanwar',
      desc: 'Launched 4+ major projects including WeGo and DevTinder, focusing on real-time systems and UX.',
      icon: Github,
      color: 'from-purple-500 to-pink-500'
    },
    {
      year: 'Always',
      title: 'System Architecture Enthusiast',
      org: 'Self-Directed Learning',
      desc: 'Fascinated by how low-level systems interact with high-level applications to create seamless experiences.',
      icon: Cpu,
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <Section id="about" title="My Journey">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* Left Aspect: Bio & Philosophy */}
        <div className="space-y-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-black text-white tracking-tight">
              Driven by curiosity, <br/>
              <span className="text-blue-400">defined by building.</span>
            </h3>
            <div className="prose prose-invert text-gray-400 text-lg leading-relaxed max-w-none space-y-4">
              <p>
                I'm <span className="text-white font-bold">Gourav Tanwar</span>, a B.Tech 2nd-year student specializing in <span className="text-blue-400">Artificial Intelligence</span>. My fascination with technology goes beyond the surface; I strive to understand the underlying mechanics of how systems communicate and scale.
              </p>
              <p>
                As an active developer on <span className="text-white">GitHub</span>, I've successfully shipped multiple projects that solve real-world problems. I believe that great software is built at the intersection of robust backend logic and intuitive frontend design.
              </p>
            </div>

            <div className="pt-6">
               <div className="glass-card p-6 rounded-3xl border-blue-500/10 flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-400"><BookOpen size={24} /></div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Core Philosophy</h4>
                    <p className="text-sm text-gray-400">Building systems that are not just functional, but architecturally sound and future-proof.</p>
                  </div>
               </div>
            </div>
          </motion.div>

          {/* Certifications Placeholder */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-black text-white uppercase tracking-widest">Certifications</h3>
              <div className="h-px flex-1 bg-white/5 mx-6"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[1, 2].map((i) => (
                <div key={i} className="glass-card p-5 rounded-2xl border-white/5 group relative overflow-hidden">
                  <div className="absolute inset-0 bg-blue-500/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                  <div className="flex items-center gap-4 relative z-10">
                    <div className="p-3 rounded-xl bg-white/5 text-gray-500 group-hover:text-blue-400 transition-colors"><Award size={24} /></div>
                    <div>
                      <p className="text-sm font-bold text-gray-300">Google Cloud Associate</p>
                      <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest">Coming Soon</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Aspect: Timeline */}
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-transparent mb-10"></div>
          
          <div className="space-y-12 relative z-10">
            {milestones.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-start gap-8 group"
              >
                <div className={`p-4 rounded-2xl bg-gradient-to-br ${item.color} text-white shadow-xl group-hover:scale-110 transition-transform duration-500 z-10`}>
                  <item.icon size={28} />
                </div>
                
                <div className="pt-2">
                  <div className="flex items-center gap-2 mb-1">
                    <Calendar size={14} className="text-blue-400" />
                    <span className="text-[10px] font-black text-blue-400 uppercase tracking-[0.2em]">{item.year}</span>
                  </div>
                  <h3 className="text-xl font-black text-white group-hover:text-blue-400 transition-colors">{item.title}</h3>
                  <p className="text-sm font-bold text-gray-500 mb-2 uppercase tracking-wide">{item.org}</p>
                  <p className="text-gray-400 font-light leading-relaxed max-w-md">{item.desc}</p>
                  
                  {idx === 1 && (
                    <div className="mt-4 flex gap-2">
                      {[1, 2, 3, 4].map(i => (
                        <div key={i} className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" style={{ animationDelay: `${i * 0.2}s` }}></div>
                      ))}
                      <span className="text-[10px] text-gray-600 font-bold uppercase ml-2 tracking-tighter">Live repositories</span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Bottom Floating Skill Chip */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-10 right-0 glass-card p-6 rounded-[2.5rem] border-white/10 hidden md:block"
          >
             <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400"><Star size={20} /></div>
                <div>
                  <p className="text-xs text-gray-500 font-black uppercase tracking-widest">Next Target</p>
                  <p className="text-sm font-bold text-white">Full Stack AI Agent Architecture</p>
                </div>
             </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
