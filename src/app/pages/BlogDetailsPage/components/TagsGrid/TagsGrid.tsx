import './TagsGrid.scss';
import { Link } from 'react-router-dom';

interface TagsGridProps {
  buttonId: number;
  buttonTitle: string;
}
export const TagsGrid = (props: TagsGridProps) => {
  const { buttonId, buttonTitle} = props;
  return (
    <>
      <Link to={`/filter?tag=${buttonTitle}`} className="link">
        {buttonTitle}
      </Link>
    </>
  );
};
