import "./Footer.scss";
import logo from "../../../assets/icons/pageLogo.svg";
import { Link } from "react-router-dom";
import facebook from "../../../assets/icons/fb.png";
import twitter from "../../../assets/icons/tw.png";
import linkedin from "../../../assets/icons/IN.png";
import instagram from "../../../assets/icons/insta.png";

export const Footer = () => {
  return (
    <>
      <footer>
        <div className="information">
          <div className="interno-footer">
            <div className="subcontent">
              <img src={logo} alt="" />
              <h3>
                It is a long established fact that a reader will be distracted
                lookings.
              </h3>
            </div>
            <div className="icons">
              <Link to={""}>
                <img src={facebook} alt="facebook" />
              </Link>
              <Link to={""}>
                <img src={twitter} alt="twitter" />
              </Link>
              <Link to={""}>
                <img src={linkedin} alt="linkedin" />
              </Link>
              <Link to={""}>
                <img src={instagram} alt="instagram" />
              </Link>
            </div>
          </div>
          <div className="pages-footer">
            <h2>Pages</h2>
            <Link to="" className="link">
              About us
            </Link>
           
            <Link to="" className="link">
              Contact us
            </Link>
            <Link to="" className="link">
              Services
            </Link>
          </div>
          <div className="service-footer">
            <h2>Service</h2>
            <Link to="" className="link">
              Kitchan
            </Link>
            <Link to="" className="link">
              Living Area
            </Link>
            <Link to="" className="link">
              Bathroom
            </Link>
            <Link to="" className="link">
              Dinning Hall
            </Link>
            <Link to="" className="link">
              Bedroom
            </Link>
          </div>
          <div className="contact-footer">
            <h2>Contact</h2>
            <div className="address">55 East Birchwood Ave. Brooklyn, New York 11201 </div>
            <div className="email">contact@interno.com</div>
            <div className="phone-number">(123) 456 - 7890</div>
          </div>
        </div>
        <div className="copyright">Copyright © Interno | Designed by Victorflow Templates - Powered by Webflow</div>
      </footer>
    </>
  );
};