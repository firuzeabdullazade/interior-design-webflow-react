import './ContactForm.scss';
import address from '../../../../../assets/icons/earth.svg';
import facebook from '../../../../../assets/icons/facebook.svg';
import instagram from '../../../../../assets/icons/instagram.svg';
import linkedin from '../../../../../assets/icons/in.svg';
import message from '../../../../../assets/icons/Icon message.svg';
import phone from '../../../../../assets/icons/phone.svg';
import twitter from '../../../../../assets/icons/twitter.svg';
import arrow from '../../../../../assets/icons/Arrow.svg';
import map from '../../../../../assets/images/Map.png';

export const ContactForm = () => {
  return (
    <>
      <div className="contact-form">
        <h2>We love meeting new people <br/> and helping them.</h2>
        <div className="form-container">
          <div className="info">
            <div className="content">
              <div className="content-element">
                <img src={message} alt="" />
                <h3>info@yourdomain.com</h3>
              </div>
              <div className="content-element">
                <img src={phone} alt="" />
                <h3>+1 (378) 400-1234</h3>
              </div>

              <div className="content-element">
                <img src={address} alt="" />
                <h3>www.yourdomain.com</h3>
              </div>
            </div>
            <div className="icons">
              <img src={facebook} alt="" />
              <img src={twitter} alt="" />
              <img src={linkedin} alt="" />
              <img src={instagram} alt="" />
            </div>
          </div>
          <div className="form-button">
            <form>
              <div className="row">
                <label>
                  Name <input type="text" />
                </label>
                <label>
                  Email <input type="email" />
                </label>
              </div>
              <div className="row">
                <label>
                  Subject <input type="text" />
                </label>
                <label>
                  Phone <input type="number" />
                </label>
              </div>
              <label className='comment'>
                Hello Iam Intrested in.. <input type="text" />
              </label>
            </form>
            <div className="button">
               <button>
                Send now
                <img src={arrow} alt="" />
            </button> 
            </div>
          </div>
        </div>
        <img src={map} alt="" />
      </div>
    </>
  );
};
