import "./footer.css";
import {FaTelegramPlane} from "react-icons/fa";
import {AiFillInstagram} from "react-icons/ai";
import {BsFacebook} from "react-icons/bs";
import {RiWhatsappFill} from "react-icons/ri";
import {BsTwitter} from "react-icons/bs";

const Footer = () => {
  return ( 
    <div className="footer">
    <div className="footer-social-media">
      <div className="footer-social-medai-text">Follow us on social media</div>
      <div className="footer-social-media-icons">
        <div className="footer-social-media-icon">
          <AiFillInstagram style={{ color: "#c0392b" }} className="bi bi-instagram i"/>
        </div>
        <div className="footer-social-media-icon">
          <FaTelegramPlane style={{ color: "blue" }} className="bi bi-telegram i"/>
        </div>
        <div className="footer-social-media-icon">
          <BsFacebook style={{ color: "#2980b9" }} className="bi bi-facebook i"/>
        </div>
        <div className="footer-social-media-icon">
          <RiWhatsappFill style={{ color: "red" }} className="bi bi-youtube i"/>
        </div>
        <div className="footer-social-media-icon">
          <BsTwitter style={{ color: "skyblue" }} className="bi bi-twitter i"/>
        </div>
      </div>
    </div>
    <div className="footer-links-wrapper">
      <div className="footer-links-item">
        <h3 className="footer-links-item-title">Usefull Links</h3>
        <ul className="footer-links">
          <li className="footer-link">Home</li>
          <li className="footer-link">Faculty</li>
          <li className="footer-link">About us</li>
          <li className="footer-link">Contact</li>
          <li className="footer-link">Register</li>
        </ul>
      </div>
      <div className="footer-links-item">
        <h3 className="footer-links-item-title">Contact Information</h3>
        <div className="footer-address-wrapper">
          <div className="footer-address-item">
            <i className="bi bi-geo-alt-fill"></i>
            Dharan-08 Tinkune
          </div>
          <div className="footer-address-item">
            <i className="bi bi-telephone-fill"></i>
            9800000000
          </div>
          <div className="footer-address-item">
            <i className="bi bi-envelope-fill"></i>
            abc@gmail.com
          </div>
        </div>
      </div>
      <div className="footer-links-item">
        <h3 className="footer-links-item-title">About Us</h3>
        <p className="footer-description">
          We will deliver books of different faculty and as per your
          requirements. For buying and selling any books 
          feel free to contact us.
          We provide the best book delivery experience in the town.
        </p>
      </div>
    </div>
  </div>
   );
}
 
export default Footer;