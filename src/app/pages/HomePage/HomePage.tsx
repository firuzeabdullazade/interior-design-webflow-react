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
import { WorkPart } from './components/WorkPart/WorkPart';
import { baseUrl } from '../../shared/consts';
import { getProjects } from './homePage.slice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

export const HomePage = () => {
  const homePageState = useSelector((state: RootState) => state.homePage);
  const dispatch = useDispatch();
  useEffect(() => {
    fetch(`${baseUrl}/projects`)
      .then((response) => response.json())
      .then((projects) => {
        dispatch(getProjects(projects));
      });
  }, []);

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
              <Project
                projectId={project.projectId}
                imageSrc={project.imageSrc}
                head={project.head}
                content={project.content}
                projectImage={project.projectImage}
              />
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
        <div className="grid-articles-homepage">
          {homePageState.articles.map(
            (
              article: any, // todo: change any to a data type
            ) => (
              <BlogArticle
                key={`article-${article.imageSrc}`}
                imageSrc={article.imageSrc}
                tag={article.tag}
                date={article.date}
                content={article.content}
                postId={article.postId}
                firstPostImage={article.firstPostImage}
                secondPostImage={article.secondPostImage}
                postContent={article.postContent}
              />
            ),
          )}
        </div>
      </section>
      <Contact />
    </>
  );
};
