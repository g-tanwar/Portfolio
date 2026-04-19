import { FaGithub as Github, FaLinkedin as Linkedin, FaTwitter as Twitter, FaInstagram as Instagram } from 'react-icons/fa';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative mt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card rounded-[2.5rem] p-12 flex flex-col items-center space-y-8">
          <div className="text-3xl font-black text-gradient">DEV.</div>
          
          <div className="flex justify-center space-x-4">
            {[
              { icon: Github, href: '#' },
              { icon: Linkedin, href: '#' },
              { icon: Twitter, href: '#' },
              { icon: Instagram, href: '#' },
            ].map((social, idx) => (
              <a 
                key={idx}
                href={social.href} 
                className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600/20 hover:border-blue-500/50 transition-all duration-300"
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>

          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>

          <p className="text-gray-500 text-sm font-medium">
            &copy; {currentYear} John Doe. Built with <span className="text-white">React 19</span> & <span className="text-blue-400">Tailwind V4</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}
