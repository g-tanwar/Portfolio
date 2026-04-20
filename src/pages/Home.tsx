import { Section } from '../components/Section';
import { ArrowRight, Terminal, Code2, Brain } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import heroImg from '../assets/hero.png';

const ROLES = [
  "B.Tech 2nd Year Student",
  "AI Specialization Enthusiast",
  "Full Stack Developer",
  "React & Node.js Specialist"
];

export function Home() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const role = ROLES[roleIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting && displayText === role) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % ROLES.length);
      } else {
        setDisplayText(
          isDeleting 
            ? role.substring(0, displayText.length - 1)
            : role.substring(0, displayText.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <Section id="home" fullHeight className="bg-mesh relative overflow-hidden flex items-center justify-center">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <motion.div 
          animate={{ 
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[120px]"
        ></motion.div>
        <motion.div 
          animate={{ 
            x: [0, -40, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear", delay: 2 }}
          className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/10 rounded-full blur-[120px]"
        ></motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full max-w-7xl">
        <div className="space-y-10 text-left">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-inner"
          >
            <div className="relative">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-ping absolute"></div>
              <div className="w-2 h-2 bg-green-500 rounded-full relative"></div>
            </div>
            <span className="text-gray-300 text-sm font-medium tracking-wide">Available for Projects</span>
          </motion.div>

          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
               <h2 className="text-blue-400 font-black tracking-[0.3em] uppercase text-sm mb-2">Hello, I am</h2>
               <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.9]">
                 Gourav <br/>
                 <span className="text-gradient drop-shadow-2xl">Tanwar</span>
               </h1>
            </motion.div>

            <div className="h-10 md:h-12 flex items-center">
              <span className="text-xl md:text-2xl font-mono text-gray-400 font-light flex items-center">
                <Terminal className="mr-3 text-blue-500" size={24} />
                <span className="text-white font-medium">{displayText}</span>
                <span className="w-1.5 h-8 bg-blue-500 ml-2 animate-pulse rounded-full"></span>
              </span>
            </div>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-gray-400 max-w-lg leading-relaxed font-light"
            >
              Passionate <span className="text-white font-semibold">Full Stack Developer</span> specialized in <span className="text-blue-400">React</span> & <span className="text-blue-400">Node.js</span>. 
              Currently deep-diving into AI integrations.
            </motion.p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-5"
          >
            <motion.a 
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="#projects" 
              className="px-8 py-5 text-base font-bold text-white bg-blue-600 rounded-3xl hover:bg-blue-500 transition-all shadow-2xl shadow-blue-500/30 flex items-center group"
            >
              View Projects
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.02, y: -2, backgroundColor: 'rgba(255,255,255,0.06)' }}
              whileTap={{ scale: 0.98 }}
              href="#contact" 
              className="px-8 py-5 text-base font-bold text-gray-200 glass-card rounded-3xl transition-all border-white/10 hover:border-white/20"
            >
              Contact Me
            </motion.a>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1.2, delay: 0.2, type: "spring" }}
          className="hidden lg:block relative"
        >
          {/* Floating Skill Badges */}
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -left-10 glass-card p-4 rounded-2xl flex items-center space-x-3 z-20 border-white/20 shadow-2xl"
          >
            <div className="p-2 rounded-xl bg-blue-500/20 text-blue-400"><Code2 size={24} /></div>
            <div>
              <p className="text-[10px] uppercase font-black text-gray-500 tracking-widest">Expertise</p>
              <p className="text-sm font-bold text-white leading-tight">React.js</p>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-10 -right-10 glass-card p-4 rounded-2xl flex items-center space-x-3 z-20 border-white/20 shadow-2xl"
          >
            <div className="p-2 rounded-xl bg-purple-500/20 text-purple-400"><Brain size={24} /></div>
            <div>
              <p className="text-[10px] uppercase font-black text-gray-500 tracking-widest">Exploring</p>
              <p className="text-sm font-bold text-white leading-tight">AI & ML</p>
            </div>
          </motion.div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/50 via-purple-500/50 to-blue-500/50 rounded-[3rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-1000"></div>
            <div className="relative glass-card rounded-[3rem] p-4 aspect-[4/5] flex flex-col justify-between overflow-hidden border-white/10 group-hover:border-white/20 transition-colors shadow-inner">
               <div className="w-full h-full rounded-[2.5rem] bg-gray-900 overflow-hidden relative border border-white/5">
                  <div className="absolute inset-0 bg-blue-600/5 mix-blend-overlay"></div>
                  {/* Avatar / Profile Image */}
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <motion.img 
                      src={heroImg}
                      alt="Gourav Tanwar"
                      animate={{ y: [-10, 10, -10] }}
                      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                      className="w-[90%] max-w-[300px] object-contain drop-shadow-2xl"
                    />
                  </div>
                  {/* Abstract Shape Background */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div 
                      animate={{ 
                        rotate: 360,
                        borderRadius: ["30% 70% 70% 30% / 30% 30% 70% 70%", "60% 40% 30% 70% / 60% 30% 70% 40%", "30% 70% 70% 30% / 30% 30% 70% 70%"]
                      }}
                      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                      className="w-64 h-64 bg-gradient-to-tr from-blue-600/30 to-purple-600/30 backdrop-blur-3xl border border-white/10"
                    ></motion.div>
                  </div>
                  
                  <div className="absolute bottom-8 left-8 right-8 space-y-4">
                     <div className="flex gap-2">
                        {['JavaScript', 'React', 'Node'].map(t => (
                          <span key={t} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-[10px] text-gray-400 font-bold uppercase tracking-widest">{t}</span>
                        ))}
                     </div>
                     <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-blue-500"
                          animate={{ width: ["0%", "85%"] }}
                          transition={{ duration: 2, delay: 1 }}
                        ></motion.div>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
