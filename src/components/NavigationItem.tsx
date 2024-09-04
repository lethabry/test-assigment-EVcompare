import NavigationButton from './NavigationButton';

const NavigationItem: React.FC<{
  imgSrc: string;
  altText: string;
  className: string;
  path: string;
}> = ({ imgSrc, altText, className, path }) => {
  return (
    <li className="navigation-item">
      <NavigationButton
        imgSrc={imgSrc}
        altText={altText}
        className={className}
        path={path}
      />
    </li>
  );
};

export default NavigationItem;
