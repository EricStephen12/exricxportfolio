import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Resume from './components/Resume';
import Process from './components/Process';
import Skills from './components/Skills';
import PortfolioGrid from './components/PortfolioGrid';
import Services from './components/Services';
import Statistics from './components/Statistics';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Resume />
      <Services />
      <Process />
      <Skills />
      <Statistics />
      <PortfolioGrid />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

