import '../style/homepage.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { FaTools } from "react-icons/fa";
import { GiLightningArc } from "react-icons/gi";
// import { FaPeopleGroup } from "react-icons/fa6";

function Homepage() {
  const nav = useNavigate(); 

  function navclick(val){
    nav(val); 
  }

  return (
    <div className="App">
      <header className="col-12  d-flex justify-content-center align-items-center border">
        <h1 className='title'>Apprentice Video Library</h1>
      </header>
      <main className='col-12 d-flex flex-row justify-content-around align-items-center'>
        <div>
          <GiLightningArc className='icons' onClick={() => navclick('/Electronics')}/>
          <p>Electronics</p>
        </div>
        {/* <FaPeopleGroup className='icons' onClick={() => navclick('/Soft-Skills')}/> */}
        <div>
          <FaTools className='icons' onClick={() => navclick('/Mechanical')}/>
          <p>Mechanical</p>
        </div>
      </main>
      <footer>
        <p className='d-flex justify-content-center'>
          Made with ❤️ Version 1.0.0
        </p>
      </footer>
    </div>
  );
}

export default Homepage;
