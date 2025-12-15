import React, { useState } from 'react';
import SectionWrapper from './SectionWrapper';
import { CONTACT_LINKS } from '../constants';
import * as Icons from 'lucide-react';
import { Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! This is a demo form.");
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <SectionWrapper id="contact" title="Get In Touch" background="white">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Contact Info */}
        <div className="bg-primary-600 rounded-2xl p-8 text-white shadow-xl flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-10 rounded-bl-full transform translate-x-10 -translate-y-10"></div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <p className="text-primary-100 mb-10 leading-relaxed">
              Open to collaborations, speaking opportunities, and educational workshops. 
              Feel free to reach out for research partnerships or academic inquiries.
            </p>
            
            <div className="space-y-6">
              {CONTACT_LINKS.map((link, idx) => {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const IconComponent = (Icons as any)[link.iconName] || Icons.Link;
                return (
                  <a 
                    key={idx} 
                    href={link.href}
                    className="flex items-center space-x-4 text-white hover:text-primary-100 transition-colors"
                  >
                    <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="font-medium">{link.label}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
              <input 
                type="text" 
                id="name"
                required
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                placeholder="Dr. John Doe"
                value={formState.name}
                onChange={(e) => setFormState({...formState, name: e.target.value})}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
              <input 
                type="email" 
                id="email"
                required
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                placeholder="john@example.com"
                value={formState.email}
                onChange={(e) => setFormState({...formState, email: e.target.value})}
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
              <textarea 
                id="message"
                required
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                placeholder="I would like to discuss..."
                value={formState.message}
                onChange={(e) => setFormState({...formState, message: e.target.value})}
              ></textarea>
            </div>
            <button 
              type="submit"
              className="w-full bg-slate-900 text-white font-bold py-3 px-6 rounded-lg hover:bg-slate-800 transition transform hover:-translate-y-1 flex items-center justify-center"
            >
              Send Message
              <Send className="ml-2 w-4 h-4" />
            </button>
          </form>
        </div>

      </div>
    </SectionWrapper>
  );
};

export default Contact;