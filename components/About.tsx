import React from 'react';
import SectionWrapper from './SectionWrapper';
import { ABOUT_DATA } from '../constants';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <SectionWrapper id="about" title="About Me" background="white">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-lg leading-relaxed text-slate-700 text-center"
      >
        <p className="mb-6">{ABOUT_DATA}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="p-6 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-md transition-shadow">
            <div className="text-4xl mb-4">👨‍🏫</div>
            <h3 className="font-bold text-slate-900 mb-2">Educator</h3>
            <p className="text-sm text-slate-600">Teaching MBBS & Postgraduates, mentoring the next generation of doctors.</p>
          </div>
          <div className="p-6 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-md transition-shadow">
            <div className="text-4xl mb-4">🔬</div>
            <h3 className="font-bold text-slate-900 mb-2">Researcher</h3>
            <p className="text-sm text-slate-600">Leading research in hematopathology and AI-driven diagnostics.</p>
          </div>
          <div className="p-6 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-md transition-shadow">
            <div className="text-4xl mb-4">💻</div>
            <h3 className="font-bold text-slate-900 mb-2">Technologist</h3>
            <p className="text-sm text-slate-600">Bridging the gap between clinical medicine and modern AI tools.</p>
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
};

export default About;