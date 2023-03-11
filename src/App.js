import './App.css';
import About from './components/About Us/About';
import Header from './components/Header/Header';
import Hero from './components/HeroSection/Hero';
import Portfolio from './components/Portfolio/portfolio';
import Contact from './components/Contact/Contact';
import Summary from './components/Summary/Summary';

function App() {
  return (
    <div>
      <div className="App">
        <Header />
        <Hero />
    </div>
    <About />
    <Summary />
    <Portfolio />
    <Contact />
    </div>
  );
}

export default App;
