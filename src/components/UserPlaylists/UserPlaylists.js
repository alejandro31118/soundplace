import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './UserPlaylists.css';

const UserPlaylists = () => {
    const [items, setItems] = useState([])
    const token = window.localStorage.getItem("token");

    useEffect(() => {
      const fetchItems = async () => {
        const result = await axios(`https://api.spotify.com/v1/me/playlists?limit=50`, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        })
        setItems(result.data.items)
        console.log(result.data.items)
      }
      fetchItems()
    }, [token])

    return (
        <div className='row card-container'>
            {items.map(playlist => (
                <div className='col-12 col-md-6 col-lg-4 col-xl-3 mb-4'>
                  <Link to={`/playlist/${playlist.id}`} className='none-link' key={ playlist.id }>
                    <div className='c-card'>
                        <div className='c-card__head'>
                            <img src={ playlist.images[0].url } className='card-img-top' />
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

export default UserPlaylists;