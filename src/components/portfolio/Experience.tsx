import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

const experiences = [
  {
    role: 'Senior Data Analyst & M&E Lead',
    company: 'Global Health Initiative',
    period: '2022 - Present',
    location: 'Remote / Abuja',
    description: 'Directing the design and implementation of M&E frameworks for maternal health projects. Managing a team of data collectors and ensuring 99% data accuracy across all reports.',
    tags: ['Power BI', 'M&E', 'Impact Reporting']
  },
  {
    role: 'Monitoring & Evaluation Officer',
    company: 'Sustainable Development NGO',
    period: '2020 - 2022',
    location: 'Kano, Nigeria',
    description: 'Designed Logframes and Results Frameworks for educational intervention projects. Automated monthly KPI tracking using Excel and Power Automate.',
    tags: ['Excel Automation', 'Logframes', 'Survey Design']
  },
  {
    role: 'Data Research Consultant',
    company: 'National Research Council',
    period: '2018 - 2020',
    location: 'Lagos, Nigeria',
    description: 'Led quantitative research studies on urban development. Performed complex regression analysis using SPSS and R for government policy briefs.',
    tags: ['SPSS', 'Quantitative Research', 'Policy Analysis']
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-20 opacity-5 pointer-events-none">
        <Briefcase size={400} />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-emerald font-black tracking-widest text-sm uppercase">Track Record</span>
          <h2 className="text-4xl lg:text-5xl font-black text-navy mt-4">Professional Journey</h2>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-1 bg-slate-200 rounded-full" />

          <div className="space-y-16 md:space-y-24">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`relative flex flex-col md:flex-row gap-8 md:gap-0 ${
                  i % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Dot */}
                <div className="absolute left-[-4px] md:left-1/2 md:-translate-x-1/2 top-0 w-3 h-3 rounded-full bg-emerald ring-8 ring-white z-10" />

                <div className="md:w-1/2 px-8">
                  <div className={`flex flex-col ${i % 2 === 0 ? 'md:items-start' : 'md:items-end'} text-left ${i % 2 === 0 ? '' : 'md:text-right'}`}>
                    <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 relative group hover:border-emerald/30 transition-all">
                      <div className="flex items-center gap-3 text-emerald font-bold text-sm mb-4">
                        <Calendar size={16} />
                        {exp.period}
                        <span className="mx-2 text-slate-300">•</span>
                        <MapPin size={16} />
                        {exp.location}
                      </div>
                      
                      <h3 className="text-2xl font-black text-navy mb-2">{exp.role}</h3>
                      <p className="text-emerald font-bold mb-4">{exp.company}</p>
                      
                      <p className="text-slate-500 leading-relaxed mb-6">
                        {exp.description}
                      </p>
                      
                      <div className={`flex flex-wrap gap-2 ${i % 2 === 0 ? '' : 'md:justify-end'}`}>
                        {exp.tags.map((tag) => (
                          <span key={tag} className="px-3 py-1 bg-slate-50 text-slate-600 rounded-lg text-xs font-bold border border-slate-100">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
