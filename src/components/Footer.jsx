import React from 'react'
import "../styles/footer.css"
import Button from './Button'


export default function Footer() {
  return (
    <footer className="site-footer">
    <div className="cer">
      <div className="row">
        <div className="o">
          <h6>About</h6>
          <p className="">
          Aruku R&B Limited is a pioneering game development company,
committed to pushing the boundaries of traditional gaming with blockchain
integration, AI-powered gameplay, and NFTs.
          </p>
        </div>
        <div className="col-xs-6 col-md-3">
          <h6>GAMES</h6>
          <ul className="footer-links">
            <li>
              <a href="http://scanfcode.com/category/c-language/">Invicible 11</a>
            </li>
          
          </ul>
        </div>
        <div className="col-xs-6 col-md-3">
          <h6>Quick Links</h6>
          <ul className="footer-links">
            <li>
              <a href="http://scanfcode.com/about/">About Us</a>
            </li>
            <li>
              <a href="http://scanfcode.com/contact/">Contact Us</a>
            </li>
            <li>
              <a href="http://scanfcode.com/contribute-at-scanfcode/">
                Contribute
              </a>
            </li>
            <li>
              <a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a>
            </li>
            <li>
              <a href="http://scanfcode.com/sitemap/">Sitemap</a>
            </li>
          </ul>
        </div>
      </div>
      <hr />
    </div>
    <div className="cer">
      <div className="row">
        <div className="col-md-8 col-sm-6 col-xs-12">
          <p className="copyright-text">
            Copyright © 2024 All Rights Reserved by
            <a href="#"> ARUKU R&B</a>.
          </p>
        </div>
        <div className="col-md-4 col-sm-6 col-xs-12">
          <ul className="social-icons">
            <li>
              <a className="facebook" href="#">
                <i className="fa fa-facebook" />
              </a>
            </li>
            <li>
              <a className="twitter" href="#">
                <i className="fa fa-twitter" />
              </a>
            </li>
            <li>
              <a className="dribbble" href="#">
                <i className="fa fa-dribbble" />
              </a>
            </li>
            <li>
              <a className="linkedin" href="#">
                <i className="fa fa-linkedin" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
  
  )
}
