import './BlogPage.scss';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import { ArticlesGridItem } from './components/ArticlesGridItem/ArticlesGridItem';
import { Banner } from './components/Banner/Banner';
import { LatestPost } from './components/LatestPost/LatestPost';
import { RootState } from '../../../store/store';
import { Swiper, SwiperSlide } from 'swiper/react';
import { baseUrl } from '../../shared/consts';
import { getArticles } from './blogPage.slice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import SwiperCore, { Navigation, Pagination } from 'swiper';

export const BlogPage = () => {
  const blogPageState = useSelector((state: RootState) => state.blogPage);

  console.log(blogPageState);

  
  SwiperCore.use([Navigation, Pagination]);
  const dispatch = useDispatch();
  useEffect(() => {
    fetch(`${baseUrl}/articles`)
      .then((response) => response.json())
      .then((articles) => {
        dispatch(getArticles(articles));
      });
  }, []);

  return (
    <>
      <Banner />
      <div className="latest-post">
        <h2>Latest Post</h2>
        {blogPageState.posts.map((post) => (
          <LatestPost
            key={`post-${post.imageSrc}`}
            imageSrc={post.imageSrc}
            tag={post.tag}
            date={post.date}
            content={post.content}
            postId={post.postId}
            firstPostImage={post.firstPostImage}
            secondPostImage={post.secondPostImage}
            postContent={post.postContent}
            text={post.text}
          />
        ))}
      </div>
      <section className="blog-page">
        <div className="blog-part">
          <div className="heading">
            <h2>Articles & News</h2>
          </div>
          <div className="grid-articles">
            <Swiper
              spaceBetween={40}
              slidesPerView={3}
              navigation={true}
              pagination={{
                dynamicBullets: true,
              }}
            >
              {blogPageState.articles.map((article) => (
                <SwiperSlide>
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
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};
