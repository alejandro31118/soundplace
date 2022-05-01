import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'

const Home = () => {
    const { t } = useTranslation()
    const [categories, setCategories] = useState([])
    const token = window.localStorage.getItem("token");

    useEffect(() => {
      const fetchItems = async () => {
        const result = await axios(`https://api.spotify.com/v1/browse/categories`, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        })
        setCategories(result.data.categories.items)
      }
      fetchItems()
    }, [token])


    return (
      <div className="home container">
        <h2 className='text-light title-home'>{t('DISCOVER')}</h2>
        <ul className='discover-list'>
          {categories.map(category => (
            <Link to={`/category/${category.id}`} className='none-link' key={ category.id }>
              <li className='discover-item'>
                  <img src={category?.icons[0].url} />
                  <h2>{category?.name === 'Dance/Electronic' ? 'EDM' : category?.name}</h2>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Home;