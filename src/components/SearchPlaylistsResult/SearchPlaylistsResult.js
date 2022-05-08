import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './PlaylistResult.css'
import '../UserPlaylists/UserPlaylists.css';

const SearchPlaylistsResult = ({ query }) => {
    const [items, setItems] = useState([])
    const token = window.localStorage.getItem("token");

    useEffect(() => {
      const fetchItems = async () => {
        const result = await axios(`https://api.spotify.com/v1/search?type=playlist&include_external=audio&q=${query}`, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        })
        setItems(result.data.playlists.items)
        console.log(result.data.playlists.items)
      }
      fetchItems()
    }, [query, token])

    return (
        <div className='row justify-content-center'>
            {items?.map(playlist => (
                <div className='col-12 col-md-6 col-lg-4 col-xl-3 mb-4'>
                  <Link to={`/playlist/${playlist.id}`} className='none-link' key={ playlist.id }>
                    <div className='c-card-r'>
                        <div className='c-card__head-r'>
                            <img src={ playlist.images[0] ? playlist.images[0].url : 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/No_music.svg/1024px-No_music.svg.png' } className='card-img-top' />
                            </div>
                            <div className='c-card__body'>
                                <p className='c-card__name mb-1'>{ playlist.name }</p>
                            </div>
                    </div>
                  </Link>
                </div>
            ))}
        </div>
    );
};

export default SearchPlaylistsResult;