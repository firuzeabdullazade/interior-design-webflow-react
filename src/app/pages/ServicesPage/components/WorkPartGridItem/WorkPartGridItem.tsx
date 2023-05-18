import './WorkPartGridItem.scss';
interface WorkPartGridItemProps {
  imageSrc: string;
  iconSrc: string;
  number: string;
  subhead: string;
  title: string;
  isLeft: boolean;
}
export const WorkPartGridItem = (props: WorkPartGridItemProps) => {
  const { imageSrc, iconSrc, number, subhead, title, isLeft } = props;
  const className = `grid-item${isLeft ? '-left' : ''}`;

  return (
    <div className={className}>
      <div className="image">
        <img src={imageSrc} alt="" />
      </div>

      <div className="content">
        <div className="icon-number">
          <img src={iconSrc} alt="" />
          <div className="number">{number}</div>
        </div>
        <div className="sub-content">
          <h3>{subhead}</h3>
          <p>{title}</p>
        </div>
      </div>
    </div>
  );
};
