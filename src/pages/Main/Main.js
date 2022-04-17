import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import useAuth from '../../customHooks/useAuth';
import Home from '../Home/Home';
import Library from '../Library/Library';
import Trending from '../Trending/Trending';
import Header from '../../components/Header/Header';
import Player from '../../components/Player/Player';

/*const spotifyApi = new SpotifyWebApi({
    clientId: process.env.CLIENT_ID,
})*/

const Main = ({ code }) => {
    const { t } = useTranslation()
    const accessToken = useAuth(code)
    const [search, setSearch] = useState("")
    const [searchResults, setSearchResults] = useState([])
    const [playingTrack, setPlayingTrack] = useState()

    /*useEffect(() => {
        if (!accessToken) return spotifyApi.setAccessToken(accessToken)
    }, [accessToken])*/

    return (
      <div className="">
        <Header />
        {code}
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