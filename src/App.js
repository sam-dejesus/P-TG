import './style/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SoftSkills from './pages/SoftSkillsPage';
import Electronics from './pages/ElectronicsPage';
import Mechanical from './pages/MechanicalPage';
import Applications from './pages/ApplicationsPage';
import Module from './pages/ModPage'; 



import Home from './pages/HomePage';

function App() {
  return (
    <Router basename="/P-TG">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/soft-skills" element={<SoftSkills />} />
        <Route path="/Electronics" element={<Electronics />} />
        <Route path="/Mechanical" element={<Mechanical />} />
        <Route path="/Applications" element={<Applications />} />
        <Route path="/Module" element={<Module />} />
      </Routes>
    </Router>
  );
}

export default App;
