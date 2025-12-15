import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileText } from 'lucide-react';
import { HERO_DATA } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 pt-20">
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-primary-100 text-primary-800 text-sm font-semibold mb-6 tracking-wide uppercase">
            Pathologist & AI Scientist
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-4">
            {HERO_DATA.name}
          </h1>
          <h2 className="text-xl md:text-2xl font-medium text-slate-600 mb-6">
            {HERO_DATA.designation}
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-lg border-l-4 border-primary-500 pl-4 italic">
            "{HERO_DATA.tagline}"
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a 
              href="#publications" 
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-primary-600 border border-transparent rounded-lg shadow-lg hover:bg-primary-700 transition duration-300 transform hover:-translate-y-1"
            >
              View My Work
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-primary-700 bg-white border border-slate-200 rounded-lg shadow hover:bg-slate-50 transition duration-300"
            >
              Contact Me
              <FileText className="ml-2 h-5 w-5" />
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-primary-600 rounded-full opacity-10 blur-2xl transform translate-x-4 translate-y-4"></div>
            <img 
              src={HERO_DATA.image} 
              alt={HERO_DATA.name}
              className="relative w-full h-full object-cover rounded-full border-8 border-white shadow-2xl"
            />
            {/* Decorative orbit elements */}
            <div className="absolute -top-4 -right-4 bg-white p-3 rounded-full shadow-lg animate-bounce">
              <span className="text-2xl">🧬</span>
            </div>
            <div className="absolute top-1/2 -left-8 bg-white p-3 rounded-full shadow-lg animate-pulse">
              <span className="text-2xl">🤖</span>
            </div>
            <div className="absolute -bottom-4 right-1/2 bg-white p-3 rounded-full shadow-lg">
              <span className="text-2xl">🔬</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;