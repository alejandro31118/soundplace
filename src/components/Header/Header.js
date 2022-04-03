import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LangSelector from '../LangSelector/LangSelector';
import Icon from '../Icon/Icon';
import Logo from './logo.png';
import './Header.css';

const Header = () => {
    const { t } = useTranslation()

    return (
      <nav className="nav">
        <img className='logo' src={Logo} />
        {//<Icon name="music" color="#3B4252" />
        }
        
        <div className='menu'>
          <Link to='/' className='link'>{t('HOME')}<Icon name="home" color="#3B4252" /></Link>
          <Link to='/trending' className='link'>{t('TRENDING')}<Icon name="trending" color="#3B4252" /></Link>
          <Link to='/library' className='link'>{t('LIBRARY')}<Icon name="folder" color="#3B4252" /></Link>
        </div>

        <div className='settings'>
            <LangSelector />
        </div>
      </nav>
    );
  };
  
  export default Header;