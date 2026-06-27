import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Database, BarChart, FileText } from 'lucide-react';

const projects = [
  {
    title: 'NGO Performance Dashboard',
    category: 'Data Visualization',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/d76bfb74-9997-429a-825f-e7ffbadbe2ac/ngo-performance-dashboard-12059c77-1782575589694.webp',
    desc: 'A comprehensive Power BI dashboard tracking KPIs across 50+ regional projects. Features interactive maps and real-time trend analysis.',
    tech: ['Power BI', 'SQL', 'DAX'],
    icon: BarChart
  },
  {
    title: 'Health Monitoring System',
    category: 'Monitoring & Evaluation',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/d76bfb74-9997-429a-825f-e7ffbadbe2ac/health-monitoring-dashboard-1f3cc1b8-1782575588352.webp',
    desc: 'End-to-end M&E system for national health initiative. Integrated mobile data collection with automated reporting pipelines.',
    tech: ['KoboToolbox', 'Python', 'Excel'],
    icon: Database
  },
  {
    title: 'Education Impact Study',
    category: 'Research',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/d76bfb74-9997-429a-825f-e7ffbadbe2ac/education-impact-assessment-19e96a4a-1782575589407.webp',
    desc: 'Large-scale assessment of primary education interventions. Conducted mixed-methods research and longitudinal data analysis.',
    tech: ['SPSS', 'SurveyDesign', 'Reporting'],
    icon: FileText
  },
  {
    title: 'Survey Data Analytics',
    category: 'Statistical Analysis',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/d76bfb74-9997-429a-825f-e7ffbadbe2ac/survey-data-analytics-65191607-1782575588608.webp',
    desc: 'Advanced statistical modeling of consumer behavior data. Delivered actionable insights that increased project efficiency by 25%.',
    tech: ['Stata', 'Excel', 'Tableau'],
    icon: BarChart
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <span className="text-emerald font-black tracking-widest text-sm uppercase">Selected Works</span>
            <h2 className="text-4xl lg:text-5xl font-black text-navy mt-4">Evidence of Excellence</h2>
          </div>
          <p className="text-slate-500 max-w-md text-lg">
            A showcase of high-impact projects where data was transformed into strategic organizational value.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative"
            >
              <div className="relative h-[400px] w-full overflow-hidden rounded-[2.5rem] shadow-2xl">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
                
                <div className="absolute inset-0 p-10 flex flex-col justify-end transform transition-transform duration-500">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald flex items-center justify-center text-white">
                      <project.icon size={20} />
                    </div>
                    <span className="text-emerald font-bold text-sm tracking-wider uppercase">{project.category}</span>
                  </div>
                  
                  <h3 className="text-3xl font-black text-white mb-4">{project.title}</h3>
                  <p className="text-slate-200 mb-8 line-clamp-2 max-w-md">
                    {project.desc}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      {project.tech.map(t => (
                        <span key={t} className="text-[10px] font-black uppercase tracking-widest bg-white/10 text-white px-3 py-1.5 rounded-lg backdrop-blur-md border border-white/10">
                          {t}
                        </span>
                      ))}
                    </div>
                    
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 rounded-full bg-white text-navy flex items-center justify-center hover:bg-emerald hover:text-white transition-colors"
                    >
                      <ExternalLink size={20} />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-3 bg-navy text-white px-10 py-5 rounded-2xl font-black hover:bg-emerald transition-all shadow-xl shadow-navy/20"
          >
            Start a Data-Driven Project
            <ExternalLink size={20} />
          </motion.a>
        </div>
      </div>
    </section>
  );
};
