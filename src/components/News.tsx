import { useContext } from 'react';
import { WindowWidthContext } from '../context/windowWidthContext';
import { newsList } from '../utils/constants/newslist';
import NavigationItem from './NavigationItem';
import NewsItem from './NewsItem';

const News: React.FC = () => {
  const windowWidth = useContext(WindowWidthContext);

  return (
    <section className="news">
      <div
        className={`${
          windowWidth <= 650
            ? 'news__main-block news__main-block_border'
            : 'news__main-block'
        }`}
      >
        {windowWidth <= 650 && (
          <NavigationItem
            imgSrc={'arrowLeft.svg'}
            altText={'Назад'}
            className={'navigation-img'}
          />
        )}
        <h2 className="news__title">Новости и анонсы</h2>
      </div>

      <ul className="news__list">
        {newsList.map((el) => (
          <NewsItem key={el.id} {...el} />
        ))}
      </ul>
    </section>
  );
};

export default News;
