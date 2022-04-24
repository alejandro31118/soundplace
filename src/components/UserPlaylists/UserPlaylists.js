import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import './UserPlaylists.css';

const UserPlaylists = ({ query }) => {
    const { t } = useTranslation()
    const [items, setItems] = useState([])
    const token = window.localStorage.getItem("token");

    const showId = (data) => {
        alert('Funciona: ' + data)
    }

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
    }, [query])

    return (
        <div className='row card-container'>
            {items.map(playlist => (
                <div className='col-12 col-md-6 col-lg-4 col-xl-3 mb-4' key={ playlist.id }>
                    <div className='c-card' onClick={() => {alert(playlist.id)}}>
                        <div className='c-card__head'>
                            <img src={ playlist.images[0].url } className='card-img-top' />
                            </div>
                            <div className='c-card__body'>
                                <p className='c-card__name mb-1'>{ playlist.name }</p>
                            </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default UserPlaylists;