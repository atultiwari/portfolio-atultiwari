import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import ExperienceEducation from './components/ExperienceEducation';
import Skills from './components/Skills';
import Publications from './components/Publications';
import Engagements from './components/Engagements';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <ExperienceEducation />
        <Skills />
        <Publications />
        <Engagements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;