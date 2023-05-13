import './AboutUsPart.scss';
import arrow from '../../../../../assets/icons/Arrow.svg';
import call from '../../../../../assets/icons/Call.svg';
import image from '../../../../../assets/images/contentImage.png';

export const AboutUsPart = () => {
  return (
    <>
      <div className="about-us">
        <div className="content">
          <h2>We Create The Art Of Stylish Living Stylishly</h2>
          <p>
            It is a long established fact that a reader will be distracted by the of readable content of a
            page when lookings at its layouts the points of using that it has a more-or-less normal.
          </p>
          <div className="button">
            <div className="call">
              <button className="call-button">
                <img src={call} alt="call logo" />
              </button>
              <div className="contact">
                <h3>012345678</h3>
                <p>Call Us Anytime</p>
              </div>
            </div>
            <button>
              Get Free Estimate
              <img src={arrow} alt="arrow logo" />
            </button>
          </div>
        </div>
        <img src={image} alt="" />
      </div>
    </>
  );
};
