import "./TestimonialPart.scss";
import feedFirst from "../../../../../assets/images/feedFirst.png";
import feedSecond from "../../../../../assets/images/feedSecond.png";
import feedThird from "../../../../../assets/images/feedThird.png";
import { FeedBackGridItem } from "./components/FeedBackGridItem/FeedBackGridItem";

export const TestimonialPart = () => {
  const comments = [
    {
      imageSrc: feedFirst,
      name: "Nattasha Mith",
      country: "Sydney, USA",
      feedBack:
        "This well-designed interior design webpage  showcase a variety of styles and options to inspire and inform visitors.",
    },
    {
      imageSrc: feedSecond,
      name: "Raymond Galario",
      country: "Sydney, Australia",
      feedBack:
        "Navigation and organization are key factors in making an interior design webpage user-friendly and easy to use.",
    },
    {
      imageSrc: feedThird,
      name: "Benny Roll",
      country: "Sydney, New York",
      feedBack:
        "High-quality images and well-written descriptions can help visitors visualize and understand the designer's vision for a space.",
    },
  ];
  return (
    <>
      <div className="container">
        <div className="head">
          <p>What the People Thinks About Us</p>
        </div>
        <div className="feed-back-container">
          {comments.map((comment) => (
            <FeedBackGridItem
              key={`post -${comment.imageSrc}`}
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
