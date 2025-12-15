import React from 'react';
import { motion } from 'framer-motion';

interface Props {
  id: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'gray';
}

const SectionWrapper: React.FC<Props> = ({ 
  id, 
  title, 
  subtitle, 
  children, 
  className = "", 
  background = 'white' 
}) => {
  return (
    <section 
      id={id} 
      className={`py-20 px-4 sm:px-6 lg:px-8 ${background === 'gray' ? 'bg-slate-50' : 'bg-white'} ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {(title || subtitle) && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4 relative inline-block">
                {title}
                <span className="absolute -bottom-2 left-1/2 w-16 h-1 bg-primary-600 transform -translate-x-1/2 rounded-full"></span>
              </h2>
            )}
            {subtitle && (
              <p className="max-w-2xl mx-auto text-lg text-slate-600 mt-4">
                {subtitle}
              </p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;