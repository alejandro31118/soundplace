import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import 'bootstrap/dist/css/bootstrap.min.css';

const Logout = ({ getQuery }) => {
    const { t } = useTranslation()
    
    const logout = () => {
        window.localStorage.removeItem('token')
        window.location.reload(true)
    }

    return (
        <button className='btn btn-primary' onClick={ logout }>
            { t('LOGOUT') }
        </button>
    );
};

export default Logout;