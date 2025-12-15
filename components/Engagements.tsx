import React from 'react';
import SectionWrapper from './SectionWrapper';
import { TALKS_DATA, AWARDS_DATA } from '../constants';
import { Mic, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const Engagements: React.FC = () => {
  return (
    <SectionWrapper id="engagements" background="gray" title="Talks & Achievements">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Talks Column */}
        <div>
          <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center border-b pb-4">
            <Mic className="mr-3 text-primary-600" /> Speaking Engagements
          </h3>
          <div className="space-y-6">
            {TALKS_DATA.map((talk) => (
              <motion.div 
                key={talk.id}
                whileHover={{ x: 5 }}
                className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-primary-500"
              >
                <h4 className="font-bold text-slate-800">{talk.title}</h4>
                <p className="text-primary-700 text-sm font-medium">{talk.subtitle}</p>
                <p className="text-slate-400 text-xs mt-2 text-right">{talk.period}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Awards Column */}
        <div>
          <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center border-b pb-4">
            <Award className="mr-3 text-yellow-500" /> Awards & Recognitions
          </h3>
          <div className="space-y-6">
            {AWARDS_DATA.map((award, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ x: 5 }}
                className="bg-white p-5 rounded-lg shadow-sm flex items-start"
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                </div>
                <p className="ml-4 text-slate-700 font-medium">{award}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </SectionWrapper>
  );
};

export default Engagements;