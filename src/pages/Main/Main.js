import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Home from '../Home/Home';
import Library from '../Library/Library';
import Search from '../Search/Search';
import Header from '../../components/Header/Header';
import Player from '../../components/Player/Player';
import UserProfile from '../UserProfile/UserProfile';
import UserSinglePlaylist from '../UserSinglePlaylist/UserSinglePlaylist';
import 'bootstrap/dist/css/bootstrap.min.css';

const Main = () => {
    const { t } = useTranslation()

    return (
      <div className="">
        <Header />

        <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/library' element={ <Library /> } />
            <Route path='/search' element={ <Search /> } />
            <Route path='/me' element={ <UserProfile /> } />
            <Route path='/playlist/:playlistId' element={ <UserSinglePlaylist /> } />
        </Routes>

        <Player />
      </div>
    );
  };
  
  export default Main;