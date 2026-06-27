import React from 'react';
import { BarChart2, ArrowUp, Linkedin, Github, Twitter, Mail } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white pt-24 pb-12 border-t border-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-12 h-12 bg-navy rounded-xl flex items-center justify-center">
                <BarChart2 className="text-white w-8 h-8" />
              </div>
              <span className="text-2xl font-black tracking-tighter text-navy">
                NUHU <span className="text-emerald">IBRAHIM</span>
              </span>
            </div>
            <p className="text-slate-500 text-lg max-w-sm mb-10 font-medium">
              Data Driven. Impact Focused. Future Ready.
              Transforming complex information into actionable insights for global development.
            </p>
            <div className="flex gap-4">
              {[
                { name: 'LinkedIn', href: '#', icon: Linkedin },
                { name: 'GitHub', href: '#', icon: Github },
                { name: 'X', href: '#', icon: Twitter },
                { name: 'Email', href: 'mailto:nuhuibrahin85@gmail.com', icon: Mail }
              ].map((social) => (
                <a key={social.name} href={social.href} className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center text-navy hover:bg-emerald hover:text-white transition-all" title={social.name}>
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-black text-navy uppercase tracking-widest text-sm mb-8">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Experience', 'Projects', 'Blog', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-slate-500 font-bold hover:text-emerald transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-black text-navy uppercase tracking-widest text-sm mb-8">Services</h4>
            <ul className="space-y-4">
              {['Data Analysis', 'Data Visualization', 'M&E Frameworks', 'Research Studies', 'Data Management'].map((link) => (
                <li key={link}>
                  <a href="#services" className="text-slate-500 font-bold hover:text-emerald transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-slate-100 gap-6">
          <p className="text-slate-400 font-bold text-sm text-center md:text-left">
            © 2026 Nuhu Ibrahim. All Rights Reserved. Designed for Impact.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-navy hover:bg-navy hover:text-white transition-all shadow-sm"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};
