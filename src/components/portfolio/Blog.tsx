import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, User } from 'lucide-react';

const posts = [
  {
    title: 'Importance of Data in Decision Making',
    excerpt: 'How organizations can transition from intuition-based to evidence-based strategies.',
    date: 'June 12, 2026',
    author: 'Nuhu Ibrahim',
    category: 'Strategy'
  },
  {
    title: 'Monitoring & Evaluation Best Practices',
    excerpt: 'Key indicators and frameworks for successful project tracking and impact assessment.',
    date: 'May 28, 2026',
    author: 'Nuhu Ibrahim',
    category: 'M&E'
  },
  {
    title: 'Power BI Tips for Data Analysts',
    excerpt: 'Advanced DAX functions and visualization techniques for professional dashboards.',
    date: 'May 15, 2026',
    author: 'Nuhu Ibrahim',
    category: 'Tools'
  },
  {
    title: 'Excel Automation Strategies',
    excerpt: 'Transforming manual spreadsheets into automated reporting machines.',
    date: 'April 30, 2026',
    author: 'Nuhu Ibrahim',
    category: 'Automation'
  },
  {
    title: 'Modern Data Visualization',
    excerpt: 'Principles of storytelling through data and choosing the right charts.',
    date: 'April 12, 2026',
    author: 'Nuhu Ibrahim',
    category: 'Design'
  },
  {
    title: 'Research Methodology Deep Dive',
    excerpt: 'Quantitative vs Qualitative research in the development sector.',
    date: 'March 25, 2026',
    author: 'Nuhu Ibrahim',
    category: 'Research'
  }
];

export const Blog = () => {
  return (
    <section id="blog" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <span className="text-emerald font-black tracking-widest text-sm uppercase">Insights & Articles</span>
            <h2 className="text-4xl lg:text-5xl font-black text-navy mt-4">The Data Journal</h2>
          </div>
          <a href="#" className="text-navy font-black flex items-center gap-2 group">
            View All Articles
            <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 h-full flex flex-col hover:bg-white hover:border-emerald/30 hover:shadow-2xl transition-all">
                <div className="flex justify-between items-center mb-6">
                  <span className="px-4 py-1.5 rounded-full bg-navy/5 text-navy text-xs font-black uppercase tracking-widest">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-widest">
                    <Clock size={14} />
                    {post.date}
                  </div>
                </div>
                
                <h3 className="text-2xl font-black text-navy mb-4 group-hover:text-emerald transition-colors leading-tight">
                  {post.title}
                </h3>
                
                <p className="text-slate-500 font-medium mb-10 flex-grow">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between border-t border-slate-200 pt-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-emerald flex items-center justify-center text-white font-black text-xs">
                      NI
                    </div>
                    <span className="text-sm font-bold text-navy">{post.author}</span>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-navy group-hover:bg-navy group-hover:text-white transition-all">
                    <ArrowRight size={18} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
