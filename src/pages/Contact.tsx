import { Section } from '../components/Section';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { motion } from 'framer-motion';

export function Contact() {
  return (
    <Section id="contact" title="Get In Touch">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="space-y-10">
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-gray-400 text-lg leading-relaxed font-light"
          >
            I'm currently looking for new opportunities. Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
          </motion.p>
          
          <div className="grid grid-cols-1 gap-6">
            {[
              { icon: Mail, label: 'Email', value: 'hello@example.com', href: 'mailto:hello@example.com' },
              { icon: Phone, label: 'Phone', value: '+1 (234) 567-890', href: 'tel:+1234567890' },
              { icon: MapPin, label: 'Location', value: 'San Francisco, CA', href: null },
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 10, backgroundColor: 'rgba(255,255,255,0.05)' }}
                className="glass-card rounded-2xl p-6 flex items-center space-x-6 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400">
                  <item.icon size={24} />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-1">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="text-gray-200 hover:text-blue-400 transition-colors font-medium">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-gray-200 font-medium">{item.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card rounded-[2rem] p-10 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -tr-1/2"></div>
          <form className="space-y-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <label htmlFor="name" className="text-xs font-black text-gray-500 uppercase tracking-widest pl-1">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-gray-700"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-3">
                <label htmlFor="email" className="text-xs font-black text-gray-500 uppercase tracking-widest pl-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-gray-700"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div className="space-y-3">
              <label htmlFor="subject" className="text-xs font-black text-gray-500 uppercase tracking-widest pl-1">Subject</label>
              <input 
                type="text" 
                id="subject" 
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-gray-700"
                placeholder="Project Collaboration"
              />
            </div>
            
            <div className="space-y-3">
              <label htmlFor="message" className="text-xs font-black text-gray-500 uppercase tracking-widest pl-1">Message</label>
              <textarea 
                id="message" 
                rows={4}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none placeholder:text-gray-700"
                placeholder="Hi, I'd like to talk about..."
              ></textarea>
            </div>
            
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="button"
              className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-5 rounded-2xl transition-all shadow-xl shadow-blue-500/20 flex items-center justify-center space-x-3 group"
            >
              <span>Send Message</span>
              <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </motion.button>
          </form>
        </motion.div>
      </div>
    </Section>
  );
}
