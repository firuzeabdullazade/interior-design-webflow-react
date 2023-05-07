import { useSelector } from "react-redux";
import "./FeedBackGridItem.scss";
import { RootState } from "../../../../../../../store/store";
interface FeedBackGridItemProps {
  imageSrc: string;
  name: string;
  country: string;
  feedBack: string;
}
export const FeedBackGridItem = (props: FeedBackGridItemProps) => {
  const { imageSrc, name, country, feedBack } = props;
  const className = "box";
  const feedBackGridItemState = useSelector ((state:RootState) => state.feedBackGridItem)

  return (
    <>
      <div className={className}>
        <div className="personal-info">
          <div className="avatar">
            <img src={feedBackGridItemState.imageSrc} />
          </div>
          <div className="name-place">
            <div className="name">{feedBackGridItemState.name}</div>
            <div className="place">{feedBackGridItemState.country}</div>
          </div>
           
        </div>
       <div className="feedback">{feedBackGridItemState.feedBack}</div>
      </div>
    </>
  );
};
