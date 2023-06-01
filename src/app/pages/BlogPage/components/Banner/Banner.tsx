import './Banner.scss';
import background from '../../../../../assets/images/backgroundBlog.png';

export const Banner = () => {
  return (
    <>
      <div className="banner-blog">
        <img src={background} alt="" />
        <div className="content">
          <div className="intro">Articles & News</div>
        </div>
      </div>
    </>
  );
};
