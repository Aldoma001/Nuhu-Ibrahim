import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Linkedin, Github, Send } from 'lucide-react';
import { toast } from 'sonner';

export const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent successfully! Nuhu will get back to you soon.');
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-[-100px] left-[-100px] w-64 h-64 bg-navy/5 rounded-full" />
      <div className="absolute bottom-[-50px] right-[-50px] w-96 h-96 bg-emerald/5 rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <span className="text-emerald font-black tracking-widest text-sm uppercase">Get In Touch</span>
            <h2 className="text-4xl lg:text-5xl font-black text-navy mt-4 mb-8">Let's Discuss Your Data Impact</h2>
            <p className="text-slate-500 text-lg mb-12">
              Available for consulting, research partnerships, and full-time opportunities in the development and corporate sectors.
            </p>
            
            <div className="space-y-8 mb-12">
              <a href="tel:09061306161" className="flex items-start gap-6 group hover:translate-x-2 transition-transform">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-lg flex items-center justify-center text-navy group-hover:bg-navy group-hover:text-white transition-all">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Phone</p>
                  <p className="text-xl font-black text-navy">09061306161 / 08142535603</p>
                </div>
              </a>
              
              <a href="mailto:nuhuibrahin85@gmail.com" className="flex items-start gap-6 group hover:translate-x-2 transition-transform">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-lg flex items-center justify-center text-navy group-hover:bg-navy group-hover:text-white transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Email</p>
                  <p className="text-xl font-black text-navy">nuhuibrahin85@gmail.com</p>
                </div>
              </a>
              
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-lg flex items-center justify-center text-navy group-hover:bg-navy group-hover:text-white transition-all">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Location</p>
                  <p className="text-xl font-black text-navy">Opp Lafia Clinic, Kasuwa Bera ATC, Jalingo Taraba State</p>
                </div>
              </div>
            </div>
            
            <div className="flex gap-4">
              {[Linkedin, Github].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-xl bg-navy/5 flex items-center justify-center text-navy hover:bg-emerald hover:text-white transition-all">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 lg:p-12 rounded-[3rem] shadow-2xl border border-slate-100"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-black text-navy uppercase tracking-widest px-2">Name</label>
                  <input 
                    type="text" 
                    required
                    placeholder="John Doe"
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:border-emerald focus:ring-4 focus:ring-emerald/10 outline-none transition-all font-bold text-navy"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-black text-navy uppercase tracking-widest px-2">Email</label>
                  <input 
                    type="email" 
                    required
                    placeholder="john@example.com"
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:border-emerald focus:ring-4 focus:ring-emerald/10 outline-none transition-all font-bold text-navy"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-black text-navy uppercase tracking-widest px-2">Subject</label>
                <input 
                  type="text" 
                  required
                  placeholder="Project Inquiry"
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:border-emerald focus:ring-4 focus:ring-emerald/10 outline-none transition-all font-bold text-navy"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-black text-navy uppercase tracking-widest px-2">Message</label>
                <textarea 
                  required
                  rows={5}
                  placeholder="Tell me about your data needs..."
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:border-emerald focus:ring-4 focus:ring-emerald/10 outline-none transition-all font-bold text-navy resize-none"
                />
              </div>
              
              <button 
                type="submit"
                className="w-full bg-navy text-white py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 hover:bg-emerald transition-all shadow-xl shadow-navy/20 active:scale-[0.98]"
              >
                Send Message
                <Send size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
