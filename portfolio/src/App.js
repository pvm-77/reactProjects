import './App.css';
import Navbar from './components/Navbar';
import Particle from './components/Particle';
import Home from './components/Home.js/Home';
import About from './components/About.js/About';
import Projects from './components/Projects.js/Projects';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Particle />

        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
