import { useContext } from 'react';
import { WindowWidthContext } from '../context/windowWidthContext';
import BreadCrumb from '../components/BreadCrumb';
import News from '../components/News';
import Pagination from '../components/Pagination';

const MainPage: React.FC = () => {
  const windowWidth = useContext(WindowWidthContext);

  return (
    <>
      <BreadCrumb />
      <News />
      {windowWidth > 650 && <Pagination />}
    </>
  );
};

export default MainPage;
