import { Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Home from './pages/Home/Home';
import Playlists from './pages/Playlists/Playlists';
import LangSelector from './components/LangSelector/LangSelector';
import ThemeSelector from './components/ThemeSelector/ThemeSelector';
import './App.css';


function App() {
  const { t } = useTranslation()

  return (
    <div className="App">
      <LangSelector />
      {t('TEST')}
      
      <ThemeSelector />

      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/playlists' element={ <Playlists /> } />
      </Routes>
    </div>
  );
}

export default App;
