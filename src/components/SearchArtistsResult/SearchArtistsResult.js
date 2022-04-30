import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './ArtistsResult.css';

const SearchArtistsResult = ({ query }) => {
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
    }, [query, token])

    return (
      <div className='menu-list artist-list'>
        {items.map(artist => (
          <Link to={`/artist/${artist.id}`} className='none-link' key={ artist.id }>
            <div className="artist-result">
              <img src={ artist.images[0] ? artist.images[0].url : 'https://upload.wikimedia.org/wikipedia/en/e/ee/Unknown-person.gif' } />
              <p>{artist.name}</p>
            </div>
          </Link>
        ))}
      </div>
    );
};

export default SearchArtistsResult;