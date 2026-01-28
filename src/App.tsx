import { Hero } from './components/Hero';
import { Skills } from './components/Skills'
import { Projects } from './components/Projects';
import { Playground } from './components/Playground';
import { FloatingActions } from './components/FloatingActions';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-100 to-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <Hero />
        <Skills />
        <Projects />
        <Playground />
      </div>
      <FloatingActions />
    </div>
  );
}