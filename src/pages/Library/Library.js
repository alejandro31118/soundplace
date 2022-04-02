import React from 'react';
import { useTranslation } from 'react-i18next';

const Playlists = () => {
    const { t } = useTranslation()

    return (
      <div className="">
        <h2>{t('PLAYLISTS')}</h2>
      </div>
    );
  };
  
  export default Playlists;