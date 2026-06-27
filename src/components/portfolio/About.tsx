import React from 'react';
import { motion } from 'framer-motion';
import { Target, Search, BarChart3, Users, Zap, Award } from 'lucide-react';

const timeline = [
  { year: '2023 - Present', title: 'Senior M&E Officer', company: 'International Development NGO', desc: 'Leading impact measurement for large-scale development projects across Sub-Saharan Africa.' },
  { year: '2021 - 2023', title: 'Data Research Analyst', company: 'Consulting Group', desc: 'Conducted complex statistical analysis and research for government policy initiatives.' },
  { year: '2019 - 2021', title: 'Research Assistant', company: 'Academic Institution', desc: 'Supported quantitative and qualitative research studies, managing large datasets and field surveys.' },
  { year: '2018', title: 'Junior Data Analyst', company: 'Corporate Tech', desc: 'Assisted in data cleaning, reporting automation, and basic dashboard creation.' },
];

const highlights = [
  { icon: Target, label: 'Impact Measurement' },
  { icon: Search, label: 'Research Expertise' },
  { icon: BarChart3, label: 'Data Storytelling' },
  { icon: Users, label: 'Capacity Building' },
];

export const About = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-navy/5 text-navy font-bold text-sm mb-6">
              <Zap size={16} className="text-emerald" />
              PROFESSIONAL BIOGRAPHY
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-black text-navy mb-8 leading-tight">
              Evidence-Based Decision Making <br />
              <span className="text-emerald">Drives Sustainable Growth</span>
            </h2>
            
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed mb-10">
              <p>
                As a dedicated Data Analyst and M&E Specialist, I bridge the gap between complex raw data and meaningful impact. My career is built on the foundation of rigorous research and a passion for evidence-based decision-making in the development sector.
              </p>
              <p>
                I specialize in designing robust monitoring and evaluation frameworks that do more than just track numbers—they tell the story of change. From field survey implementation to high-level dashboard development, I ensure every data point contributes to a clearer understanding of project effectiveness.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {highlights.map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-xl border border-slate-100 hover:border-emerald/30 hover:shadow-md transition-all group">
                  <div className="w-12 h-12 rounded-lg bg-navy/5 flex items-center justify-center text-navy group-hover:bg-emerald group-hover:text-white transition-colors">
                    <item.icon size={24} />
                  </div>
                  <span className="font-bold text-slate-700">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-50 p-8 lg:p-12 rounded-[2.5rem] relative"
          >
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-emerald rounded-full flex items-center justify-center text-white shadow-xl rotate-12">
              <Award size={40} />
            </div>
            
            <h3 className="text-2xl font-black text-navy mb-10 flex items-center gap-3">
              Career Evolution
              <span className="h-1 w-12 bg-emerald rounded-full" />
            </h3>
            
            <div className="space-y-12">
              {timeline.map((item, i) => (
                <div key={i} className="relative pl-10 border-l-2 border-slate-200 last:border-0 pb-2">
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-navy ring-4 ring-white" />
                  <span className="text-sm font-bold text-emerald mb-2 block">{item.year}</span>
                  <h4 className="text-xl font-bold text-navy mb-1">{item.title}</h4>
                  <p className="text-sm font-semibold text-slate-400 mb-3">{item.company}</p>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
