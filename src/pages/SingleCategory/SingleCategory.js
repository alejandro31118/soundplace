import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SingleCategory.css'

const SingleCategory = () => {
    const { t } = useTranslation()
    const [playlists, setPlaylists] = useState([])
    const [category, setCategory] = useState([])
    const token = window.localStorage.getItem("token");
    const { categoryId } = useParams();

    useEffect(() => {
        const fetchItems = async () => {
        const result = await axios(`https://api.spotify.com/v1/browse/categories/${categoryId}/playlists`, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        const category = await axios(`https://api.spotify.com/v1/browse/categories/${categoryId}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        setPlaylists(result.data.playlists.items)
        setCategory(category.data)
        }
        fetchItems()
    }, [categoryId, token])


    return (
        <div className='container category-playlists'>
            <div className="dicover-category">
                <h2 className='text-light title-category'>{category.name}</h2>
                <ul className='discover-list'>
                    {playlists.map(playlist => (
                        <Link to={`/playlist/${playlist.id}`} className='none-link' key={ playlist.id }>
                            <li className='discover-item'>
                                <img src={playlist?.images[0].url} />
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SingleCategory;