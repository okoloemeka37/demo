import React from 'react'
import "../styles/footer.css"
import Button from './Button'


export default function Footer() {
  return (
    <div className="">
    <div className='footer'>
<div className="xd">
<div className="blg">
  <p className="ft">WHAT ARE <br /> <span> THE NEWS?</span></p>

<div className="mv">
  <div className="gyh">
    <p className="fj">Recommended</p>
    <p className="lk">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, aut expedita.</p>

    <div className="la">
      <p className="cl"><img src="/images/binance.png" alt="" /></p>
        <a href="">read more</a>
    </div>
  </div>
  <div className="gyh">
    <p className="fj">Recommended</p>
    <p className="lk">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, aut expedita.</p>

    <div className="la">
      <p className="cl"><img src="/images/binance.png" alt="" /></p>
        <a href="">read more</a>
    </div>
  </div>

  <div className="gyh">
    <p className="fj">Recommended</p>
    <p className="lk">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, aut expedita.</p>

    <div className="la">
      <p className="cl"><img src="/images/binance.png" alt="" /></p>
        <a href="">read more</a>
    </div>
  </div>



</div>

<div className="fl">

<div className="lh">
<i class="fa-solid fa-arrow-left dh"></i>

<i class="fa-solid fa-arrow-right dh "></i>

</div>

<p className="mk">SHOW ALL</p>

</div>

</div>
</div>
    </div>




<div className="dwnnav">

<div className="grt">
        <div className="xc">
         
          <p className='dct sx'><span>DO YOU WANT TO BE THE FIRST </span> <br /> TO KNOW ABOUT THE GAME?</p>  
          <div className='but icsp' >
          <input type="text" className='hid' placeholder='Enter Email' />
          <Button con={<a href="" className='gr' >Subscribe</a> }bg="bg-blue"  />
          </div>
        </div> 

</div>
       
  
  <div className="gv">
  <div className="fir">
  <p className='logog'><img src="/images/logo.svg" alt="" /></p>
              <div className='but ip' >
                  <a href=''><i className="fa-brands fa-telegram"></i></a>
                  <a href=""> <i className="fa-brands fa-discord"></i></a>
                  <a href=""><i className="fa-brands fa-x-twitter"></i></a>
                  <a href=""><i className="fa-brands fa-youtube"></i></a>
                  <a href=""><i className="fa-brands fa-instagram"></i></a>
                  <a href=""><i className="fa-brands fa-medium"></i></a>
              </div>
  </div>

  <div className="abt">
    <p className="rt">About</p>
    <p className="seri">Our Team</p>
    <p className="seri">Our Team</p>
    <p className="seri">Our Team</p>
    <p className="seri">Our Team</p>
  </div>
  
  <div className="abt">
    <p className="rt">Contact</p>
    <p className="seri">Our Team</p>
    <p className="seri">Our Team</p>
    <p className="seri">Our Team</p>
    <p className="seri">Our Team</p>
  </div>
  
  <div className="abt">
    <p className="rt">Others</p>
    <p className="seri">Our Team</p>
    <p className="seri">Our Team</p>
    <p className="seri">Our Team</p>
    <p className="seri">Our Team</p>
  </div>
  <div className="abt">
    <p className="rt">Contact</p>
    <p className="seri">PROMO@SPACECATCH.IO</p>
    <p className="seri">PROMO@SPACECATCH.IO</p>
    <p className="seri">PROMO@SPACECATCH.IO</p>
    <Button con={<a href="" className='gr' >Try the Game</a> }bg="bg-gold"  />
  </div>
  





  </div>
  

<div className="last">
<div className="mx">
  <p className="lc">CIN: 19234023, SPACECATCH S.R.O.</p>
  <p className="wh">REGISTRATION: VÁCLAVSKÉ NÁMĚSTÍ 832/19, PRAGUE 1, CZECH REPUBLIC 🇨🇿, EUROPEAN UNION 🇪🇺</p>
</div>
<div className="dz">
  <p className="e">COPYRIGHT © 2024</p>
  <p className="f">ALL RIGHTS RESERVED BY SPACECATCH</p>
</div>
</div>






</div>




    </div>
  )
}
