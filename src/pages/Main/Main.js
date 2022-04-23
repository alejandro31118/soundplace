import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Home from '../Home/Home';
import Library from '../Library/Library';
import Trending from '../Trending/Trending';
import Header from '../../components/Header/Header';
import Player from '../../components/Player/Player';

const Main = () => {
    const { t } = useTranslation()

    return (
      <div className="">
        <Header />
        <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/library' element={ <Library /> } />
            <Route path='/trending' element={ <Trending /> } />
        </Routes>

        <Player />
      </div>
    );
  };
  
  export default Main;