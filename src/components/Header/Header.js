import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LangSelector from '../LangSelector/LangSelector';
import Icon from '../Icon/Icon';
import './Header.css';

const Header = () => {
    const { t } = useTranslation()

    return (
      <nav>
        <Icon name="logo" color="#3B4252" size="4.5rem" />
        
        <div className='middle-nav'>
          <Link to='/' className='link'>
            <Icon className='icon-nav' name="home" color="#3B4252" size="1.5rem" />
            <p>{t('HOME')}</p>
          </Link>
          <Link to='/trending' className='link'>
            <Icon name="trending" color="#3B4252" size="1.5rem" />
            <p>{t('TRENDING')}</p>
          </Link>
          <Link to='/library' className='link'>
            <Icon name="folder" color="#3B4252" size="1.5rem" />
            <p>{t('LIBRARY')}</p>
          </Link>
        </div>

        <div className='settings'>
            <LangSelector />
        </div>
      </nav>
    );
  };
  
  export default Header;