import { Link } from 'react-router-dom';
import { useState, useEffect, memo } from 'react';
import { navlistDesktop, navlistMobile } from '../utils/constants/navlist';
import NavigationItem from './NavigationItem';
import SearchForm from './SearchForm';

const Header: React.FC = memo(() => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleChangeWidth = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleChangeWidth);
    return () => {
      window.removeEventListener('resize', handleChangeWidth);
    };
  }, [windowWidth]);

  return (
    <header className="header">
      <Link to="/" className="header__logo">
        <img src={'/images/logo.png'} alt="Логотип приложения EvCompaire" />
      </Link>
      {windowWidth > 650 && <SearchForm />}

      <nav>
        <ul className="header__navigation-list">
          {windowWidth > 650
            ? navlistDesktop.map((el) => (
                <NavigationItem
                  key={el.id}
                  imgSrc={el.imgSrc}
                  altText={el.altText}
                />
              ))
            : navlistMobile.map((el) => (
                <NavigationItem
                  key={el.id}
                  imgSrc={el.imgSrc}
                  altText={el.altText}
                />
              ))}
        </ul>
      </nav>
    </header>
  );
});

export default Header;
