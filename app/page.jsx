import Contact from "./Sections/Contact";
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
      <section id='resume' className=' mb-20'>
        <Resume />
      </section>
      <section id='portfolio' className=' mb-20'>
        <Portfolio />
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
