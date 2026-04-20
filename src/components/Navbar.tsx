import { useState, useEffect } from 'react';
import { Menu, X, Mail } from 'lucide-react';
import { FaGithub as Github, FaLinkedin as Linkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Active section tracking
      const sections = NAV_LINKS.map(link => link.href.substring(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className={`transition-all duration-500 rounded-2xl ${
          isScrolled ? 'glass-card px-6 py-2' : 'px-0 py-0'
        }`}>
          <div className="flex justify-between items-center h-12">
            <div className="flex-shrink-0">
              <a href="#home" className="text-2xl font-bold tracking-tighter text-gradient">
                DEV.
              </a>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {NAV_LINKS.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <motion.a
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.05)' }}
                    whileTap={{ scale: 0.95 }}
                    key={item.name}
                    href={item.href}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      isActive 
                        ? 'text-white bg-blue-500/10' 
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {item.name}
                  </motion.a>
                );
              })}
            </div>

            <div className="hidden md:flex items-center space-x-4 border-l border-white/10 ml-4 pl-4">
              <motion.a 
                whileHover={{ y: -2, color: '#fff' }}
                href="https://github.com/g-tanwar" target="_blank" rel="noreferrer" className="text-gray-400 transition-colors"
              >
                <Github size={20} />
              </motion.a>
              <motion.a 
                whileHover={{ y: -2, color: '#fff' }}
                href="https://linkedin.com/in/gourav-tanwar" target="_blank" rel="noreferrer" className="text-gray-400 transition-colors"
              >
                <Linkedin size={20} />
              </motion.a>
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-300 hover:text-white p-2 rounded-lg bg-white/5"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full transition-all duration-300 transform ${
        isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none'
      } px-4 pt-2`}>
        <div className="glass-card rounded-2xl overflow-hidden p-2">
          {NAV_LINKS.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-3 rounded-xl text-base font-medium text-gray-300 hover:text-white hover:bg-white/5"
            >
              {item.name}
            </a>
          ))}
          <div className="flex justify-around py-4 border-t border-white/10 mt-2">
            <a href="https://github.com/g-tanwar" target="_blank" rel="noreferrer" className="p-3 rounded-xl bg-white/5 text-gray-400 hover:text-blue-400"><Github size={24} /></a>
            <a href="https://linkedin.com/in/gourav-tanwar" target="_blank" rel="noreferrer" className="p-3 rounded-xl bg-white/5 text-gray-400 hover:text-blue-400"><Linkedin size={24} /></a>
            <a href="#" className="p-3 rounded-xl bg-white/5 text-gray-400 hover:text-blue-400"><Mail size={24} /></a>
          </div>
        </div>
      </div>
    </header>
  );
}
