import { Link } from "react-router-dom";
import "./Project.scss";
import vector from '../../../../../assets/icons/vectorImage.svg';
import { RootState } from "../../../../../store/store";
import { useSelector } from "react-redux";

interface ProjectProps {
    imageSrc: string;
    head: string;
}

export const Project = (props: ProjectProps) => {
    const { imageSrc, head } = props;

  return (
    <>
      <div className="grid-project">
        <img src= {imageSrc} alt="image" />
        <div className="content">
            <div className="subcontent">
                <div className="header">{head}</div>
                <div className="subheading">Decor / Artchitecture</div>
            </div>
            <Link to = '' className="link">
            <img src= {vector} alt="" />
            </Link>
        </div>
      </div>
    </>
  );
};
