import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Services } from "@/components/portfolio/Services";
import { Skills } from "@/components/portfolio/Skills";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Certifications } from "@/components/portfolio/Certifications";
import { Testimonials } from "@/components/portfolio/Testimonials";
import { Blog } from "@/components/portfolio/Blog";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { Toaster } from "@/components/ui/sonner";

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-emerald/30 selection:text-navy">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <Testimonials />
      <Blog />
      <Contact />
      <Footer />
      <Toaster position="top-center" richColors />
    </div>
  );
}
export default App;
