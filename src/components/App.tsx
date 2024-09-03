import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import MainPage from '../pages/Main';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
