import React from 'react';
import { useTranslation } from 'react-i18next';

const Trending = () => {
    const { t } = useTranslation()

    return (
      <div className="">
        <h2>{t('TRENDING')}</h2>
      </div>
    );
  };
  
  export default Trending;