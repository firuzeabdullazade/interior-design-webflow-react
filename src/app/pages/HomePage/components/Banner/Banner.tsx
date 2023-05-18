import './Banner.scss';
import arrow from '../../../../../assets/icons/Arrow.svg';
import backgroundImage from '../../../../../assets/images/backgroundImage.png';

export const Banner = () => {
  return (
    <>
      <section className="banner">
        <div className="background">
          <img src={backgroundImage} alt="background" />
        </div>
        <div className="box">
          <div className="intro">
            <div className="content">
              <h2>Let Your Home Be Unique</h2>
              <h3>
                There are many variations of the passages of lorem Ipsum fromavailable,variations of the
                passages.
              </h3>
            </div>
            <button>
              Get Started
              <img src={arrow} alt="" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
