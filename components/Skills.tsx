import React from 'react';
import SectionWrapper from './SectionWrapper';
import { SKILLS_DATA } from '../constants';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';

const Skills: React.FC = () => {
  return (
    <SectionWrapper id="skills" title="Skills & Expertise" background="white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SKILLS_DATA.map((cat, idx) => {
          // Dynamic icon rendering
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const IconComponent = (Icons as any)[cat.iconName] || Icons.Code;

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-white rounded-lg shadow-sm group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-800">{cat.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx} 
                    className="text-xs font-medium px-2.5 py-1 bg-white text-slate-600 rounded-md border border-slate-200 shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};

export default Skills;