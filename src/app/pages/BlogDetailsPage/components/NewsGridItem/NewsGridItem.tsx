import './NewsGridItem.scss';
interface NewsGridItemProps {
  newsId: number;
  newsHead: string;
  date: string;
}
export const NewsGridItem = (props: NewsGridItemProps) => {
  const { newsId, newsHead, date } = props;
  const className = 'news-grid-item';
  return (
    <div className={className}>
      <div className="head-of-news">
        <p>{newsHead}</p>
      </div>
      <div className="date">{date}</div>
      <div className="line"></div>
    </div>
  );
};
