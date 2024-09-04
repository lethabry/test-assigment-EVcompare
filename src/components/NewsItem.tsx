import { INewsItem } from '../interfaces/interfaces';

const NewsItem: React.FC<INewsItem> = ({
  imgName,
  title,
  description,
  author,
  date,
}) => {
  return (
    <li className="news-item">
      <article>
        <img
          className="news-item__image"
          src={`/src/assets/images/newsImgs/${imgName}`}
          alt={`${title}`}
        />
        <div className="news-item__info">
          <h3 className="news-item__title">{title}</h3>
          <p className="news-item__description">{description}</p>
          <div className="news-item__extra-info">
            <span className="news-item__author">{author}</span>
            <span className="news-item__date">{date}</span>
          </div>
        </div>
      </article>
    </li>
  );
};

export default NewsItem;
