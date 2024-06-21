import logo from "../../assets/icons/logo.svg";
import "./footer.css";

const Footer = () => {
  return (
    <section className="footer-bg">
      <footer className="footer c-container">
        <div className="footer-logo">
          <img src={logo} alt="A Logo" />
        </div>

        <div className="footer-links">
          <div>
            <p>Services</p>
            <p>About Us</p>
            <p>Sign up</p>
          </div>

          <div>
            <p>Quick Invoice</p>
            <p>Privacy Policy</p>
            <p>Log In</p>
          </div>

          <div>
            <p>Legal</p>
          </div>
        </div>

        <div className="footer-links-lg">
          <p>Services</p>
          <p>About Us</p>
          <p>Sign up</p>

          <p>Quick Invoice</p>
          <p>Privacy Policy</p>
          <p>Log In</p>

          <p>Legal</p>
        </div>

        <div className="custom-border"></div>
        <div className="footer-footer_note">
          <p>@ 2023 Lancebox. All rights reserved</p>
          <div>
            <p>Cookies</p>
            <p>Terms</p>
            <p>Privarcy</p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
