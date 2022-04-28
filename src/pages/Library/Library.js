import React from 'react';
import { useTranslation } from 'react-i18next';
import UserPlaylists from '../../components/UserPlaylists/UserPlaylists';
import './Library.css';

const Playlists = () => {
    const { t } = useTranslation()

    return (
      <div className="container library mt-3">
        <h2 className='mb-4'>{t('PLAYLISTS')}</h2>
        <UserPlaylists />
      </div>
    );
  };
  
  export default Playlists;