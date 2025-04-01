import './style/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { FaTools } from "react-icons/fa";
import { GiLightningArc } from "react-icons/gi";
import { FaPeopleGroup } from "react-icons/fa6";

function App() {
  const nav = useNavigate(); 

  function navclick(val){
    nav(val); 
  }

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main className='col-12 d-flex flex-row justify-content-around align-items-center'>
        <GiLightningArc className='icons' onClick={() => navclick('/Electronics')}/>
        <FaPeopleGroup className='icons' onClick={() => navclick('/Soft-Skills')}/>
        <FaTools className='icons' onClick={() => navclick('/Mechanical')}/>
      </main>
      <footer>
        <p className='d-flex justify-content-center'>
          Made with ❤️ By Sam
        </p>
      </footer>
    </div>
  );
}

export default App;
