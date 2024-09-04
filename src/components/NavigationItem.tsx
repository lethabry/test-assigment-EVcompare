import NavigationButton from './NavigationButton';

const NavigationItem: React.FC<{
  imgSrc: string;
  altText: string;
  className: string;
}> = ({ imgSrc, altText, className }) => {
  return (
    <li className="navigation-item">
      <NavigationButton
        imgSrc={imgSrc}
        altText={altText}
        className={className}
      />
    </li>
  );
};

export default NavigationItem;
