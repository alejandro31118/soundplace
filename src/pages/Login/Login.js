import React from 'react';
import { useTranslation } from 'react-i18next';
import { loginEndpoint } from '../../context/authEndpoint';
import LangSelector from '../../components/LangSelector/LangSelector';
import logo from './spotify-logo.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';

const Login = () => {
    const { t } = useTranslation()

    return (
      <div className='bg-black'>
        <div className='l-selector'>
          <LangSelector />
        </div>
        <div className='login'>
          <img src={ logo } alt="" />
          <a href={ loginEndpoint }>
            { t('SIGN_IN') }
          </a>
        </div>
      </div>
    );
  };
  
  export default Login;