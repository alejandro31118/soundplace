import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Library from '../Library/Library';
import Search from '../Search/Search';
import Header from '../../components/Header/Header';
import Player from '../../components/Player/Player';
import UserProfile from '../UserProfile/UserProfile';
import SinglePlaylist from '../SinglePlaylist/SinglePlaylist';
import SingleArtist from '../SingleArtist/SingleArtist';
import 'bootstrap/dist/css/bootstrap.min.css';

const Main = () => {
    return (
      <div>
        <Header />

        <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/library' element={ <Library /> } />
            <Route path='/search' element={ <Search /> } />
            <Route path='/me' element={ <UserProfile /> } />
            <Route path='/playlist/:playlistId' element={ <SinglePlaylist /> } />
            <Route path='/artist/:artistId' element={ <SingleArtist /> } />
        </Routes>

        <Player />
      </div>
    );
  };
  
  export default Main;