const NavigationItem: React.FC<{
  imgSrc: string;
  altText: string;
}> = ({ imgSrc, altText }) => {
  return (
    <li className="navigation-item">
      <button className="navigation-item__button">
        <img src={`/images/${imgSrc}`} alt={altText} />
      </button>
    </li>
  );
};

export default NavigationItem;
