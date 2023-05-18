import './Banner.scss';
import background from '../../../../../assets/images/backgroundProject.png';

export const Banner = () => {
  return (
    <>
      <div className="banner-project">
        <img src={background} alt="" />
        <div className="content">
          <div className="intro">Our Project</div>
        </div>
      </div>
    </>
  );
};
