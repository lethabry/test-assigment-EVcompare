import { newsList } from '../utils/constants/newslist';
import NewsItem from './NewsItem';

const News: React.FC = () => {
  return (
    <section className="news">
      <h2 className="news__title">Новости и анонсы</h2>
      <ul className="news__list">
        {newsList.map((el) => (
          <NewsItem key={el.id} {...el} />
        ))}
      </ul>
    </section>
  );
};

export default News;
