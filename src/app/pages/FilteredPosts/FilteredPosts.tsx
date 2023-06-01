import './FilteredPosts.scss';
import { ArticlesGridItem } from '../BlogPage/components/ArticlesGridItem/ArticlesGridItem';
import { RootState } from '../../../store/store';
import { baseUrl } from '../../shared/consts';
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

  console.log(currentTag);
  console.log(currentSearchWord);

  const filteredArticles = articles.filter((item: any) => item.shortTag === currentTag);
  
  console.log(filteredArticles);

  const dispatch = useDispatch();
  useEffect(() => {
    fetch(`${baseUrl}/articles`, {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        tag: currentTag,
        searchword: currentSearchWord,

      }),
    }).then((articles) => {
      dispatch(filteredArticles(articles));
    });
  }, []);

  return (
    <>
      <div className="hero-back">
        <div className="intro">
          <h1>Searched Posts</h1>
        </div>
        <img src={backImage} alt="" />
      </div>
      <div className="filtered">
        {filteredArticles.length ? (
          filteredArticles.map((article: any) => (
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
          <h2>No arcticles yet (</h2>
        )}
      </div>
    </>
  );
};
