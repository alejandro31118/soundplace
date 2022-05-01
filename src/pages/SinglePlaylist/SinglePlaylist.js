import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { formatMS } from '../../context/globalFunctions';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SinglePlaylist.css';
import '../../components/SearchTracksResult/TrackResult.css'

const SinglePlaylist = () => {
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
            setItems(result.data.tracks.items)
      }
      getPlaylistInfo()
    }, [playlistId, token])

    return (
        <div className='container single-playlist mt-2 sticky'>
          <div className='playlist-header row align-items-center'>
            <div className='col-2'>
              {playlistInfo.images !== undefined ? <img src={ playlistInfo.images[0].url } className='playlist-image' alt='' /> : <div>No Image</div>}
            </div>
            <div className='playlist-info col-10'>
                <h1>{playlistInfo.name}</h1>
                <p>
                  {playlistInfo.owner ? playlistInfo.owner.display_name : 'No'} · {playlistInfo.followers ? playlistInfo.followers.total : '0'} { t('FOLLOWERS') }
                </p>
            </div>
          </div>
          <div className='row justify-content-center mb-4'>
            {items.map(track => (
              <div className='trackrow border-bottom'>
                <img className="trackrow-album" src={track.track.album.images[0].url} alt="" />
                <div className="trackrow-info">
                    <h1>{track.track.name} - {formatMS(track.track.duration_ms)}</h1>
                    <p>
                        {track.track.artists.map((artist) => artist.name).join(", ")}
                    </p>
                </div>
              </div>
            ))}
          </div>
        </div>
    );
};

export default SinglePlaylist;