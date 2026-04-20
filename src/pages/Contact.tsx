import { useState } from 'react';
import { Section } from '../components/Section';
import { Mail, MapPin, MessageSquare, Send, CheckCircle2 } from 'lucide-react';
import { FaGithub as Github, FaLinkedin as Linkedin, FaTwitter as Twitter } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <Section id="contact" title="Connect">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="space-y-12">
          <div className="space-y-6">
            <motion.h3 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-black text-white tracking-tight"
            >
              Let's build something <br/>
              <span className="text-gradient">remarkable together.</span>
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-gray-400 text-lg leading-relaxed font-light max-w-md"
            >
              I'm always open to discussing new projects, creative ideas, or opportunities in the AI and Full-Stack space.
            </motion.p>
          </div>
          
          <div className="space-y-8">
            <div className="space-y-4">
              {[
                { icon: Mail, label: 'Drop an email', value: 'gourav.tanwar2024@nst.rishihood.edu.in', href: 'mailto:gourav.tanwar2024@nst.rishihood.edu.in' },
                { icon: MessageSquare, label: 'Active on GitHub', value: '@g-tanwar', href: 'https://github.com/g-tanwar' },
                { icon: MapPin, label: 'Based in', value: 'India', href: null },
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10, backgroundColor: 'rgba(255,255,255,0.03)' }}
                  className="glass-card rounded-3xl p-6 flex items-center space-x-6 transition-all duration-300 border-white/5"
                >
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-blue-400 border border-white/10 shadow-inner">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 uppercase font-black tracking-widest mb-1">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} target="_blank" rel="noreferrer" className="text-lg text-white hover:text-blue-400 transition-colors font-bold tracking-tight">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-lg text-white font-bold tracking-tight">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex gap-4 pt-4">
               {[Github, Linkedin, Twitter].map((SocialIcon, i) => (
                 <a 
                   key={i}
                   href="#" 
                   className="w-12 h-12 rounded-2xl glass-card flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-500/50 transition-all duration-300"
                 >
                   <SocialIcon size={20} />
                 </a>
               ))}
            </div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <div className="absolute -inset-4 bg-blue-500/5 rounded-[3rem] blur-2xl group-hover:bg-blue-500/10 transition-colors pointer-events-none"></div>
          <div className="relative glass-card rounded-[3rem] p-10 border-white/10 shadow-2xl overflow-hidden min-h-[500px] flex flex-col justify-center">
            
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  onSubmit={handleSubmit}
                  className="space-y-6 relative z-10"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <label htmlFor="name" className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Your Name</label>
                      <motion.input 
                        whileFocus={{ scale: 1.01 }}
                        type="text" 
                        id="name" 
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all placeholder:text-gray-700"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div className="space-y-3">
                      <label htmlFor="email" className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Email Address</label>
                      <motion.input 
                        whileFocus={{ scale: 1.01 }}
                        type="email" 
                        id="email" 
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all placeholder:text-gray-700"
                        placeholder="name@email.com"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <label htmlFor="message" className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Message</label>
                    <motion.textarea 
                      whileFocus={{ scale: 1.01 }}
                      id="message" 
                      rows={5}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all resize-none placeholder:text-gray-700"
                      placeholder="Tell me about your project..."
                    ></motion.textarea>
                  </div>
                  
                  <motion.button 
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isSubmitting}
                    className="w-full bg-white text-gray-950 font-black py-5 rounded-2xl transition-all shadow-xl shadow-white/10 flex items-center justify-center space-x-3 group disabled:opacity-50"
                  >
                    <span className="uppercase tracking-widest text-xs">
                      {isSubmitting ? 'Sending...' : 'Send Inquiry'}
                    </span>
                    {!isSubmitting && <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                  </motion.button>
                </motion.form>
              ) : (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center space-y-6 py-10"
                >
                  <div className="w-20 h-20 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-500 mb-2">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-3xl font-black text-white tracking-tight">Message Received!</h3>
                  <p className="text-gray-400 max-w-xs leading-relaxed">
                    Thanks for reaching out, Gourav will get back to you shortly.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="text-blue-400 font-bold uppercase tracking-widest text-[10px] hover:text-white transition-colors border-b border-transparent hover:border-white/20 pb-1"
                  >
                    Send another message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
