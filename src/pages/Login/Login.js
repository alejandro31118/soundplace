import React from 'react';
import { useTranslation } from 'react-i18next';
import { loginEndpoint } from '../../context/authEndpoint';
import LangSelector from '../../components/LangSelector/LangSelector';
import Icon from '../../components/Icon/Icon';
import spotifyLogo from './spotifyLogo.png';
import bg from './NordMont.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';

const Login = () => {
    const { t } = useTranslation()

    return (
      <div>
        <div className='login'>
          <div className='d-block l-selector'>
            <LangSelector />
          </div>
          <div className='d-flex align-items-center justify-content-center'>
            <div className=''>
              <div className='d-block text-center soundplace-div'>
                <p><Icon name="logo" color="#3B4252" size="8rem" /></p>
                <p className='title'>SoundPlace</p>
              </div>
              <div className='d-block text-center spotify-div'>
                <p>{ t('COLLABORATION') }</p>
                <img src={ spotifyLogo } className='spotify-logo mr-2' alt="" />
                <span className='ml-2'>Spotify</span>
              </div>
              <div className='d-block text-center mt-5'>
                <a href={ loginEndpoint } className='login-button text-center'> 
                  { t('SIGN_IN') }
                </a>
              </div>
            </div>
          </div>
        </div>
        <img src={ bg } className='bg-image' alt='' />
      </div>
    );
  };
  
  export default Login;