import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Education from './sections/Education';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './index.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, // animation should happen every time while scrolling down
      mirror: true, // elements should animate out while scrolling past them
    });
  }, []);

  return (
    <div className="bg-slate-900 text-white min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
