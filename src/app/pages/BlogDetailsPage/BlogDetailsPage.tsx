/* eslint-disable jsx-a11y/label-has-associated-control */
import './BlogDetailsPage.scss';
import * as yup from 'yup';
import { DesignSprints } from './components/DesignSprints/DesignSprints';
import { NewsGridItem } from './components/NewsGridItem/NewsGridItem';
import { RootState } from '../../../store/store';
import { TagsGrid } from './components/TagsGrid/TagsGrid';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import arrow from '../../../assets/icons/Arrow.svg';
import backImage from '../../../assets/images/blog detail background.png';
import searchIcon from '../../../assets/icons/new search icon (2).svg';
import { useParams } from 'react-router-dom';

const schema = yup
  .object({
    subject: yup.string().required(),
    reply: yup.string().required(),
  })
  .required();
type FormData = yup.InferType<typeof schema>;

export const BlogDetailsPage = () => {
  const blogDetailsPageState = useSelector((state: RootState) => state.blogDetailsPage);
  const post: any = blogDetailsPageState.postState;

  const params = useParams();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  // api call will be here a bit later =)
  const onSubmit = (data: FormData) => console.log(data);
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
          <img className="images" src={post.firstPostImage} alt="" />
          <div className="date-elements">
            <p>{post.date}</p>
            <p>Interior / Design / Home / Decore</p>
          </div>
          <div className="text" dangerouslySetInnerHTML={{ __html: post.postContent }} />
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
            <img className="last-images" src={post.secondPostImage} alt="" />
          </div>

          <div className="reply-part">
            <h2>Leaving a Reply</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <label>
                Name: <input type="text" />
              </label>
              <label>
                Subject <input type="text" {...register('subject')} />
              </label>
              <p className="validation-error">{errors.subject?.message}</p>
              <label className="reply">
                Hello I am intrested in..
                <input type="text" {...register('reply')}/>
                <p className="validation-error">{errors.reply?.message}</p>
              </label>
              <label className="input-group">
                <input type="checkbox" className="checkbox" />
                <span>Save my name, email, and website in this browser for the next time I comment.</span>
              </label>
              <button type="submit" className="submit">
                Send Now
                <img src={arrow} alt="" />
              </button>
            </form>
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
                <NewsGridItem
                  key={`news-${article.newsId}`}
                  newsHead={article.newsHead}
                  date={article.date}
                  newsId={article.newsId}
                />
              ))}
            </div>
          </div>
          <div className="tags-part">
            <p>Tags</p>
            <div className="tags-grid">
              {blogDetailsPageState.tags.map((tag) => (
                <TagsGrid
                  key={`news-${tag.buttonId}`}
                  buttonId={tag.buttonId}
                  buttonTitle={tag.buttonTitle}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};