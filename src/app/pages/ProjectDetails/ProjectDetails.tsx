import './ProjectDetails.scss';
import { Link, useParams } from 'react-router-dom';
import { RootState } from '../../../store/store';
import { baseUrl } from '../../shared/consts';
import { setCurrentProject } from './projectDetailsPage.slice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import image from '../../../assets/images/Images.png';

export const ProjectDetails = () => {
  const projectDetailsPageState = useSelector((state: RootState) => state.projectDetailsPage);
  const project: any = projectDetailsPageState.projectState;

  const {projectId} =useParams();
  console.log('projectId', projectId);

  const dispatch = useDispatch();
  const getProject = () => {
    fetch(`${baseUrl}/articles/${project.projectId}`)
      .then((response) => response.json())
      .then((project) => {
        dispatch(setCurrentProject(project));
      });
  };

  useEffect(() => getProject(), []);
  return (
    <>
      <div className="hero-back">
        <div className="intro">
          <h1>Project Details</h1>
        </div>
        <img src={image} alt="" />
      </div>
      <div className="container-project">
        {' '}
        <div className="project-container">
          <div className="info-part-project">
            <div className="box">
              <ul>
                <li>Client</li>
                <li>Category</li>
                <li>Tags</li>
                <li>Date</li>
                <li>Link</li>
              </ul>
              <ul>
                <li className="box-text">Nature Home</li>
                <li className="box-text">Interiors</li>
                <li className="box-text">Interior,Home</li>
                <li className="box-text">Date 03/02/2022</li>
                <li className="box-text">
                  <Link to="" className="link">
                    nature-home.com
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="project-details">
            <h2>{project.head}</h2>
            <div className="content" dangerouslySetInnerHTML={{ __html: project.content }} />
          </div>
        </div>
        <img className="project-image" src={project.projectImage} alt="" />
      </div>
    </>
  );
};
