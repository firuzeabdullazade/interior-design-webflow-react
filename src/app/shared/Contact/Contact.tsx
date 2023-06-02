import './Contact.scss';
import arrow from '../../../assets/icons/contact arrow.svg';
import { Link } from 'react-router-dom';



export const Contact = () => {
  return (
    <div className="joininterno">
      <div className="sub-title">
        <p className="title">Wanna join the interno?</p>
        <p className="text">It is a long established fact will be distracted.</p>
      </div>
      <Link to="/contact" className='link'>
        <button type="button">
          Contact With Us
          <img src={arrow} alt="arrow" />
        </button>
      </Link>
    </div>
  );
};
