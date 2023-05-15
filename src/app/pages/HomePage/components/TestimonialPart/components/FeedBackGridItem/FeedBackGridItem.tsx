import './FeedBackGridItem.scss';
interface FeedBackGridItemProps {
  imageSrc: string;
  name: string;
  country: string;
  feedBack: string;
}
export const FeedBackGridItem = (props: FeedBackGridItemProps) => {
  const { imageSrc, name, country, feedBack } = props;
  const className = 'box';

  return (
    <>
      <div className={className}>
        <div className="personal-info">
          <div className="avatar">
            <img src={imageSrc} alt="" />
          </div>
          <div className="name-place">
            <div className="name">{name}</div>
            <div className="place">{country}</div>
          </div>
        </div>
        <div className="feedback">{feedBack}</div>
      </div>
    </>
  );
};
