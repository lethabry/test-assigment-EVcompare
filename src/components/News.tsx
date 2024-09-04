import { useState, useEffect } from 'react';
import { newsList } from '../utils/constants/newslist';
import NavigationItem from './NavigationItem';
import NewsItem from './NewsItem';

const News: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleChangeWidth = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleChangeWidth);
    return () => {
      window.removeEventListener('resize', handleChangeWidth);
    };
  }, [windowWidth]);

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
