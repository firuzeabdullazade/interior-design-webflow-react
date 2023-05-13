import './BlogArticle.scss';
import { Link } from 'react-router-dom';
import vector from '../../../../../assets/icons/vectorImage.svg';

interface BlogArticleProps {
  date: string;
  tag: string;
  imageSrc: string;
  content: string;
}

export const BlogArticle = (props: BlogArticleProps) => {
  const { date, tag, imageSrc, content } = props;

  return (
    <>
      <div className="grid-article">
        <div className="image-tag">
          <img src={imageSrc} alt="" />
          <div className="tag">{tag}</div>
        </div>
        <div className="subcontent">
          <h3>{content}</h3>
          <div className="date-button">
            <div className="date">{date}</div>
            <Link to="" className="link">
              <img src={vector} alt="" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
