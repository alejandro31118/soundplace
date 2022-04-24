import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import SearchBar from '../../components/SearchBar/SearchBar';
import SearchTracksResult from '../../components/SearchTracksResult/SearchTracksResult';
import SearchArtistsResult from '../../components/SearchArtistsResult/SearchArtistsResult';
import SearchPlaylistsResult from '../../components/SearchPlaylistsResult/SearchPlaylistsResult';
import './Search.css';

const Search = ({}) => {
    const { t } = useTranslation()
    const [query, setQuery] = useState('')

    return (
      <div className='container search bg-dark mt-3'>
        <SearchBar getQuery={(q) => setQuery(q)} />
        <div className='flex-grow-1 my-2' style={{ overflowY: "auto" }}>
          <h4 className='text-light'>{ t('SONGS') }</h4>
          <SearchTracksResult query={ query }/>
          
          <h4 className='text-light mt-5'>{ t('ARTISTS') }</h4>
          <SearchArtistsResult query={ query }/>

          <h4 className='text-light mt-5'>{ t('PLAYLISTS') }</h4>
          <SearchPlaylistsResult query={ query }/>
        </div>
      </div>
    );
  };
  
  export default Search;