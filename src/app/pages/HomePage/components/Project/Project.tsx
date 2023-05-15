import './Project.scss';
import { Link } from 'react-router-dom';
import vector from '../../../../../assets/icons/vectorImage.svg';

interface ProjectProps {
  imageSrc: string;
  head: string;
}

export const Project = (props: ProjectProps) => {
  const { imageSrc, head } = props;

  return (
    <>
      <div className="grid-project">
        <img src={imageSrc} alt="" />
        <div className="content">
          <div className="subcontent">
            <div className="header">{head}</div>
            <div className="subheading">Decor / Artchitecture</div>
          </div>
          <Link to="" className="link">
            <img src={vector} alt="" />
          </Link>
        </div>
      </div>
    </>
  );
};
