import React, { useState, useEffect } from 'react';
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
                <div className='col-12 border-bottom'>
                    <div className='d-inline-flex m-2 align-items-center' style={{ cursor: "pointer" }} key={ track.id } >
                        {track.album.images.length ? <img src={ track.album.images[0].url } style={{ height: "64px", width: "64px" }} /> : <div>No Image</div>}
                        <div className="m-3">
                            <div className='text-light'>{ track.name }</div>
                            <div className='text-light'>
                            {track.artists.map(artist => (
                                artist.name + ', '
                            ))}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SearchTracksResult;