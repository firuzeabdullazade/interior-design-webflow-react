import './Footer.scss'
import logo from '../../../assets/icons/pageLogo.svg'
import fb from '../../../assets/icons/fb.png'
import tw from '../../../assets/icons/tw.png'
import IN from '../../../assets/icons/IN.png'
import insta from '../../../assets/icons/insta.png'
import { Link } from 'react-router-dom'
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
                        <p className="text">
                            It is a long established fact that a reader will be distracted
                            lookings.
                        </p>
                    </div>
                    <div className="icons">
                        <button>
                            <img src={fb} alt="fb" />
                        </button>
                        <button>
                            <img src={tw} alt="tw" />
                        </button>
                        <button>
                            <img src={IN} alt="in" />
                        </button>
                        <button>
                            <img src={insta} alt="insta" />
                        </button>
                    </div>
                </div>
                <div className="main-pages">
                    <p>Pages</p>
                    <div className="pages">
                    <Link to="" className='link'>About us</Link>
                    <Link to="" className='link'>Our Projects</Link>
                    <Link to="" className='link'>Our Team</Link>
                    <Link to="" className='link'>Contact us</Link>
                    <Link to="" className='link'>Services</Link>
                    </div>
                </div>
                <div className="main-service">
                    <p>Service</p>
                    <div className="service">
                    <Link to="" className='link'>Kitchan</Link>
                    <Link to="" className='link' >Living Area</Link>
                    <Link to=""className='link' >Bathroom</Link>
                    <Link to=""className='link' >Dinning Hall</Link>
                    <Link to=""className='link' >Bedroom</Link>
                    </div>
                </div>
                <div className="main-contact">
                    <p className='contact-title'>Contact</p>
                    <div className='contact'>
                    <Link to="" className='link'>55 East Birchwood Ave. Brooklyn, New York 11201</Link>
                    <Link to="" className='link'>contact@interno.com</Link>
                    <Link to="" className='link' >(123) 456 - 7890</Link>
                    </div>
                </div>
            </div>
            <div className="copyright"></div>
        </footer>
        </>
    )
}