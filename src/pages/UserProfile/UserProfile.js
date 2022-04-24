import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import Icon from '../../components/Icon/Icon';

const UserProfile = ({}) => {
    const { t } = useTranslation()
    const [item, setItem] = useState([])
    const [tracks, setTracks] =useState([])
    const token = window.localStorage.getItem("token");

    useEffect(() => {
        const fetchUserData = async () => {
          const result = await axios(`https://api.spotify.com/v1/me`, {
            headers: {
              'Authorization': `Bearer ${token}`,
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
          })
          const resultRecentlyTracks = await axios(`https://api.spotify.com/v1/me/player/recently-played?limit=10`, {
            headers: {
              'Authorization': `Bearer ${token}`,
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
          })

          setItem(result.data)
          setTracks(resultRecentlyTracks.data.items)
          console.log(resultRecentlyTracks.data.items)
        }
        fetchUserData()
      }, [])

    return (
      <div className='container profile mt-3 bg-dark'>
        <div>
            {item.images && item.images.length !== 0 ? <img src={ item.images.url } style={{ height: "64px", width: "64px" }} /> : <Icon name="user" color="#3B4252" size="64px" />}
            <p>{item.display_name}</p>
            <p>{item.email}</p>
            {item.followers ? <p>{item.followers.total}</p> : <div>0</div>}
        </div>

        <div className='row mt-3'>
            <h4 className='text-light'>{ t('RECENTLY_PLAYED_SONGS') }</h4>
            {tracks.map(track => (
                <div className='col-6 border'>
                    <div className='d-inline-flex m-2 align-items-center' style={{ cursor: "pointer" }} key={ track.id } >
                        {track.track.album.images.length ? <img src={ track.track.album.images[0].url } style={{ height: "64px", width: "64px" }} /> : <div>No Image</div>}
                        <div className="m-3">
                            <div className='text-light'>{ track.track.name + ' | ' + track.track.artists.map(artist => (artist.name))}</div>
                            <div className='text-light'>{ t('DATE') + track.played_at.slice(0, -14) }</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    );
  };
  
  export default UserProfile;