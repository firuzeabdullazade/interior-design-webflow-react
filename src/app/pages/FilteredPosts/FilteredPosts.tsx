import './FilteredPosts.scss';
import { ArticlesGridItem } from '../BlogPage/components/ArticlesGridItem/ArticlesGridItem';
import { RootState } from '../../../store/store';
import { baseUrl } from '../../shared/consts';
import { setArticles } from '../BlogPage/blogPage.slice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import backImage from '../../../assets/images/blog detail background.png';

export const FilteredPosts = () => {
  const blogPageState = useSelector((state: RootState) => state.blogPage);
  const articles: any = blogPageState.articles;
  const searchPart = useLocation().search;
  const currentTag = new URLSearchParams(searchPart).get('tag');
  const currentSearchWord = new URLSearchParams(searchPart).get('searchword');

  const dispatch = useDispatch();
  useEffect(() => {
    fetch(`${baseUrl}/articles/filter`, {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        tag: currentTag,
        searchword: currentSearchWord,
      }),
    })
      .then((response) => response.json())
      .then((articles) => {
        dispatch(setArticles(articles));
      });
  }, [currentTag, currentSearchWord]);

  return (
    <>
      <div className="hero-back">
        <div className="intro">
          <h1>Searched Posts</h1>
        </div>
        <img src={backImage} alt="" />
      </div>
      <div className="filtered">
        {articles.length ? (
          articles.map((article: any) => (
            <ArticlesGridItem
              key={`article-${article.imageSrc}`}
              imageSrc={article.imageSrc}
              tag={article.tag}
              date={article.date}
              content={article.content}
              postId={article.postId}
              firstPostImage={article.firstPostImage}
              secondPostImage={article.secondPostImage}
              postContent={article.postContent}
              shortTag={article.shortTag}
            />
          ))
        ) : (
          <div className="no-post">Sorry, we have no articles related with tag yet(</div>
        )}
      </div>
    </>
  );
};
