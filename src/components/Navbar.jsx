import React from 'react'
import "../styles/news.css";
import image from "/images/logo.svg"
import Button from './Button';


export default function Navbar() {
 
  return (
    <div className='flex-nav'>
        <p className='logo'>     <img src={image}  alt="" /></p>
        <div className="nav">
            <p className="ab">About <i className="fa-solid fa-caret-down"></i></p>
            <p className="tk">Token <i className="fa-solid fa-caret-down"></i></p>
            <p className="nft">NFT <i className="fa-solid fa-caret-down"></i></p>
            <p className="rm">Roadmap</p>
            <p className="nw">News <i className="fa-solid fa-caret-down"></i></p>
            <p className="ct">contacts</p>
           
        </div>
         <Button con={<a href="" className='gr' >Staking</a> }bg="bg-gold"  />
    </div>
  )
}
