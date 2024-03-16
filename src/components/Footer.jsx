// Footer.js

import React from "react";
import { AiFillHeart } from 'react-icons/ai'; // Heart Icon from react-icons
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa'; // Social Media Icons from react-icons

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-dark text-light">
      <div className="container text-center">
        <span className="d-block mb-2">
          Made with <AiFillHeart style={{ color: 'red', marginBottom: '-3px' }} /> ArbazMurme
        </span>
        <div>
          {/* Social Media Icons */}
          <a href="https://twitter.com" className="text-light mx-2">
            <FaTwitter className="social-icon" />
          </a>
          <a href="https://facebook.com" className="text-light mx-2">
            <FaFacebook className="social-icon" />
          </a>
          <a href="https://instagram.com" className="text-light mx-2">
            <FaInstagram className="social-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
