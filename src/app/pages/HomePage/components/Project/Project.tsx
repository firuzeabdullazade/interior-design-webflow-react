import './Project.scss';
import { Link } from 'react-router-dom';
import vector from '../../../../../assets/icons/vectorImage.svg';

interface ProjectProps {
  projectId: number;
  imageSrc: string;
  head: string;
  content: string;
  projectImage: string;
}

export const Project = (props: ProjectProps) => {
  const { projectId, imageSrc, head, content, projectImage } = props;

  return (
    <>
      <Link
        to={`/projects/${projectId}`}
        state={{
          projectId,
          imageSrc,
          head,
          content,
          projectImage,
        }}
        className="link"
      >
        <div className="grid-project">
          <img src={imageSrc} alt="" />
          <div className="content">
            <div className="subcontent">
              <div className="header">{head}</div>
              <div className="subheading">Decor / Artchitecture</div>
            </div>
            <div className="arrow">
              <img src={vector} alt="" />
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};
