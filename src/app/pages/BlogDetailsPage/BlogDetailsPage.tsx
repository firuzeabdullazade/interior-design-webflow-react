import './BlogDetailsPage.scss';
import { DesignSprints } from './components/DesignSprints/DesignSprints';
import { RootState } from '../../../store/store';
import { useSelector } from 'react-redux';
import React from 'react';
import backImage from '../../../assets/images/blog detail background.png';
import image from '../../../assets/images/details image.png';
import searchIcon from '../../../assets/icons/new search icon (2).svg';
import { NewsGridItem } from './components/NewsGridItem/NewsGridItem';

export const BlogDetailsPage = () => {
  const blogDetailsPageState = useSelector((state: RootState) => state.blogDetailsPage);
  return (
    <>
      <div className="hero-back">
        <div className="intro">
          <h1>Blog Details</h1>
        </div>
        <img src={backImage} alt="" />
      </div>
      <div className="blog-container">
        <div className="info-part">
          <h3>
            Let’s Get Solution for Building <br /> Construction Work
          </h3>
          <img src={image} alt="" />
          <div className="date-elements">
            <p>26 December,2022 </p>
            <p>Interior / Design / Home / Decore</p>
          </div>
          <div className="text">
            <p>
              Building construction is a complex and multi-faceted process that requires meticulous planning,
              coordination, and execution. From residential homes to towering skyscrapers, the successful
              completion of a construction project hinges on employing efficient solutions that resource
              utilization, enhance productivity, and maintain high-quality standards. In industry, where time
              and budget constraints are paramount, it is imperative embrace innovative approaches that not
              only streamline construction processes but also prioritize sustainability and skilled labor
              utilization.
            </p>
            <p>
              This article presents a comprehensive solution for building construction, encompassing key
              aspects such as project management, technology integration, sustainable practices, and the
              optimal allocation of skilled labor.
            </p>
          </div>
          <h3>Design sprints are great</h3>
          <div className="sprints-info-part">
            <p>
              Design sprints, although not commonly used in interior design, can be adapted to enhance the
              efficiency and collaboration within the process.
            </p>
            <div className="list">
              {blogDetailsPageState.titles.map((title) => (
                <DesignSprints key={`titles-${title.order}`} order={title.order} title={title.title} />
              ))}
            </div>
            <p className="new-paragraph">
              By following these steps, designers can adapt the design sprint approach to interior design,
              streamlining the workflow, improving communication with clients, and ensuring a user-centered
              design process.
            </p>
            <img src={image} alt="" />
          </div>
        </div>
        <div className="searching-part">
          <form>
            <input type="text" className="search-input" placeholder="Search" />
            <button>
              <img src={searchIcon} alt="" />
            </button>
          </form>
          <div className="latest-news-part">
            <p className="subhead">Latest News</p>
            <div className="news-grid">
              {blogDetailsPageState.news.map((article) => (
                <NewsGridItem key={`news-${article.date}`} newsHead={article.newsHead} date={article.date} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
