import './Banner.scss';
import background from '../../../../../assets/images/serviceSingleBackground.png';

export const Banner = () => {
  return (
    <>
      <div className="banner-service">
        <img src={background} alt="" />
        <div className="content">
          <div className="intro">Service Single</div>
        </div>
      </div>
    </>
  );
};
