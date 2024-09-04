const NavigationButton: React.FC<{
  imgSrc: string;
  altText: string;
  className: string;
}> = ({ imgSrc, altText, className }) => {
  return (
    <button className="navigation-item__button">
      <img src={`/images/${imgSrc}`} alt={altText} className={className} />
    </button>
  );
};

export default NavigationButton;
