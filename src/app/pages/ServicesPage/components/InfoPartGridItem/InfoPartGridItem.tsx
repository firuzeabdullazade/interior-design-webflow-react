import './InfoPartGridItem.scss';
import { Link } from 'react-router-dom';
import arrow from '../../../../../assets/icons/Vector.svg';
interface InfoPartGridItemProps {
  head: string;
  title: string;
}
export const InfoPartGridItem = (props: InfoPartGridItemProps) => {
  const { head, title } = props;
  const className = 'info-card';
  return (
    <div className={className}>
      <h2>{head}</h2>
      <h3>{title}</h3>
      <Link to="/service-single" className="link">
        <button>
          <div className="text">Read More</div>
          <img src={arrow} alt="" />
        </button>
      </Link>
    </div>
  );
};
