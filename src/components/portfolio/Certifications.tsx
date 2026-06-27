import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle2 } from 'lucide-react';

const certifications = [
  { title: 'Data Analytics Professional', issuer: 'Google', date: '2023' },
  { title: 'Advanced Monitoring & Evaluation', issuer: 'World Bank Group', date: '2022' },
  { title: 'Microsoft Certified: Power BI Data Analyst Associate', issuer: 'Microsoft', date: '2023' },
  { title: 'Advanced Excel for Business', issuer: 'Corporate Finance Institute', date: '2021' },
  { title: 'Statistical Analysis with SPSS', issuer: 'IBM', date: '2020' },
  { title: 'Research Methodology & Ethics', issuer: 'PHRP Online', date: '2019' },
];

export const Certifications = () => {
  return (
    <section id="certifications" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-emerald font-black tracking-widest text-sm uppercase">Credentials</span>
          <h2 className="text-4xl font-black text-navy mt-4">Certifications & Awards</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-2xl shadow-lg shadow-slate-200/50 border border-slate-100 flex items-start gap-5 transition-all hover:border-emerald/30 group"
            >
              <div className="w-12 h-12 shrink-0 rounded-xl bg-navy/5 flex items-center justify-center text-navy group-hover:bg-emerald group-hover:text-white transition-colors">
                <Award size={24} />
              </div>
              <div>
                <h3 className="font-black text-navy text-lg leading-tight mb-2 group-hover:text-emerald transition-colors">
                  {cert.title}
                </h3>
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-bold text-slate-500">{cert.issuer}</span>
                  <span className="text-xs font-bold text-slate-300 uppercase tracking-widest">{cert.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 p-8 bg-white rounded-[2rem] border-2 border-dashed border-slate-200 text-center">
          <div className="flex justify-center gap-2 mb-4">
            <CheckCircle2 size={24} className="text-emerald" />
            <span className="font-black text-navy uppercase tracking-widest text-sm">Verified Expertise</span>
          </div>
          <p className="text-slate-500 font-medium">All certifications are verified and available for review upon request.</p>
        </div>
      </div>
    </section>
  );
};
