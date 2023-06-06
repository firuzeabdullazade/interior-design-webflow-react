import './ContactPage.scss';
import { ContactForm } from './components/ContactForm/ContactForm';
import background from '../../../assets/images/contact us background.png';


export const ContactPage = () => {
  return (
    <>
      <div className="hero-back">
        <div className="intro">
          <h1>Contact Us</h1>
        </div>
        <img src={background} alt="" />
      </div>
      <ContactForm />
    </>
  );
};
