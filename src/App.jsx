import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />} />
      
    </Routes>
  );
}

export default App;
