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

function App() {
  return (
    <div>
      <div className=''>
        <Header />
        <Hero />
        <About />
        <Services />
        <Process />
        <Team />
        <Contact />
      </div>
      <footer className="footer">© {new Date().getFullYear()} APN Solar </footer>
    </div>
  );
}

export default App