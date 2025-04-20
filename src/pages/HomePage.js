import '../style/homepage.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { FaTools } from "react-icons/fa";
import { GiLightningArc } from "react-icons/gi";
import { MdBrowserUpdated } from "react-icons/md";
import { LuRollerCoaster } from "react-icons/lu";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import test1 from '../images/test2.jpg'; 
import test2 from '../images/test3.jpg';
import test3 from '../images/test1.jpg'


function Homepage() {
  const nav = useNavigate(); 

  function navclick(val){
    nav(val); 
  }

  function notes(){

    toast(
    <div className='col-12 d-flex flex-column justify-content-center align-items-center'>
      <strong>Version 1.0.1</strong> 
      <strong>Whats new!</strong>
      <br/>
      <ul>
        <li>Added new styling to the home page.</li>
        <li>Added "Lazy Loading" to the videos.</li>
        <li>Added an applications section to the site.</li>
        <li>Added update log button</li>
      </ul>

    </div>,
      {
      position: "top-right",
      closeButton: true, 
      pauseOnHover: true, 
      draggable: true, 
    });

  }

  return (
    <div className="App">
      <header className="col-12  d-flex justify-content-center align-items-center border">
        <h1 className='title'>Apprentice Video Library</h1>
      </header>

      <main className=' col-12 d-flex flex-column justify-content-around align-items-center'>
        
        <div className=' indexDiv ' style={{backgroundImage: `url(${test2})`}}>
          <GiLightningArc className='icons' onClick={() => navclick('/Electronics')}/>
          <p>Electronics</p>
        </div>
        
        <div className='indexDiv ' style={{backgroundImage: `url(${test1})`}}>
          <FaTools  className='icons' onClick={() => navclick('/Mechanical')}/>
          <p>Mechanical</p>
        </div>

        <div className='indexDiv ' style={{backgroundImage: `url(${test3})`}}>
        <LuRollerCoaster className='icons' onClick={() => navclick('/Applications')}/>
        <p>Applications</p>
        </div>
      </main>

      <footer className="col-12 d-flex flex-row justify-content-center align-items-center gap-2">
        <p className="m-0 d-flex align-items-center">
          Made with ❤️ Version 1.0.1
        </p>
        <MdBrowserUpdated
          onClick={() => notes()}
          size={20}
        />
      </footer>


      <ToastContainer />
    </div>
  );
}

export default Homepage;
