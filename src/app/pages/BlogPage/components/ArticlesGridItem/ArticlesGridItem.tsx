import './ArticlesGridItem.scss';
import { Link } from 'react-router-dom';
import { stateLoad } from '../../../BlogDetailsPage/blogDetailsPage.slice';
import { useDispatch } from 'react-redux';
import vector from '../../../../../assets/icons/vectorImage.svg';

interface ArticlesGridItemProps {
  postId: number;
  date: string;
  tag: string;
  imageSrc: string;
  firstPostImage: string;
  secondPostImage: string;
  content: string;
  postContent: string;
  shortTag: string;
}

export const ArticlesGridItem = (props: ArticlesGridItemProps) => {
  const { postId, date, tag, imageSrc, firstPostImage, secondPostImage, content, postContent, shortTag } =
    props;
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(stateLoad({ date, postContent, firstPostImage, secondPostImage, postId }));
  };

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
            <Link to={`/blog/${postId}`} onClick={() => handleClick()} className="link">
              <img src={vector} alt="" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
