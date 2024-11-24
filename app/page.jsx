import About from "./Sections/About";
import Contact from "./Sections/Contact";
import Documentation from "./Sections/Documentation";
import Features from "./Sections/Features";
import Hero from "./Sections/Hero";
import Jobs from "./Sections/Jobs";
import Portfolio from "./Sections/Portfolio";
import Pricing from "./Sections/Pricing";
import Resume from "./Sections/Resume";

export default function Home() {
  return (
    <section>
      <section id='home' className=' m-20 '>
        <Hero />
      </section>
      <section id='about' className=' mb-20'>
        <About />
      </section>
      <section id='documentation' className=' mb-20'>
        <Documentation />
      </section>
      <section id='features' className=' mb-20'>
        <Features />
      </section>
      <section id='pricing' className=' mb-20'>
        <Pricing />
      </section>
      <section id='contact' className=' mb-20'>
        <Contact />
      </section>
    </section>
  );
}
