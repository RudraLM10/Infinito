import "./Footer.css";
import { SlLocationPin } from "react-icons/sl";
import { FaSquareFacebook, FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaSquareYoutube } from "react-icons/fa6";
import { SlEnvolopeLetter } from "react-icons/sl";
import { FaPhone } from "react-icons/fa6";
const footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-quote">
          <p>
            Everyone has the <strong>FIRE</strong> but the{" "}
            <strong>CHAMPIONS</strong> know when to ignite the spark
          </p>
          <div className="footer-social">
            <p>FOLLOW US</p>
            <div className="social-icons">
              <a href="https://www.facebook.com/InfinitoIITPatna/">
                <i className="fab fa-facebook-f"></i>
                <FaSquareFacebook />
              </a>
              <a href="https://x.com/infinito_iitp?lang=en">
                <i className="fab fa-twitter"></i>
                <FaSquareTwitter />
              </a>
              <a href="https://in.linkedin.com/company/infinito-iit-patna">
                <i className="fab fa-linkedin-in"></i>
                <FaLinkedin />
              </a>
              <a href="https://www.instagram.com/infinito_iitp/?hl=en">
                <i className="fab fa-instagram"></i>
                <FaSquareInstagram />
              </a>
              <a href="https://www.youtube.com/c/infinitoiitp">
                <i className="fab fa-youtube"></i>
                <FaSquareYoutube />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-contact">
          <div className="footer-contact1">
            <div id="locationicon">
              {" "}
              <SlLocationPin />{" "}
            </div>
            <div>
              <p className="upperone">BIHTA, PATNA, BIHAR</p>
              <p className="bottomone">IIT Patna</p>
            </div>
          </div>
          <div className="footer-contact1">
            <div id="locationicon">
              {" "}
              <FaPhone />{" "}
            </div>
            <div>
              <pre className="upperone">+91 9413094171 </pre>
              <p className="bottomone">Give us a call</p>
            </div>
          </div>
          <div className="footer-contact1">
            <div id="locationicon">
              {" "}
              <SlEnvolopeLetter />{" "}
            </div>
            <div>
              <p className="upperone">INFINITO@IITP.AC.IN</p>
              <p className="bottomone">Mail us here</p>
            </div>
          </div>
        </div>

        <div className="footer-links">
          <p>USEFUL LINKS</p>
          <ul>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Events</a>
            </li>
            <li>
              <a href="#">Gallery</a>
            </li>
            <li>
              <a href="#">Our Team</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright © 2024 Infinito</p>
      </div>
    </footer>
  );
};

export default footer;
