import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  { name: 'Power BI', level: 95 },
  { name: 'Excel', level: 95 },
  { name: 'Data Analysis', level: 95 },
  { name: 'Data Visualization', level: 94 },
  { name: 'Dashboard Design', level: 93 },
  { name: 'Data Cleaning', level: 95 },
  { name: 'Monitoring & Evaluation', level: 92 },
  { name: 'Report Writing', level: 92 },
  { name: 'Research', level: 90 },
  { name: 'SPSS', level: 90 },
  { name: 'Survey Design', level: 90 },
  { name: 'Statistics', level: 88 },
];

const tools = [
  { name: 'Power BI', logo: '📊' },
  { name: 'Microsoft Excel', logo: '📗' },
  { name: 'SPSS', logo: '📉' },
  { name: 'Google Sheets', logo: '📑' },
  { name: 'KoboToolbox', logo: '📝' },
  { name: 'ODK Collect', logo: '📱' },
  { name: 'CommCare', logo: '⚕️' },
  { name: 'SQL', logo: '💾' },
  { name: 'Microsoft Office', logo: '🏢' },
  { name: 'Canva', logo: '🎨' },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <span className="text-emerald font-black tracking-widest text-sm uppercase">Proficiency</span>
            <h2 className="text-4xl font-black text-navy mt-4 mb-8">Technical Expertise</h2>
            <p className="text-slate-500 text-lg mb-12">
              My skill set is fine-tuned for high-precision data processing and impact evaluation. 
              I combine technical mastery with domain expertise to deliver world-class results.
            </p>
            
            <div className="space-y-8">
              {skillCategories.map((skill, i) => (
                <div key={i} className="relative">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-navy">{skill.name}</span>
                    <span className="text-sm font-black text-emerald">{skill.level}%</span>
                  </div>
                  <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-navy to-emerald rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col">
            <div className="bg-slate-50 rounded-[3rem] p-10 lg:p-16 flex-grow">
              <span className="text-emerald font-black tracking-widest text-sm uppercase">Ecosystem</span>
              <h3 className="text-3xl font-black text-navy mt-4 mb-10">Software & Tools</h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {tools.map((tool, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05, backgroundColor: '#fff' }}
                    className="flex flex-col items-center justify-center p-6 bg-white/50 rounded-2xl border border-slate-100 shadow-sm transition-all"
                  >
                    <span className="text-4xl mb-4">{tool.logo}</span>
                    <span className="text-sm font-bold text-slate-700 text-center">{tool.name}</span>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-16 p-8 bg-navy rounded-3xl text-white relative overflow-hidden">
                <div className="relative z-10">
                  <h4 className="text-xl font-bold mb-2">Always Evolving</h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    I continuously update my toolkit with the latest in AI-driven analytics, 
                    automated reporting tools, and advanced M&E methodologies.
                  </p>
                </div>
                <div className="absolute top-[-20px] right-[-20px] w-32 h-32 bg-emerald/20 rounded-full blur-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
