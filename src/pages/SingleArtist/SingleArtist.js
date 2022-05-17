import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams, Link } from 'react-router-dom';
import { formatMS } from '../../context/globalFunctions';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SingleArtist.css';
import '../../components/SearchTracksResult/TrackResult.css'

const SingleArtist = () => {
    const { t } = useTranslation()
    const [topTracks, setTopTracks] = useState([])
    const [albums, setAlbums] = useState([])
    const [artistInfo, setArtistInfo] = useState([])
    const token = window.localStorage.getItem("token");
    const { artistId } = useParams();

    useEffect(() => {
        const getArtistInfo = async () => {
            const result = await axios(`https://api.spotify.com/v1/artists/${artistId}`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            setArtistInfo(result.data)
        }
        const getArtistAlbums = async () => {
            const result = await axios(`https://api.spotify.com/v1/artists/${artistId}/albums?limit=5&include_groups=album,single`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            setAlbums(result.data.items)
        }
        const getArtistTopTracks = async () => {
            const result = await axios(`https://api.spotify.com/v1/artists/${artistId}/top-tracks?market=ES`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            setTopTracks(result.data.tracks)
            console.log(result.data.tracks)
        }
        getArtistInfo()
        getArtistTopTracks()
        getArtistAlbums()
    }, [artistId, token])

    return (
        <div className='container single-artist mt-2 sticky'>
            <div className='artist-header row align-items-center'>
                <div className='col-12 col-md-3'>
                    {artistInfo.images !== undefined ? <img src={ artistInfo.images[0].url } className='artist-image' alt='' /> : <div>No Image</div>}
                </div>
                <div className='artist-info col-12 col-md-9'>
                    <h1>{artistInfo.name}</h1>
                    <p>
                        {artistInfo.followers ? artistInfo.followers.total : '0'} { t('FOLLOWERS') }
                    </p>
                </div>
            </div>
            <h2 className='mt-4'>{t('TOP_TRACKS')}</h2>
            <div className='row mb-4'>
                {topTracks.map(track => (
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
            <h2 className='mt-4'>{t('ALBUMS')}</h2>
            <div className='row justify-content-around mb-5'>
                {albums.map(album => (
                    <div className='card mt-3' style={{ width: '15rem' }} key={album.id}>
                        <Link to={`/album/${album.id}`} className='none-link' key={ album.id }>
                            {album.images.length ? <img src={ album.images[0].url } className='card-img-top' /> : <div>No Image</div>}
                            <div className="card-body">
                                <span className='card-text'>{album.name.length > 20 ? album.name.substring(0,20) + '...' : album.name}</span>
                                <p className='card-text'>{album.release_date.slice(0, -6)} · { t(`${album.album_type}`) }</p>       
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SingleArtist;
