import { useState } from "react"
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
import Contact from "./components/Contact"

function App() {
  const [cl, setCl] = useState('')
const [df, setDf] = useState('')
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
  <div className="bm">
 <div className="moon">
      <Navbar/>
      <Back />
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
