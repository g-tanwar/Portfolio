import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Skills } from './pages/Skills';
import { Projects } from './pages/Projects';
import { Contact } from './pages/Contact';

import { CustomCursor } from './components/CustomCursor';

function App() {
  return (
    <div className="min-h-screen bg-[#030712] text-gray-50 flex flex-col font-sans relative overflow-x-hidden">
      <div className="fixed inset-0 bg-mesh opacity-30 pointer-events-none z-[-1] animate-pulse-slow"></div>
      <CustomCursor />
      <Navbar />
      <main className="flex-1">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
