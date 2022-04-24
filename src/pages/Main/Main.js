import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Home from '../Home/Home';
import Library from '../Library/Library';
import Search from '../Search/Search';
import Header from '../../components/Header/Header';
import Player from '../../components/Player/Player';
import 'bootstrap/dist/css/bootstrap.min.css';

const Main = () => {
    const { t } = useTranslation()

    return (
      <div className="bg-dark">
        <Header />

        <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/library' element={ <Library /> } />
            <Route path='/search' element={ <Search /> } />
        </Routes>

        <Player />
      </div>
    );
  };
  
  export default Main;