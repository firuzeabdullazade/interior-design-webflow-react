import './LatestPost.scss';
import { Link } from 'react-router-dom';
import { stateLoad } from '../../../BlogDetailsPage/blogDetailsPage.slice';
import { useDispatch } from 'react-redux';
import vector from '../../../../../assets/icons/vectorImage.svg';

interface PostsProps {
  postId: number;
  date: string;
  tag: string;
  imageSrc: string;
  content: string;
  firstPostImage: string;
  secondPostImage: string;
  postContent: string;
  text: string;
}

export const LatestPost = (props: PostsProps) => {
  const { postId, date, tag, imageSrc, firstPostImage, secondPostImage, content, postContent, text } = props;
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(stateLoad({ date, postContent, firstPostImage, secondPostImage, postId }));
  };

  return (
    <>
      <div className="post">
        <img src={imageSrc} alt="" />
        <div className="content">
          <div className="subcontent">
            <h3>{content}</h3>
            <div className="text">{text}</div>
          </div>
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
