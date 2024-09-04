import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { WindowWidthContext } from '../context/windowWidthContext';
import Header from './Header';
import MainPage from '../pages/Main';
import AuthPage from '../pages/Auth';

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleChangeWidth = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleChangeWidth);
    return () => {
      window.removeEventListener('resize', handleChangeWidth);
    };
  }, [windowWidth]);

  return (
    <WindowWidthContext.Provider value={windowWidth}>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/register" element={<AuthPage />}></Route>
      </Routes>
    </WindowWidthContext.Provider>
  );
}

export default App;
