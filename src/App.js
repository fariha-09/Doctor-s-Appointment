import logo from './logo.svg';
import './App.css';
import Header from './components/Layout/Header';
import HeroSection from './components/Layout/HeroSection';
import AboutUS from './components/Layout/AboutUS';

function App() {
  return (
    <div className="App">
     <Header/>
     <HeroSection/>
     <AboutUS/>
    </div>
  );
}

export default App;
