import './style/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SoftSkills from './pages/SoftSkillsPage';
import Electronics from './pages/ElectronicsPage';
import Mechanical from './pages/MechanicalPage';
import Home from './pages/HomePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/soft-skills" element={<SoftSkills />} />
        <Route path="/Electronics" element={<Electronics />} />
        <Route path="/Mechanical" element={<Mechanical />} />
      </Routes>
    </Router>
  );
}

export default App;
