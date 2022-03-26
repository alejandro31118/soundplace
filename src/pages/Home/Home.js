import React from 'react';
import { useTranslation } from 'react-i18next';

const Home = () => {
    const { t } = useTranslation()

    return (
      <div className="">
        <h2>Home</h2>
      </div>
    );
  };
  
  export default Home;