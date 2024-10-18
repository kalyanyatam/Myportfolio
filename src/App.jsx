import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Technologies from './components/Technologies';
import Programming from './components/Programming';
import Projects from './components/Projects';
import Contact from './components/Contact';


const App = () => {
  return (
    <div className="relative min-h-screen w-screen overflow-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      {/* Background Gradient and Overlay */}
      <div className="absolute top-0 left-0 h-full w-full bg-neutral-950 z-[-2]">
        <div className="absolute top-0 left-0 h-full w-full bg-[radial-gradient(circle_at_top_right,#1e1e1e,#000000)] opacity-60"></div>
        <div className="absolute top-0 left-0 h-full w-full bg-[linear-gradient(to_bottom_right,#4b4b4b,#1e1e1e)] opacity-40"></div>
      </div>

      <div className="container mx-auto px-8 py-12 relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Programming />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default App;
