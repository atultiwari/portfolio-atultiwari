import React from 'react';
import { ChevronUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-400 py-12 relative overflow-hidden">
      <div className="container mx-auto px-6 text-center z-10 relative">
        <p className="text-slate-100 font-semibold text-lg mb-4">Dr. Atul Tiwari, MD</p>
        <p className="mb-8 max-w-lg mx-auto text-sm">
          Bridging the gap between clinical pathology and advanced artificial intelligence to improve diagnostic precision and patient care.
        </p>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; {new Date().getFullYear()} Dr. Atul Tiwari. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <p>Designed for Excellence</p>
          </div>
        </div>
      </div>
      
      <button 
        onClick={scrollToTop}
        className="absolute bottom-8 right-8 bg-primary-600 hover:bg-primary-500 text-white p-3 rounded-full shadow-lg transition-all"
        aria-label="Scroll to top"
      >
        <ChevronUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;