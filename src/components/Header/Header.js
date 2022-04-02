import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LangSelector from '../LangSelector/LangSelector';
import Logo from './logo.png';
import './Header.css';

//import 'bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap/dist/js/bootstrap.js';

const Header = () => {
    const { t } = useTranslation()

    return (
      <nav className="nav">
        <img className='logo' src={Logo} />
        
        <div className='menu'>
          <Link to='/'>{t('HOME')}</Link>
          <Link to='/trending'>{t('TRENDING')}</Link>
          <Link to='/library'>{t('LIBRARY')}</Link>
        </div>

        <div className='settings'>
            <LangSelector />
        </div>
      </nav>
    );
  };
  
  export default Header;