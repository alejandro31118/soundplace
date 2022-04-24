import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Icon from '../Icon/Icon';
import 'bootstrap/dist/css/bootstrap.min.css';

const Logout = ({ getQuery }) => {
    const { t } = useTranslation()
    
    const logout = () => {
        window.localStorage.removeItem('token')
        window.location.reload(true)
    }

    return (
        <div className='text-light' onClick={ logout } style={{ cursor: "pointer" }}>
            <span className='m-2'><Icon name="logout" color="#3B4252" size="1.5rem" /></span>
            <span className=''>{ t('LOGOUT') }</span>
        </div>
    );
};

export default Logout;