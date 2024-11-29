import React from 'react';
import Hero from './components/Hero';
import Technologies from './components/Technologies';
import Systems from './components/Systems';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <Technologies />
      <Systems />
      <Projects />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;