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
          <h6>Categories</h6>
          <ul className="footer-links">
            <li>
              <a href="http://scanfcode.com/category/c-language/">C</a>
            </li>
            <li>
              <a href="http://scanfcode.com/category/front-end-development/">
                UI Design
              </a>
            </li>
            <li>
              <a href="http://scanfcode.com/category/back-end-development/">
                PHP
              </a>
            </li>
            <li>
              <a href="http://scanfcode.com/category/java-programming-language/">
                Java
              </a>
            </li>
            <li>
              <a href="http://scanfcode.com/category/android/">Android</a>
            </li>
            <li>
              <a href="http://scanfcode.com/category/templates/">Templates</a>
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
            Copyright © 2017 All Rights Reserved by
            <a href="#">Scanfcode</a>.
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
