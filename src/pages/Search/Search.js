import React, { useState } from 'react';
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
      <div className='container search mt-3'>
        <SearchBar getQuery={(q) => setQuery(q)} />
        <div className='flex-grow-1 my-2' style={{ overflowY: "auto" }}>
          {query ? <h4 className='text-light'>{ t('SONGS') }</h4> : <h3 className='text-center'>{ t('NO_DATA') }</h3>}
          <SearchTracksResult query={ query }/>
          
          {query ? <h4 className='text-light mt-5'>{ t('ARTISTS') }</h4> : <div />}
          <SearchArtistsResult query={ query }/>

          {query ? <h4 className='text-light mt-1'>{ t('PLAYLISTS') }</h4> : <div />}
          <SearchPlaylistsResult query={ query }/>
        </div>
      </div>
    );
  };
  
  export default Search;