import { useSelector } from 'react-redux';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import './BlogPage.scss';
import { RootState } from '../../../store/store';
import { ArticlesGridItem } from './components/ArticlesGridItem/ArticlesGridItem';
import { Banner } from './components/Banner/Banner';
import { LatestPost } from './components/LatestPost/LatestPost';

export const BlogPage = () => {
  const blogPageState = useSelector((state: RootState) => state.blogPage);
  SwiperCore.use([Navigation, Pagination]);

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
