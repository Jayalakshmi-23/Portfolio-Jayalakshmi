import './App.css';
import About from './components/About Us/About';
import Header from './components/Header/Header';
import Hero from './components/HeroSection/Hero';
import Portfolio from './components/Portfolio/portfolio';
import Contact from './components/Contact/Contact';
import Summary from './components/Summary/Summary';
import Reveal from './components/Reveal/Reveal';
import ScrollTop from './components/ScrollTop/ScrollTop';

function App() {
  return (
    <div>
      <div className="App">
        <Header />
        <Hero />
    </div>
    <Reveal><About /></Reveal>
    <Reveal><Summary /></Reveal>
    <Reveal><Portfolio /></Reveal>
    <Reveal><Contact /></Reveal>
    <ScrollTop />
    </div>
  );
}

export default App;
