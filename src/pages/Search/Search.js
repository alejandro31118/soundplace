import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import SearchBar from '../../components/SearchBar/SearchBar';
import SearchTracksResult from '../../components/SearchTracksResult/SearchTracksResult';
import './Search.css';

const Search = ({}) => {
    const { t } = useTranslation()
    const [query, setQuery] = useState('')

    return (
      <div className='container search bg-dark'>
        <SearchBar getQuery={(q) => setQuery(q)} />
        <div className='flex-grow-1 my-2' style={{ overflowY: "auto" }}>
          <h4 className='text-light'>{ t('SONGS') }</h4>
          <SearchTracksResult query={ query }/>
        </div>
      </div>
    );
  };
  
  export default Search;