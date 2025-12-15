import React from 'react';
import SectionWrapper from './SectionWrapper';
import Timeline from './Timeline';
import { EDUCATION_DATA, EXPERIENCE_DATA } from '../constants';

const ExperienceEducation: React.FC = () => {
  return (
    <SectionWrapper id="experience" background="gray" title="Experience & Education">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        <div>
          <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center">
            <span className="w-8 h-8 rounded bg-primary-100 text-primary-600 flex items-center justify-center mr-3 text-lg">💼</span>
            Professional Experience
          </h3>
          <Timeline data={EXPERIENCE_DATA} />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center">
            <span className="w-8 h-8 rounded bg-primary-100 text-primary-600 flex items-center justify-center mr-3 text-lg">🎓</span>
            Education
          </h3>
          <Timeline data={EDUCATION_DATA} />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ExperienceEducation;