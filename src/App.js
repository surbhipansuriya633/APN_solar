import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import Team from './components/Team';
import Contact from './components/Contact';
import WhoWe from './components/WhoWe';
import SolarSolutions from './components/SolarSolutions';
import MissionVision from './components/MissionVision';

function App() {
  return (
    <div>
      <div className=''>
        <Header />
        <Hero />
        <About />
        <MissionVision />
        <WhoWe />
        <Services />
        <Process />
        <SolarSolutions />
        <Team />
        <Contact />
      </div>
      <footer className="footer">© {new Date().getFullYear()} shivoham Multy pvt ltd. </footer>
    </div>
  );
}

export default App