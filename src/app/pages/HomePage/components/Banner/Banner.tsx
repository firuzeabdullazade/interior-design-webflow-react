import "./Banner.scss";
import backgroundimage from "../../../../../assets/images/backgroundImage.png";
import arrow from "../../../../../assets/icons/Arrow.svg";

export const Banner = () => {
  return (
    <>
      <section className="banner">
        <div className="background">
          <img src={backgroundimage} alt="background image" />
        </div>
        <div className="intro">
          <div className="content">
            <h2>Let Your Home Be Unique</h2>
            <h3>
              There are many variations of the passages of lorem Ipsum
              fromavailable,variations of the passages.
            </h3>
          </div>
          <button>
            Get Started
            <img src={arrow} alt="arrow logo" />
          </button>
        </div>
      </section>
    </>
  );
};
