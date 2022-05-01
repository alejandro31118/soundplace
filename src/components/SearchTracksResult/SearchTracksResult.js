import React, { useState, useEffect } from 'react';
import { formatMS } from '../../context/globalFunctions';
import axios from 'axios';

const SearchTracksResult = ({ query }) => {
    const [items, setItems] = useState([])
    const token = window.localStorage.getItem("token");

    useEffect(() => {
      const fetchItems = async () => {
        const result = await axios(`https://api.spotify.com/v1/search?type=track&include_external=audio&limit=10&q=${query}`, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        })
        setItems(result.data.tracks.items)
      }
      fetchItems()
    }, [query, token])

    return (
        <div className='row'>
            {items.map(track => (
              <div className='trackrow border-bottom'>
                <img className="trackrow-album" src={track.album.images[0].url} alt="" />
                <div className="trackrow-info">
                    <h1>{track.name} - {formatMS(track.duration_ms)}</h1>
                    <p>
                        {track.artists.map((artist) => artist.name).join(", ")}
                    </p>
                </div>
              </div>
            ))}
        </div>
    );
};

export default SearchTracksResult;