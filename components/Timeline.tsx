import React from 'react';
import { TimelineItem } from '../types';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

interface Props {
  data: TimelineItem[];
  variant?: 'left' | 'alternating'; // Simple left-aligned or alternating sides
}

const Timeline: React.FC<Props> = ({ data }) => {
  return (
    <div className="relative border-l-2 border-slate-200 ml-3 md:ml-6 space-y-12">
      {data.map((item, index) => (
        <motion.div 
          key={item.id}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="relative pl-8 md:pl-12"
        >
          {/* Dot */}
          <span className="absolute -left-[9px] top-1 h-5 w-5 rounded-full border-4 border-white bg-primary-600 shadow-sm"></span>
          
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2">
            <div>
              <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
              <p className="text-primary-700 font-medium text-lg">{item.subtitle}</p>
            </div>
            {item.period && (
              <div className="flex items-center text-sm text-slate-500 mt-1 sm:mt-0 font-mono bg-slate-100 px-3 py-1 rounded-full w-fit">
                <Calendar className="w-4 h-4 mr-2" />
                {item.period}
              </div>
            )}
          </div>
          
          {item.location && (
            <div className="flex items-center text-sm text-slate-500 mb-3">
              <MapPin className="w-4 h-4 mr-1" />
              {item.location}
            </div>
          )}

          {item.description && item.description.length > 0 && (
            <ul className="list-disc list-inside text-slate-600 space-y-1 mt-3">
              {item.description.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default Timeline;