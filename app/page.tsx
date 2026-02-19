import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { Skills } from '../components/sections/Skills';
import { Projects } from '../components/sections/Projects';
import { Experience } from '../components/sections/Experience';
import { TestimonialSlider } from '../components/sections/TestimonialSlider';
import { Contact } from '../components/sections/Contact';
import { Stats } from '../components/sections/Stats';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Stats />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <TestimonialSlider />
      <Contact />
      <footer className="pb-12 pt-10 text-xs text-center text-slate-500 border-t border-slate-800/50">
        <div className="container-page">
          <span>© {new Date().getFullYear()} Senior Frontend Engineer · React &amp; Next.js</span>
        </div>
      </footer>
    </main>
  );
}

