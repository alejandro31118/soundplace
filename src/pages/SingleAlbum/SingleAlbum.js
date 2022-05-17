import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { formatMS } from '../../context/globalFunctions';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SingleAlbum.css'
import '../../components/SearchTracksResult/TrackResult.css'

const SingleAlbum = () => {
    const { t } = useTranslation()
    const [tracks, setTracks] = useState([])
    const [albumInfo, setAlbumInfo] = useState([])
    const token = window.localStorage.getItem("token");
    const { albumId } = useParams();

    useEffect(() => {
        const getAlbumInfo = async () => {
            const result = await axios(`https://api.spotify.com/v1/albums/${albumId}`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            setAlbumInfo(result.data)
            setTracks(result.data.tracks.items)
            console.log(result.data.tracks.items)
        }
        getAlbumInfo()
    }, [albumId, token])

    return (
        <div className='container single-album mt-2 sticky'>
            <div className='album-header row align-items-center'>
                <div className='col-12 -col-md-2'>
                    {albumInfo.images !== undefined ? <img src={ albumInfo.images[0].url } className='album-image' alt='' /> : <div>No Image</div>}
                </div>
                <div className='album-info col-12 col-md-9'>
                    <h1>{albumInfo?.name}</h1>
                    <p>
                    {albumInfo?.artists?.map((artist) => artist.name).join(", ")} · {albumInfo?.release_date?.slice(0, -6)} · { t(`${albumInfo?.album_type}`) }
                    </p>
                </div>
            </div>
            <div className='row mb-4'>
                {tracks.map(track => (
                    <div className='trackrow border-bottom'>
                        <img src={ albumInfo?.images[0].url } className='trackrow-album' alt='' />
                        <div className="trackrow-info">
                            <h1>{track.name} - {formatMS(track.duration_ms)}</h1>
                            <p>
                                {track.artists.map((artist) => artist.name).join(", ")}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SingleAlbum;
