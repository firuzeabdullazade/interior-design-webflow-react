import './Result.scss';
import arrow from '../../../../../assets/icons/Arrow.svg';
import image from '../../../../../assets/images/Image (2).png';
import { Link } from 'react-router-dom';

export const Result = () => {
  return (
    <>
      <div className="result">
        <img src={image} alt="" />
        <div className="content-button">
          <div className="text">
            <h2>We love design.That's how we got here.</h2>
            <h3>
              It is a long established fact that a reader will be distracted by the of readable content .
            </h3>
          </div>
          <Link to="/project" className="link">
            <button>
              Our Projects
              <img src={arrow} alt="" />
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
