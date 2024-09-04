import { Link } from 'react-router-dom';

const NavigationButton: React.FC<{
  imgSrc: string;
  altText: string;
  className: string;
  path: string;
}> = ({ imgSrc, altText, className, path }) => {
  return (
    <Link to={path} className="navigation-item__link">
      <img
        src={`/src/assets/images/${imgSrc}`}
        alt={altText}
        className={className}
      />
    </Link>
  );
};

export default NavigationButton;
