import React from 'react';
import { useTranslation } from 'react-i18next';
import { loginEndpoint } from '../../context/authEndpoint';
import LangSelector from '../../components/LangSelector/LangSelector';
import Icon from '../../components/Icon/Icon';
import bg from './NordMont.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';

const Login = () => {
    const { t } = useTranslation()

    return (
      <div className='row'>
        <div className='d-none d-lg-block col-md-5'>
          <img src={ bg } className='bg-image' alt='' />
        </div>
        <div className='col-12 col-md-7'>
          <div className='col-12 p-3'>
            <LangSelector />
          </div>
          <div className='container main-div'>
            <div className='mb-5 mt-5'>
              <Icon name="logo" color="#3B4252" size="8rem" />
              <h1 className='mb-5'><strong>SoundPlace</strong></h1>
              <div className='container mt-5'>
                <h2>{ t('LOGIN_MSG_1') }</h2>
                <h3>{ t('LOGIN_MSG_2') }</h3>
              </div>
            </div>
            <div className='btn btn-color'>
              <a href={ loginEndpoint } className='link'> 
                { t('SIGN_IN') }
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Login;