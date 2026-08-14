import { Hero } from './components/Hero';
import { Skills } from './components/Skills'
import { Projects } from './components/Projects';
import { CompanyProjects } from './components/CompanyProjects';
import { Playground } from './components/Playground';
import { FloatingActions } from './components/FloatingActions';
import { Reveal } from './components/Reveal';

export default function App() {
  return (
    <div className="site-shell min-h-[100dvh]">
      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
        <Hero />
        <Reveal><Skills /></Reveal>
        <Reveal><Projects /></Reveal>
        <Reveal><CompanyProjects /></Reveal>
        <Reveal><Playground /></Reveal>
      </main>
      <FloatingActions />
    </div>
  );
}
