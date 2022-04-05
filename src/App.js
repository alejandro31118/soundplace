import { Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Home from './pages/Home/Home';
import Library from './pages/Library/Library';
import Trending from './pages/Trending/Trending';
import Header from './components/Header/Header';
import Player from './components/Player/Player';
// import ThemeSelector from './components/ThemeSelector/ThemeSelector';
import './App.css';



function App() {
  const { t } = useTranslation()

  return (
    <div className="App">
      <Header />
      {t('TEST')}

      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/library' element={ <Library /> } />
        <Route path='/trending' element={ <Trending /> } />
      </Routes>

      <Player />
    </div>
  );
}

export default App;
