import React from 'react'
import Button from './Button'

export default function Back() {
  return (
    <div>
        <div className="hold">
          
          <div className="left">
            
            <p className="one">MEET <br /> <span>SPACECATCH</span></p>
            <p className="tense">THE BEST AR GAME IN WEB3 <br /> WITH COMPLEX AI FEATURES</p>

        <div className="wt"><img src="/images/play.svg" alt="" /> <p className="tx">WATCH THE TRAILER</p></div>

           
              <div className='but icsp' >
                  <a href=''><i className="fa-brands fa-telegram"></i></a>
                  <a href=""> <i className="fa-brands fa-discord"></i></a>
                  <a href=""><i className="fa-brands fa-x-twitter"></i></a>
                  <a href=""><i className="fa-brands fa-youtube"></i></a>
                  <a href=""><i className="fa-brands fa-instagram"></i></a>
                  <a href=""><i className="fa-brands fa-medium"></i></a>
              </div>

            <div className="rf">
              <img src="/images/dt.jpeg" alt="" />
              <img src="/images/binance.png" alt="" />
              <img src="/images/binance.png" alt="" />
            </div>
   <img src="/images/cert.svg" alt="" className='cert' />
         </div>  

         <div className="right">
          <p className="io">PUBLIC BETA</p>
          <p className="lo">AVAILABLE NOW</p>
          <Button con={<a href="" className='gr' >TRY THE BETA NOW!</a> }bg="bg-gold"  />

          <div className="lk">
           <p className="li"></p>
            <p className='hl'>WHERE TO BUY</p>
          <p className="li"></p>
          </div>

            <p className="rd">$CATCH AVAILABLE ON: </p>

          <div className="in">

            <p className="inl">Initial CEXs</p>
                    <div className="fg">
                      <a href="" className='ex bb'><img src="/images/gate-white.png" alt="" /></a>
                      <a href="" className='bb'><img src="/images/gate-white.png" alt="" /></a>
                      <a href=""className='ex bb'><img src="/images/gate-white.png" alt="" /></a>
                      <a href=""  className='bb' ><img src="/images/gate-white.png" alt="" /></a>
                      <a href="" className='ex ' ><img src="/images/gate-white.png" alt="" /></a>
                      <a href="" ><img src="/images/gate-white.png" alt="" /></a>
                    </div>
          </div>

          <div className='but icsp' >
          <input type="text" className='hid' placeholder='Enter Email' />
          <Button con={<a href="" className='gr' >Subscribe</a> }bg="bg-blue"  />
          </div>

    <div className="ls">
    <p className=""><a href="">BUY ZYLER </a></p>
    <p className=""><a href="">STACKING </a></p>
    </div>




         </div>






        </div>
    </div>
  )
}
