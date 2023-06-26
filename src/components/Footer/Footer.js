import React from "react";
import "./Footer.css";
import {  FaInstagram, FaLinkedin } from "react-icons/fa"; 
import {HiOutlineMail} from "react-icons/hi";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
         
          <div className="col">
            <h2>E-commerce</h2>
            <h3 className="list-unstyled">
              <div className="row">
                            <a
                       href="https://Linkedin.com/"
                       className="flex justify-between items-center w-full 
                         text-white"
                         >
           <>
           <FaLinkedin size={30} />
           </>
                       </a>
                           <a
                       href="https://github.com/"
                       className="flex justify-between items-center w-full 
                         text-white"
                         >
           <>
           <FaInstagram size={30} />
           </>
            
           </a>            
                        <a
                       href='mailto:ashu.chauhan018@gmail.com'
                       className="flex justify-between items-center w-full 
                         text-white"
                         >
           <>
          <HiOutlineMail size={30} />
           </>
                       </a>
                           </div>
            </h3>
                      </div>
                  <div className="col">
            <h4>Connect with Us</h4>
            <ui className="list-unstyled">
              <li>Facebook</li>
              <li> Donate</li>
              <li>Instagram</li>
            </ui>
          </div>
          
          <div className="col">
            <h4>Get to Know Us</h4>
            <ui className="list-unstyled">
              <li>About Us</li>
              <li>Press Releases</li>
              <li>Our Business</li>
            </ui>
          </div>
          <div className="col">
            <h4>Let Us Help You</h4>
            <ui className="list-unstyled">
              <li>Help Center</li>
              <li>Trust and safety</li>
              <li>Privacy settings</li>
            </ui>
          </div>
          <div className="col">
            <h4>Make Money with Us</h4>
            <ui className="list-unstyled">
              <li>Sell on our site</li>
              <li>Sell under our site Accelerator</li>
              <li>Protect and Build Your Brand</li>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} © 2022 Commerce, Inc. | Privacy policy |
            Terms Of Service | Cookies | 
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;