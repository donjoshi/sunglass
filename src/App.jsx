import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import Home from './pages/Home';
import Footer from './components/footer';
import LearnMore from './pages/LearnMore';
import Contact from './pages/Contact';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<LearnMore />} />
      <Route path="/contact" element={<Contact />} />
      
    </Routes>
  );
}

export default App;
