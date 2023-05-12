import './HomePage.scss';
import { Banner } from './components/Banner/Banner';
import { Project } from './components/Project/Project';
import { RootState } from '../../../store/store';
import { TestimonialPart } from './components/TestimonialPart/TestimonialPart';
import { WorkPart } from './components/WorkPart/WorkPart';
import { useSelector } from 'react-redux';

export const HomePage = () => {
  const homePageState = useSelector((state: RootState) => state.homePage);

  return (
    <>
      <Banner />
      <WorkPart />
      <TestimonialPart />
      <section className="project">
        <div className="heading">
          <h2>Follow Our Projects</h2>
          <p>
            It is a long established fact that a reader will be distracted by the of readable content of page
            lookings at its layouts points.
          </p>
        </div>
        <div className="grid-projects">
          {homePageState.projects.map((project) => (
            <Project imageSrc={project.imageSrc} head={project.head} />
          ))}
        </div>
      </section>
    </>
  );
};
