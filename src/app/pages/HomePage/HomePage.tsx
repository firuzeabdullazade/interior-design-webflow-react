import './HomePage.scss';
import { AboutUsPart } from './components/AboutUsPart/AboutUsPart';
import { Banner } from './components/Banner/Banner';
import { BlogArticle } from './components/BlogArticle/BlogArticle';
import { ClientLogoPart } from '../../shared/ClientLogoPart/ClientLogoPart';
import { Contact } from '../../shared/Contact/Contact';
import { Counter } from './components/Counter/Counter';
import { Project } from './components/Project/Project';
import { RootState } from '../../../store/store';
import { TestimonialPart } from './components/TestimonialPart/TestimonialPart';
import { useSelector } from 'react-redux';
import { WorkPart } from './components/WorkPart/WorkPart';

export const HomePage = () => {
  const homePageState = useSelector((state: RootState) => state.homePage);

  return (
    <>
      <Banner />
      <div className="work-part">
        {homePageState.cards.map((info) => (
          <WorkPart key={`post-${info.head}`} head={info.head} title={info.title} />
        ))}
      </div>
      <AboutUsPart />
      <TestimonialPart />
      <ClientLogoPart />
      <section className="project">
        <div className="heading">
          <h2>Follow Our Projects</h2>
          <p>
            It is a long established fact that a reader will be distracted by the of readable content of page
            lookings at its layouts points.
          </p>
        </div>
        <div className="grid-projects">
          {homePageState.projects.map(
            (
              project: any, // todo: change any to a data type
            ) => (
              <Project imageSrc={project.imageSrc} head={project.head} />
            ),
          )}
        </div>
      </section>
      <Counter />
      <section className="blog-part">
        <div className="heading">
          <h2>Articles & News</h2>
          <h3>
            It is a long established fact that a reader will be distracted by the of readable content of a
            page when lookings at its layouts the points of using.
          </h3>
        </div>
        <div className="grid-articles">
          {homePageState.articles.map(
            (
              article: any, // todo: change any to a data type
            ) => (
              <BlogArticle
                imageSrc={article.imageSrc}
                tag={article.tag}
                date={article.date}
                content={article.content}
              />
            ),
          )}
        </div>
      </section>
      <Contact />
    </>
  );
};
