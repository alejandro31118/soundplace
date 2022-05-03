import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { formatMS } from '../../context/globalFunctions';
import '../../components/SearchTracksResult/TrackResult.css'
import '../../components/SearchArtistsResult/ArtistsResult.css'

const UserProfile = ({}) => {
    const { t } = useTranslation()
    const [user, setUser] = useState([])
    const [artists, setFollowedArtists] = useState([])
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
          const resultRecentlyTracks = await axios(`https://api.spotify.com/v1/me/player/recently-played?limit=5`, {
            headers: {
              'Authorization': `Bearer ${token}`,
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
          })
          const resultFollowedArtists = await axios(`https://api.spotify.com/v1/me/following?type=artist&limit=7`, {
            headers: {
              'Authorization': `Bearer ${token}`,
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
          })
          
          setUser(result.data)
          setFollowedArtists(resultFollowedArtists.data.artists.items)
          setTracks(resultRecentlyTracks.data.items)
          console.log(resultFollowedArtists.data.artists.items)
        }
        fetchUserData()
      }, [])

    return (
      <div className='container profile mt-3'>
        <div className='artist-header row align-items-center'>
          <div className='col-2'>
            <img src={ user.images ? user.images.url : 'https://ronaldmottram.co.nz/wp-content/uploads/2019/01/default-user-icon-8.jpg' } />
          </div>
          <div className='artist-info col-10'>
            <h4>{user?.display_name}</h4>
            <p>
              {user?.email}
            </p>
            <p>
              {user.followers ? user.followers.total : '0'} { t('FOLLOWERS') }
            </p>
          </div>
        </div>
        <h4 className='text-light mt-4'>{ t('FOLLOWED_ARTISTS') }</h4>
        <div className='menu-list artist-list'>
          {artists.map(artist => (
            <Link to={`/artist/${artist.id}`} className='none-link' key={ artist.id }>
              <div className="artist-result">
                <img src={ artist.images[0] ? artist.images[0].url : 'https://ronaldmottram.co.nz/wp-content/uploads/2019/01/default-user-icon-8.jpg' } />
                <p>{artist.name}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className='row justify-content-center mt-3 mb-4'>
          <h4 className='text-light'>{ t('RECENTLY_PLAYED_SONGS') }</h4>
            {tracks.map(track => (
              <div className='trackrow border-bottom'>
                <img className="trackrow-album" src={track?.track.album.images[0].url} alt="" />
                <div className="trackrow-info">
                    <h1>{track?.track.name} - {formatMS(track.track.duration_ms)}</h1>
                    <p>
                        {track?.track.artists.map((artist) => artist.name).join(", ")} - {t('DATE') + track.played_at.slice(0, -14)}
                    </p>
                </div>
              </div>
            ))}
          </div>
      </div>
    );
  };
  
  export default UserProfile;