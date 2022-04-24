import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

const SearchPlaylistsResult = ({ query }) => {
    const { t } = useTranslation()
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
    }, [query])

    return (
        <div className='row'>
            {items.map(playlist => (
                <div className='col-6 border'>
                    <div className='d-inline-flex m-2 align-items-center' style={{ cursor: "pointer" }} key={ playlist.id } >
                    {playlist.images.length ? <img src={ playlist.images[0].url } style={{ height: "64px", width: "64px" }} /> : <div>No Image</div>}
                        <div className="m-3">
                            <div className='text-light'><strong>{ playlist.name }</strong></div>
                            <div className='text-light'>{ playlist.owner.display_name }</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SearchPlaylistsResult;