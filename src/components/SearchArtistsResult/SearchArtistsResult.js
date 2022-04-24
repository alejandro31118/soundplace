import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

const SearchArtistsResult = ({ query }) => {
    const { t } = useTranslation()
    const [items, setItems] = useState([])
    const token = window.localStorage.getItem("token");

    useEffect(() => {
      const fetchItems = async () => {
        const result = await axios(`https://api.spotify.com/v1/search?type=artist&limit=10&q=${query}`, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        })
        setItems(result.data.artists.items)
      }
      fetchItems()
    }, [query])

    return (
        <div className='row'>
            {items.map(artist => (
                <div className='col-6 border'>
                    <div className='d-inline-flex m-2 align-items-center' style={{ cursor: "pointer" }} key={ artist.id } >
                        {artist.images.length ? <img src={artist.images[0].url} style={{ height: "64px", width: "64px" }} alt=""/> : <div>No Image</div>}
                        <div className="m-3">
                            <div className='text-light'>{ artist.name }</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SearchArtistsResult;