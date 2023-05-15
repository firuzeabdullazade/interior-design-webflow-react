import './TestimonialPart.scss';
import { FeedBackGridItem } from './components/FeedBackGridItem/FeedBackGridItem';
import { RootState } from '../../../../../store/store';
import { useSelector } from 'react-redux';

export const TestimonialPart = () => {
  const homePageState = useSelector((state: RootState) => state.homePage);

  return (
    <>
      <div className="container">
        <div className="head">
          <p>What the People Thinks About Us</p>
        </div>
        <div className="feed-back-container">
          {homePageState.feedbacks.map((comment) => (
            <FeedBackGridItem
              key={`post-${comment.imageSrc}`}
              imageSrc={comment.imageSrc}
              name={comment.name}
              country={comment.country}
              feedBack={comment.feedBack}
            />
          ))}
        </div>
      </div>
    </>
  );
};
