import React from 'react'
import "../styles/about.css";
export default function About() {
  return (
    <div className="responsive-container-block bigContainer">
    <div className="responsive-container-block Container">
      <div className="imgContainer">
       
        <img
          className="mainImg"
          src="/images/bn.jpg"
        />
      </div>
      <div className="responsive-container-block textSide">
        <p className="text-blk heading">WHO WE ARE</p>
        <p className="text-blk subHeading">
        Aruku R&B Limited is a pioneering game development company,
committed to pushing the boundaries of traditional gaming with blockchain
integration, AI-powered gameplay, and NFTs.
</p>
        <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
          <div className="cardImgContainer">
           <img src="/images/icons/in.png" className='cardImg' alt="" />
          </div>
          <div className="cardText">
            <p className="text-blk cardHeading">Innovation</p>
            <p className="text-blk cardSubHeading">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
        <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
          <div className="cardImgContainer">
            <img
              className="cardImg"
              src="/images/icons/ex.png"
            />
          </div>
          <div className="cardText">
            <p className="text-blk cardHeading">Excellence</p>
            <p className="text-blk cardSubHeading">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
        <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
          <div className="cardImgContainer">
            <img
              className="cardImg"
              src="images/icons/cc.png"
            />
          </div>
          <div className="cardText">
            <p className="text-blk cardHeading">Community</p>
            <p className="text-blk cardSubHeading">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
        <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
          <div className="cardImgContainer">
            <img
              className="cardImg"
              src="images/icons/n.png"
            />
          </div>
          <div className="cardText">
            <p className="text-blk cardHeading">Integrity</p>
            <p className="text-blk cardSubHeading">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
        <a>
          <button className="explore">LEARN MORE <i class="fa-solid fa-arrow-right"></i></button>
        </a>
      </div>
    
    </div>
  </div>
  
  )
}
