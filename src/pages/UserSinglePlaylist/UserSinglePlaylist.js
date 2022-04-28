import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

const UserSinglePlaylist = () => {
    const { t } = useTranslation()
    const [items, setItems] = useState([])
    const [playlistInfo, setPlaylistInfo] = useState([])
    const token = window.localStorage.getItem("token");
    const { playlistId } = useParams();

    useEffect(() => {
      const getPlaylistInfo = async () => {
        const result = await axios(`https://api.spotify.com/v1/playlists/${playlistId}`, {
              headers: {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              }
            })
            setPlaylistInfo(result.data)
            console.log(result.data)
      }

      const fetchItems = async () => {
        const result = await axios(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
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
      getPlaylistInfo()
    }, [])

    return (
        <div className='container single-playlist'>
          <div className=''>
            {playlistInfo.images !== undefined ? <img src={ playlistInfo.images[0].url } style={{ height: "10rem", width: "10rem" }} /> : <div>No Image</div>}
            <span>{playlistInfo.name}</span>
          </div>
            {/* {items.map(playlist => (
                <div className='col-12 col-md-6 col-lg-4 col-xl-3 mb-4' key={ playlist.id }>
                    <div className='c-card' onClick={() => { setModalOpen(true)}}>
                        <div className='c-card__head'>
                            <img src={ playlist.images[0].url } className='card-img-top' />
                            </div>
                            <div className='c-card__body'>
                                <p className='c-card__name mb-1'>{ playlist.name }</p>
                            </div>
                    </div>
                </div>
            ))} */}
        </div>
    );
};

export default UserSinglePlaylist;