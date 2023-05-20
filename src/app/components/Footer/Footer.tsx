import './Footer.scss';
import { Link } from 'react-router-dom';
import IN from '../../../assets/icons/IN.png';
import fb from '../../../assets/icons/fb.png';
import insta from '../../../assets/icons/insta.png';
import logo from '../../../assets/icons/pageLogo.svg';
import tw from '../../../assets/icons/tw.png';
export const Footer = () => {
  return (
    <>
      <footer>
        <div className="main-interno">
          <div className="interno">
            <div className="sub-content">
              <div className="logo">
                <img src={logo} alt="logo" />
              </div>
              <p className="text">It is a long established fact that a reader will be distracted lookings.</p>
            </div>
            <div className="icons">
              <Link to={''}>
                <img src={fb} alt="fb" />
              </Link>
              <Link to={''}>
                <img src={tw} alt="tw" />
              </Link>
              <Link to={''}>
                <img src={IN} alt="in" />
              </Link>
              <Link to={''}>
                <img src={insta} alt="insta" />
              </Link>
            </div>
          </div>
          <div className="main-pages">
            <p>Pages</p>
            <div className="pages">
              <Link to="/aboutpage" className="link">
                About us
              </Link>
              <Link to="" className="link">
                Our Projects
              </Link>
              <Link to="" className="link">
                Our Team
              </Link>
              <Link to="" className="link">
                Contact us
              </Link>
              <Link to="" className="link">
                Services
              </Link>
            </div>
          </div>
          <div className="main-service">
            <p>Service</p>
            <div className="service">
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
          </div>
          <div className="main-contact">
            <p className="contact-title">Contact</p>
            <div className="contact">
              <Link to="" className="link">
                55 East Birchwood Ave. Brooklyn, New York 11201
              </Link>
              <Link to="" className="link">
                contact@interno.com
              </Link>
              <Link to="" className="link">
                (123) 456 - 7890
              </Link>
            </div>
          </div>
        </div>
        <div className="copyright">
          Copyright © Interno | Designed by Victorflow Templates - Powered by Webflow
        </div>
      </footer>
    </>
  );
};
