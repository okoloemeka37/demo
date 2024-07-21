import { useState,useEffect } from "react"
import Back from "./components/Back"
import Footer from "./components/Footer"
import Game from "./components/Game"
import Navbar from "./components/Navbar"
import News from "./components/News"
import Team from "./components/Team"
import "./styles/App.css"
import About from "./components/About"
import Features from "./components/Features"
import Blog from "./components/blog"
import Contact from "./components/Contact";
import "./styles/slider.css";

function App() {
  const [cl, setCl] = useState('')
const [df, setDf] = useState('');

let count=0;

const mouse=()=>{
setCl("id");
setDf("it")
}

const off=()=>{
  setCl("rit");
  setDf("rit")
}




  return (
    <>
    <div className="round">
   <p><a href=""> <i className={"fa-brands fa-telegram im ed "+df}onMouseEnter={mouse} onMouseLeave={off} ></i></a></p> 
   <p><a href=""> <i className="fa-brands fa-discord mi im"onMouseEnter={mouse} onMouseLeave={off}></i></a></p> 
   <p><a href=""> <i className={"fa-brands fa-medium im fd "+cl}onMouseEnter={mouse} onMouseLeave={off}></i></a></p> 
    </div>
    {/* <News /> */} 
    <Navbar/>
  <div className="slider">
 
          <div className="eft slide" style={{'backgroundImage':'url("/images/hero3.webp")'}}>
            <div className="moon">
            <p className="one">WELCOME TO <span>ARUKU R&B</span></p>
            
            <p className="tense">We are dedicated to revolutionising the gaming industry with immersive experiences and innovative solutions.
            </p>
           
              <div className='but icsp' >
                  <a href=''><i className="fa-brands fa-telegram"></i></a>
                  <a href=""> <i className="fa-brands fa-discord"></i></a>
                  <a href=""><i className="fa-brands fa-x-twitter"></i></a>
                  <a href=""><i className="fa-brands fa-youtube"></i></a>
                  <a href=""><i className="fa-brands fa-instagram"></i></a>
                  <a href=""><i className="fa-brands fa-medium"></i></a>
              </div>

         </div>  

      </div>

    <div className="eft slide" style={{'backgroundImage':'url("/images/hero2.png")'}}>
            <div className="moon">
            <p className="one fv">INVICIBLE 11 </p>
            
            <p className="tense">Invincible Eleven is a revolutionary football manager game that combines
traditional management mechanics with blockchain technology, NFTs, and AI
innovations.
            </p>
            <div class="container fv gl">
    <div class="center" style={{position:"unset"}}>
      <button class="btn">
        <svg width="180px" height="60px" viewBox="0 0 180 60" class="border svg">
          <polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" />
          <polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" />
        </svg>
        <span>JOIN US</span>
      </button>
    </div>
  </div>
           
              <div className='but icsp' >
                  <a href=''><i className="fa-brands fa-telegram"></i></a>
                  <a href=""> <i className="fa-brands fa-discord"></i></a>
                  <a href=""><i className="fa-brands fa-x-twitter"></i></a>
                  <a href=""><i className="fa-brands fa-youtube"></i></a>
                  <a href=""><i className="fa-brands fa-instagram"></i></a>
                  <a href=""><i className="fa-brands fa-medium"></i></a>
              </div> 
            

         </div>  

      </div>
 
     <div className="eft slide" style={{'backgroundImage':'url("/images/hero1.png")'}}>
            <div className="moon">
            <p className="one">WELCOME TO <span>ARUKU R&B</span></p>
            
            <p className="tense">We are dedicated to revolutionising the gaming industry with immersive experiences and innovative solutions.
            </p>
           
             <div className='but icsp' >
                  <a href=''><i className="fa-brands fa-telegram"></i></a>
                  <a href=""> <i className="fa-brands fa-discord"></i></a>
                  <a href=""><i className="fa-brands fa-x-twitter"></i></a>
                  <a href=""><i className="fa-brands fa-youtube"></i></a>
                  <a href=""><i className="fa-brands fa-instagram"></i></a>
                  <a href=""><i className="fa-brands fa-medium"></i></a>
              </div> 

         </div>  

      </div> 
      <div className="eft slide" style={{'backgroundImage':'url("/images/hero1.png")'}}>
            <div className="moon">
            <p className="one">WELCOME TO <span>ARUKU R&B</span></p>
            
            <p className="tense">We are dedicated to revolutionising the gaming industry with immersive experiences and innovative solutions.
            </p>
           
             <div className='but icsp' >
                  <a href=''><i className="fa-brands fa-telegram"></i></a>
                  <a href=""> <i className="fa-brands fa-discord"></i></a>
                  <a href=""><i className="fa-brands fa-x-twitter"></i></a>
                  <a href=""><i className="fa-brands fa-youtube"></i></a>
                  <a href=""><i className="fa-brands fa-instagram"></i></a>
                  <a href=""><i className="fa-brands fa-medium"></i></a>
              </div> 

         </div>  

      </div> 
    
      <div className="eft slide" style={{'backgroundImage':'url("/images/hero1.png")'}}>
            <div className="moon">
            <p className="one">WELCOME TO <span>ARUKU R&B</span></p>
            
            <p className="tense">We are dedicated to revolutionising the gaming industry with immersive experiences and innovative solutions.
            </p>
           
             <div className='but icsp' >
                  <a href=''><i className="fa-brands fa-telegram"></i></a>
                  <a href=""> <i className="fa-brands fa-discord"></i></a>
                  <a href=""><i className="fa-brands fa-x-twitter"></i></a>
                  <a href=""><i className="fa-brands fa-youtube"></i></a>
                  <a href=""><i className="fa-brands fa-instagram"></i></a>
                  <a href=""><i className="fa-brands fa-medium"></i></a>
              </div> 

         </div>  

      </div> 
    

</div>     
{/*     <Game /> */}
    
    <About />
    <Features />
    <Blog />
    <Team />
    <Contact />
    <Footer />
    </>
  )
}

export default App
