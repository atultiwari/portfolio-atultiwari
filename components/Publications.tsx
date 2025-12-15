import React from 'react';
import SectionWrapper from './SectionWrapper';
import { PUBLICATIONS_DATA } from '../constants';
import { motion } from 'framer-motion';
import { BookOpen, FileText } from 'lucide-react';

const Publications: React.FC = () => {
  return (
    <SectionWrapper id="publications" title="Publications & Research" background="white">
      <div className="grid gap-6 md:grid-cols-2">
        {PUBLICATIONS_DATA.map((pub, idx) => (
          <motion.div
            key={pub.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="flex flex-col bg-slate-50 rounded-lg p-6 border border-slate-100 hover:border-primary-200 transition-colors"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="p-2 bg-white rounded shadow-sm text-primary-600">
                {pub.type === 'Book Chapter' ? <BookOpen size={20} /> : <FileText size={20} />}
              </div>
              <span className="text-xs font-bold px-2 py-1 bg-slate-200 text-slate-600 rounded uppercase tracking-wider">
                {pub.type}
              </span>
            </div>
            <h4 className="text-lg font-bold text-slate-900 mb-2">{pub.title}</h4>
            <div className="mt-auto pt-4 flex justify-between items-center text-sm text-slate-500 border-t border-slate-200">
              <span className="font-medium text-slate-700">{pub.venue}</span>
              <span>{pub.year}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Publications;