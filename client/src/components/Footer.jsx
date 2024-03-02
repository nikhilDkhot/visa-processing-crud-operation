import { Container } from "react-bootstrap";
import './Footer.css';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';


export function Footer() {
  return (

      <footer id="footer">
      {/* <div className="footer-newsletter">
          <div className="container">
          
            <div className="row">
              <div className="col-lg-6">
                <h4>Our Newsletter</h4>
                <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
              </div>
              <div className="col-lg-6">
                <form action="" method="post">
                  <input type="email" name="email" />
                  <input type="submit" value="Subscribe" />
                </form>
              </div>
            </div>
          </div>
        </div> */}
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Home</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">About us</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Visa Services</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Application </a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Visa Application</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Visa Processing</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Travel Management</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Online Services</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Online Booking</a></li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 footer-contact">
                <h4>Contact Us</h4>
                <p>
                  A105 Laxmi Nagar <br />
                  Mumbai, MH 400057<br />
                  India <br /><br />
                  <strong>Phone:</strong> +91 80825 87050<br />
                  <strong>Email:</strong> team76@yahoo.com<br />
                </p>
              </div>
              <div className="col-lg-3 col-md-6 footer-info">
                <h3>About Our Team</h3>
                <p style={{textAlign:'justify'}}>Our team is team 76 for this mini project. We have four members in our team. Nikhil is hero of our class, he is viral now and Abhishek Sir's favourite student</p>
                {/* <div className="social-links mt-3">
                  <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                  <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                  <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                  <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                </div> */}
                <div className="social-links mt-3">
                    <a href="#" className="twitter"><FaTwitter /></a>
                    <a href="#" className="facebook"><FaFacebook /></a>
                    <a href="#" className="instagram"><FaInstagram /></a>
                    <a href="#" className="linkedin"><FaLinkedin /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright">
            &copy; Copyright <strong><span>Team 76</span></strong>. All Rights Reserved
          </div>
          <div className="credits">
            <b>Designed by <a href="#">Team 76</a></b>
          </div>
        </div>
      </footer>
    
  );
}
