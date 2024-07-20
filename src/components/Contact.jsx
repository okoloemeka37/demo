import React from 'react'
import "../styles/contact.css"
export default function Contact() {
  return (
    <div>
    <section id="contact">
  <h1 className="rf gb">Drop Us A Message</h1>
  <div className="contact-wrapper">
    {/* Left contact page */}
    <form id="contact-form" className="form-horizontal" role="form">
      <div className="form-group">
        <div className="col-sm-12">
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="NAME"
            name="name"
            defaultValue=""
            required=""
          />
        </div>
      </div>
      <div className="form-group">
        <div className="col-sm-12">
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="EMAIL"
            name="email"
            defaultValue=""
            required=""
          />
        </div>
      </div>
      <textarea
        className="form-control"
        rows={10}
        placeholder="MESSAGE"
        name="message"
        required=""
        defaultValue={""}
      />
      <button class="button-9" role="button">Button 9</button>
    </form>
    {/* Left contact page */}
    <div className="direct-contact-container">
      <ul className="contact-list">
        <li className="list-item">
          <i className="fa fa-map-marker fa-2x">
            <span className="contact-text place">City, State</span>
          </i>
        </li>
        <li className="list-item">
          <i className="fa fa-phone fa-2x">
            <span className="contact-text phone">
              <a href="tel:1-212-555-5555" title="Give me a call">
                (212) 555-2368
              </a>
            </span>
          </i>
        </li>
        <li className="list-item">
          <i className="fa fa-envelope fa-2x">
            <span className="contact-text gmail">
              <a href="mailto:#" title="Send me an email">
                hitmeup@gmail.com
              </a>
            </span>
          </i>
        </li>
      </ul>
      <hr />
      <ul className="social-media-list">
        <li>
          <a href="#" target="_blank" className="contact-icon">
            <i className="fa fa-github" aria-hidden="true" />
          </a>
        </li>
        <li>
          <a href="#" target="_blank" className="contact-icon">
            <i className="fa fa-codepen" aria-hidden="true" />
          </a>
        </li>
        <li>
          <a href="#" target="_blank" className="contact-icon">
            <i className="fa fa-twitter" aria-hidden="true" />
          </a>
        </li>
        <li>
          <a href="#" target="_blank" className="contact-icon">
            <i className="fa fa-instagram" aria-hidden="true" />
          </a>
        </li>
      </ul>
      <hr />
      <div className="copyright">© ALL OF THE RIGHTS RESERVED</div>
    </div>
  </div>
</section>


    </div>
  )
}
