import React from 'react';
import { motion } from 'framer-motion';
import { PieChart, LineChart, ClipboardCheck, Microscope, Database, ArrowRight, Zap } from 'lucide-react';

const services = [
  {
    title: 'Data Analysis',
    icon: PieChart,
    points: ['Data Cleaning', 'Statistical Analysis', 'Trend Analysis', 'Insights Generation'],
    color: 'bg-blue-500'
  },
  {
    title: 'Data Visualization',
    icon: LineChart,
    points: ['Power BI Dashboards', 'Excel Dashboards', 'Interactive Reports', 'Infographic Design'],
    color: 'bg-emerald-500'
  },
  {
    title: 'Monitoring & Evaluation',
    icon: ClipboardCheck,
    points: ['Indicator Development', 'Logframes', 'Results Framework', 'Project Evaluation'],
    color: 'bg-indigo-500'
  },
  {
    title: 'Research',
    icon: Microscope,
    points: ['Quantitative Research', 'Qualitative Research', 'Survey Design', 'Report Writing'],
    color: 'bg-orange-500'
  },
  {
    title: 'Data Management',
    icon: Database,
    points: ['Database Cleaning', 'Excel Automation', 'Reporting Systems', 'KPI Tracking'],
    color: 'bg-rose-500'
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-emerald font-black tracking-widest text-sm uppercase">My Expertise</span>
          <h2 className="text-4xl lg:text-5xl font-black text-navy mt-4 mb-6">Comprehensive Data Solutions</h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Leveraging advanced analytical tools and methodologies to provide end-to-end data support for projects of any scale.
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="bg-white p-8 rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col h-full group transition-all hover:border-emerald/30"
          >
            <div className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center text-white mb-8 shadow-lg transition-transform group-hover:rotate-12`}>
              <service.icon size={28} />
            </div>
            
            <h3 className="text-2xl font-black text-navy mb-6">{service.title}</h3>
            
            <ul className="space-y-4 mb-10 flex-grow">
              {service.points.map((point, j) => (
                <li key={j} className="flex items-center gap-3 text-slate-600 font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald" />
                  {point}
                </li>
              ))}
            </ul>
            
            <a href="#contact" className="flex items-center gap-2 font-bold text-navy hover:text-emerald transition-colors">
              Learn More
              <ArrowRight size={18} />
            </a>
          </motion.div>
        ))}
        
        {/* Placeholder for "And more..." */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="bg-navy p-8 rounded-[2rem] shadow-2xl flex flex-col items-center justify-center text-center text-white group"
        >
          <div className="w-20 h-20 rounded-full border-4 border-emerald/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <Zap size={40} className="text-emerald" />
          </div>
          <h3 className="text-2xl font-black mb-4">Custom Solutions?</h3>
          <p className="text-slate-300 mb-8 px-4">Need a specialized M&E framework or a unique data automation tool?</p>
          <a href="#contact" className="bg-emerald text-white px-8 py-3 rounded-xl font-bold hover:bg-white hover:text-navy transition-all">
            Let's Talk
          </a>
        </motion.div>
      </div>
    </section>
  );
};
