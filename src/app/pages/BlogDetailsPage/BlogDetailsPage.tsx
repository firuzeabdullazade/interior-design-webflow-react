/* eslint-disable jsx-a11y/label-has-associated-control */
import './BlogDetailsPage.scss';
import * as yup from 'yup';
import { DesignSprints } from './components/DesignSprints/DesignSprints';
import { Link, useParams } from 'react-router-dom';
import { NewsGridItem } from './components/NewsGridItem/NewsGridItem';
import { RootState } from '../../../store/store';
import { TagsGrid } from './components/TagsGrid/TagsGrid';
import { baseUrl } from '../../shared/consts';
import { setCurrentArticle } from './blogDetailsPage.slice';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import React, { useEffect } from 'react';
import arrow from '../../../assets/icons/Arrow.svg';
import backImage from '../../../assets/images/blog detail background.png';
import searchIcon from '../../../assets/icons/new search icon (2).svg';

const schema = yup
  .object({
    subject: yup.string().required(),
    name: yup.string().required(),
    reply: yup.string().required(),
    agreement: yup.boolean().required().isTrue(),
  })
  .required();
type FormData = yup.InferType<typeof schema>;

export const BlogDetailsPage = () => {
  const blogDetailsPageState = useSelector((state: RootState) => state.blogDetailsPage);

  const currentUser = useSelector((state: RootState) => state.userWidget.currentUser);

  const post: any = blogDetailsPageState.postState;
  const dispatch = useDispatch();

  const { postId } = useParams();

  console.log('postId', postId);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const getArticle = () => {
    fetch(`${baseUrl}/articles/${post.postId}`)
      .then((response) => response.json())
      .then((article) => {
        dispatch(setCurrentArticle(article));
      });
  };

  useEffect(() => getArticle(), []);

  const onSubmit = (data: FormData) => {
    fetch(`${baseUrl}/articles/${post.postId}/reply`, {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: data.name,
        subject: data.subject,
        text: data.reply,
      }),
    }).then(() => {
      getArticle();
    });
  };
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

          {blogDetailsPageState.currentArticle?.replies.length ? (
            <ul className="current-replies">
              <h2>Replies</h2>
              {blogDetailsPageState.currentArticle?.replies.map((reply) => (
                <li className="reply-row">
                  <h3>{reply.name}: </h3>
                  <p>{reply.text}</p>
                </li>
              ))}
            </ul>
          ) : (
            <></>
          )}
          <h2>Leaving a Reply</h2>
          {currentUser ? (
            <div className="reply-part">
              <form onSubmit={handleSubmit(onSubmit)}>
                <label>
                  Name: <input type="text" {...register('name')} defaultValue={currentUser?.firstName} />
                </label>
                <label>
                  Subject <input type="text" {...register('subject')} />
                </label>
                <p className="validation-error">{errors.subject?.message}</p>
                <label className="reply">
                  Hello I am intrested in..
                  <input type="text" {...register('reply')} />
                  <p className="validation-error">{errors.reply?.message}</p>
                </label>
                <label className="input-group">
                  <input type="checkbox" className="checkbox" {...register('agreement')} />
                  <span>Save my name, email, and website in this browser for the next time I comment.</span>
                </label>
                <button type="submit" className="submit">
                  Send Now
                  <img src={arrow} alt="" />
                </button>
              </form>
            </div>
          ) : (
            <>
              <div className="not-loged">
                <h3>
                  You can`t send reply because you are not loged in, if you want to send any reply to our page
                  please{' '}
                  <Link to="/login" className="link">
                    Log in
                  </Link>
                  .
                </h3>
              </div>
            </>
          )}
        </div>
        <div className="searching-part">
          <form>
            <input type="text" className="search-input" placeholder="Search" />
            <Link to="">
              <img src={searchIcon} alt="" />
            </Link>
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
