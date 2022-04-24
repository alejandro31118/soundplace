import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Icon from '../Icon/Icon';
import Logout from '../Logout/Logout';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';

const HeaderUserOptions = () => {
    const { t } = useTranslation()

    return (
      <div className="dropdown">
        <button className='btn btn-link dropdown-toggle text-light' type='button' data-bs-toggle='dropdown'>
            <Icon name="settings" color="#3B4252" size="1.5rem" />
        </button>
        <ul className='dropdown-menu bg-dark'>
            <li className='mb-2'>
                <Link to='/me' className='text-light'>
                    <span className='m-2'><Icon name="user" color="#3B4252" size="1.5rem" /></span>
                    <span className=''>{ t('USER_PROFILE') }</span>
                </Link>
            </li>
            <li>
                <Logout />
            </li>
        </ul>
      </div>
    );
  };
  
  export default HeaderUserOptions;