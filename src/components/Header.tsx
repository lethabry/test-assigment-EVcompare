import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { WindowWidthContext } from '../context/windowWidthContext';
import { navlistDesktop, navlistMobile } from '../utils/constants/navlist';
import NavigationItem from './NavigationItem';
import SearchForm from './SearchForm';

const Header: React.FC = () => {
  const windowWidth = useContext(WindowWidthContext);

  return (
    <header className="header">
      <Link to="/" className="header__logo">
        <img
          src={'/src/assets/images/logo.png'}
          alt="Логотип приложения EvCompaire"
        />
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
                  className={''}
                  path={el.path}
                />
              ))
            : navlistMobile.map((el) => (
                <NavigationItem
                  key={el.id}
                  imgSrc={el.imgSrc}
                  altText={el.altText}
                  className={''}
                  path={el.path}
                />
              ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
