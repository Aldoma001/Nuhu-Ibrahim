import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Dr. Sarah Adeyemi',
    role: 'Program Director, HealthAfrica NGO',
    content: "Nuhu's ability to turn complex field data into clear, actionable dashboards was a game-changer for our maternal health project. His M&E frameworks are rigorous and highly professional.",
    rating: 5
  },
  {
    name: 'James Wilson',
    role: 'Lead Consultant, Strategic Development Group',
    content: 'We hired Nuhu for a national impact assessment. His statistical analysis using SPSS was flawless, and the final report he produced influenced significant policy shifts.',
    rating: 5
  },
  {
    name: 'Mariam Bello',
    role: 'Operations Manager, TechEdge Solutions',
    content: "Beyond his technical skills in Power BI and Excel, Nuhu brings a strategic mindset to every project. He doesn't just analyze data; he provides strategic insights that drive growth.",
    rating: 5
  }
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-navy relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-emerald font-black tracking-widest text-sm uppercase">Voices of Impact</span>
          <h2 className="text-4xl lg:text-5xl font-black text-white mt-4">Client Feedback</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[2.5rem] relative"
            >
              <div className="absolute -top-6 left-10 w-12 h-12 bg-emerald rounded-2xl flex items-center justify-center text-white shadow-lg">
                <Quote size={24} />
              </div>
              
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <Star key={j} size={16} className="fill-emerald text-emerald" />
                ))}
              </div>
              
              <p className="text-slate-300 text-lg leading-relaxed mb-8 italic">
                "{testimonial.content}"
              </p>
              
              <div>
                <h4 className="text-white font-black text-xl mb-1">{testimonial.name}</h4>
                <p className="text-emerald font-bold text-sm">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
