import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Github, Linkedin, Mail, Twitter, ChevronDown } from 'lucide-react';

const stats = [
  { label: 'Projects', value: '50+' },
  { label: 'Organizations Supported', value: '10+' },
  { label: 'Years Experience', value: '5+' },
  { label: 'Quality Commitment', value: '100%' },
];

const socialIcons = [
  { icon: Linkedin, href: '#' },
  { icon: Github, href: '#' },
  { icon: Twitter, href: '#' },
  { icon: Mail, href: 'mailto:nuhuibrahin85@gmail.com' },
];

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-50">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-navy/5 -skew-x-12 transform origin-top-right hidden lg:block" />
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-emerald/10 rounded-full blur-3xl animate-pulse" />
      
      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 rounded-full bg-emerald/10 text-emerald font-semibold text-sm mb-6"
          >
            Turning Data Into Insight, Insight Into Impact
          </motion.div>
          
          <h1 className="text-6xl lg:text-8xl font-black text-navy leading-tight mb-4">
            NUHU <br />
            <span className="text-emerald">IBRAHIM</span>
          </h1>
          
          <h2 className="text-xl lg:text-2xl font-bold text-slate-600 mb-8 border-l-4 border-emerald pl-4">
            Data Analyst | Researcher | Monitoring & Evaluation (M&E) Officer
          </h2>
          
          <p className="text-lg text-slate-600 mb-10 max-w-xl leading-relaxed">
            I help organizations transform complex data into actionable insights that improve decision-making, measure impact, and drive sustainable development. My expertise spans data analytics, monitoring & evaluation, research, visualization, and evidence-based reporting.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-12">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-navy text-white px-8 py-4 rounded-xl font-bold shadow-xl shadow-navy/20 flex items-center gap-2 hover:bg-emerald transition-colors"
            >
              View Portfolio
            </motion.a>
            <motion.a
              href="https://storage.googleapis.com/dala-prod-public-storage/attachments/b01623e7-f59a-40bf-906e-e2482a969034/1782576422166_NUHU_IBRAHIM_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-navy border-2 border-slate-200 px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:border-navy transition-colors"
            >
              <FileText size={20} />
              Download CV
            </motion.a>
          </div>
          
          <div className="flex items-center gap-6">
            {socialIcons.map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                whileHover={{ y: -5, color: '#16A34A' }}
                className="text-slate-400 transition-colors"
                title={social.href.startsWith('mailto:') ? social.href.replace('mailto:', '') : social.href !== '#' ? social.href : undefined}
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
            <img 
              src="https://storage.googleapis.com/dala-prod-public-storage/attachments/b01623e7-f59a-40bf-906e-e2482a969034/1782575932207_Nuhu.png" 
              alt="Nuhu Ibrahim"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-emerald rounded-2xl -z-10 animate-bounce-slow" />
          <div className="absolute -top-6 -right-6 w-48 h-48 border-4 border-navy/10 rounded-full -z-10" />
          
          {/* Floating Data Card */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute -right-8 top-1/4 glass p-6 rounded-2xl shadow-xl hidden xl:block border-l-4 border-emerald"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-emerald/20 rounded-lg flex items-center justify-center text-emerald">
                <FileText />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Analysis Ready</p>
                <p className="text-lg font-black text-navy">100+ Datasets</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Stats Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/80 backdrop-blur-md border-t border-slate-100 py-10 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-3xl lg:text-4xl font-black text-navy mb-1">{stat.value}</h3>
              <p className="text-sm font-medium text-slate-500 uppercase tracking-widest">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
      
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-slate-300 animate-bounce hidden lg:block">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};
