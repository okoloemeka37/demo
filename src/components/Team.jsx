import React from 'react'

import Button from './Button'
import "../styles/team.css"
import "../styles/etc.css"

export default function Team() {
  return (
    <div className='team'>
        <p className="v">CORE TEAM</p>

        <div className="dlid">
            <div className="ind">
                <img src="/images/se.png" alt="" />
                <div className="wrd">
                  <p className="name fav">STANISLAV LEPKA</p>
                  <p className="des">CEO, FOUNDER</p>
                </div>
            </div>
            <div className="ind">
                <img src="/images/se.png" alt="" />
                <div className="wrd">
                  <p className="name fav">STANISLAV LEPKA</p>
                  <p className="des">CEO, FOUNDER</p>
                </div>
            </div>
            <div className="ind">
                <img src="/images/se.png" alt="" />
                <div className="wrd">
                  <p className="name fav">STANISLAV LEPKA</p>
                  <p className="des">CEO, FOUNDER</p>
                </div>
            </div>
            <div className="ind">
                <img src="/images/se.png" alt="" /> <div className="wrd">
                  <p className="name fav">STANISLAV LEPKA</p>
                  <p className="des">CEO, FOUNDER</p>
                </div>

            </div>
         </div>  
         <div className='fv'>
          <Button con={<a href="" className='gr' >Subscribe</a> }bg="bg-blue"  />
        </div>
    </div>
  )
}
