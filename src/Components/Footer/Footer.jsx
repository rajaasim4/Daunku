import React from "react";
import "./Footer.scss";
const Footer = () => {
  return (
    <>
      <footer id="Footer">
        <div className="Footer-main">
          <div className="Footer-section1 Footer-section">
            <h2>NewsLetter</h2>
            <div className="Newsletter-subscribe">
              <input type="text" placeholder="Enter Your Email" />
              <button>Subscribe</button>
            </div>
          </div>
          <div className="Footer-section2 Footer-section">
            <h5>Support</h5>
            <ul>
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">Careers</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
            </ul>
          </div>
          <div className="Footer-section3 Footer-section">
            <h5>Usefull Link</h5>
            <ul>
              <li>
                <a href="">Payment & Tax</a>
              </li>
              <li>
                <a href="">Terms of Service</a>
              </li>
              <li>
                <a href="">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div className="Footer-section4 Footer-section">
            <h5>Our Menu</h5>
            <ul>
              <li>
                <a href="">Best Product</a>
              </li>
              <li>
                <a href="">Category</a>
              </li>
            </ul>
          </div>
          <div className="Footer-section5 Footer-section">
            <h5>Address</h5>
            <address>
              JL. Setiabudhi No. 193 Sukasari, Bandung West Java, Indonesia
              <br />
              <br />
              hallo@daunku.com
            </address>
          </div>
        </div>
        <div className="Copyright">
          <p>
            Copyright &copy; {new Date().getFullYear()}.All rights are reserved
            by Daunku.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
