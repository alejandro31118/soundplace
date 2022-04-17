import React from 'react';
import { useTranslation } from 'react-i18next';
import Icon from '../../components/Icon/Icon';
import './Login.css';

const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&response_type=token&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state`


const Login= () => {
    const { t } = useTranslation()
    console.log(process.env.REACT_APP_CLIENT_ID)
    return (
      <div className='container'>
        <a href={AUTH_URL}>
          <Icon name="user" color="#3B4252" size="1.5rem" />
          { t('SIGN_IN') }
        </a>
      </div>
    );
  };
  
  export default Login;