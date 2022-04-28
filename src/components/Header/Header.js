import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LangSelector from '../LangSelector/LangSelector';
import Icon from '../Icon/Icon';
import HeaderUserOptions from '../HeaderUserOptions/HeaderUserOptions';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';

const Header = () => {
    const { t } = useTranslation()

    return (
      <nav className='border-bottom'>
        <Icon name="logo" color="#E5E9F0" size="4.5rem" />
        
        <div className='middle-nav'>
          <Link to='/' className='nav-item-l'>
            <Icon className='icon-nav' name="home" color="#E5E9F0" size="1.5rem" />
            <p>{t('HOME')}</p>
          </Link>
          <Link to='/search' className='nav-item-l'>
            <Icon name="search" color="#E5E9F0" size="1.5rem" />
            <p>{t('SEARCH')}</p>
          </Link>
          <Link to='/library' className='nav-item-l'>
            <Icon name="folder" color="#E5E9F0" size="1.5rem" />
            <p>{t('LIBRARY')}</p>
          </Link>
        </div>

        <div className='settings'>
            <LangSelector />
            <HeaderUserOptions />
        </div>
      </nav>
    );
  };
  
  export default Header;