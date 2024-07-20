import React from 'react'
import "../styles/news.css";
import image from "/images/logo.svg"
import Button from './Button';


export default function Navbar() {
 
  return (
    <div className='flexNav'>
                   <p className='logo'><img src="/images/icons/we.png"  alt="" /></p>

        <div className="nav">
            <div className="gan">
              <p className="ab r">Game <i class="fa-solid fa-angle-right"></i></p>
              <div className="mr"><a href="">Invicible 11</a></div>
            </div>
            <p className="ab r">About </p>
            <p className="tk r">Token </p>
            <p className="nft r">NFT </p> 
            <p className="rm r">Roadmap</p>
            <p className="nw r">News </p>
            <p className="ct r">contacts</p>
           
        </div>
       
    </div>
  )
}
