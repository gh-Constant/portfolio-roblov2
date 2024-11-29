
import Hero from './components/Hero';
import Technologies from './components/Technologies';
import Systems from './components/Systems';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import LanguageToggle from './components/LanguageToggle';
import { LanguageProvider } from './contexts/LanguageContext';
function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-black text-white">
        <LanguageToggle />
        <Hero />
        <Technologies />
        <Systems />
        <Projects />
        <Testimonials />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;