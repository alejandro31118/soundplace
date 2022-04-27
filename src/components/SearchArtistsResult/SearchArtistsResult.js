import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import Icon from '../Icon/Icon';
import './ArtistsResult.css';

const SearchArtistsResult = ({ query }) => {
    const { t } = useTranslation()
    const [items, setItems] = useState([])
    const token = window.localStorage.getItem("token");

    useEffect(() => {
      const fetchItems = async () => {
        const result = await axios(`https://api.spotify.com/v1/search?type=artist&limit=8&q=${query}`, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        })
        setItems(result.data.artists.items)
      }
      fetchItems()
    }, [query])

    return (
      <div className='menu-list artist-list'>
        {items.map(artist => (
          <div key={artist.id} className="artist-result">
            <img src={ artist.images[1] ? artist.images[1].url : 'https://upload.wikimedia.org/wikipedia/en/e/ee/Unknown-person.gif' } />
            <p>{artist.name}</p>
          </div>
        ))}
      </div>
    );
};

export default SearchArtistsResult;