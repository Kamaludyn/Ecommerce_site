import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import logo from "../assets/images/logo.svg";
import googlePlay from "../assets/images/images/payment/google-play.jpg";
import appleStore from "../assets/images/images/payment/apple-store.png";
import paypal from "../assets/images/images/payment/paypal.png";
import mastercard from "../assets/images/images/payment/mastercard.png";
import bitcoin from "../assets/images/images/payment/bitcoin.png";
import visa from "../assets/images/images/payment/visa.png";
import amex from "../assets/images/images/payment/amex.png";

const Footer = () => {
  return (
    <div className="footer">
      <hr />
      <img className="footer-logo logo" src={logo} alt=""></img>
      <footer className="section-p1">
        <div className="col">
          <h4>Contact</h4>
          <p>
            <strong>Address: </strong> Shelter Street, Phase 3, Federal Housing
            Estate, Yola, Nigeria
          </p>
          <p>
            <strong>Phone: </strong>+2348120657960
          </p>
          <p>
            Hours: <strong> 10:00 - 18:00, Mon - Sat</strong>
          </p>
          <div className="follow">
            <h4>Follow us</h4>
            <div className="icons">
              <FaFacebookF className="icon fb" />
              <FaInstagram className="icon ig" />
              <FaPinterestP className="icon pin" />
              <FaTwitter className="icon x" />
              <FaYoutube className="icon yt" />
            </div>
          </div>
        </div>

        <div className="col">
          <h4>About</h4>
          <a href="#">About us</a>
          <a href="#">Delivery Information</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms and Conditions</a>
          <a href="#">Contact Us</a>
        </div>

        <div className="col">
          <h4>My Account</h4>
          <a href="#">Sign In</a>
          <a href="#">View Cart</a>
          <a href="#">My Wishlist</a>
          <a href="#">Track My Order</a>
          <a href="#">Help</a>
        </div>

        <div className="col install">
          <h4>Install App</h4>
          <p>From App Store or Google Play</p>
          <div className="row">
            <img src={googlePlay} alt=""></img>
            <img src={appleStore} alt=""></img>
          </div>
          <div className="pay-container">
            <p>Secure Payment Gateways</p>
            <img src={paypal} alt="paypal" />
            <img src={mastercard} alt="mastercard" />
            <img src={bitcoin} alt="bitcoin" />
            <img src={visa} alt="visa" />
            <img src={amex} alt="amex" />
          </div>
        </div>

        <div className="copyright">
          <p>(c) 2024, Kamaludeen Abubakar </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
