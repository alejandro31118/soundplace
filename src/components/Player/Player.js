import React from 'react';
import Icon from '../Icon/Icon';
import { useTranslation } from 'react-i18next';

import './Player.css';

const Player = () => {
    const { t } = useTranslation()

    return (
      <div className="player">
        <Icon name="logo" color="#3B4252" size="4.5rem" />
        
        <div className='control'>
            <Icon name="prev" color="#3B4252" size="2.5rem" />
            <Icon name="play" color="#3B4252" size="2.5rem" />
            <Icon name="next" color="#3B4252" size="2.5rem" />
        </div>

        <div className='settings'>
            <Icon name="dots" color="#3B4252" size="2.5rem" />
        </div>
      </div>
    );
  };
  
  export default Player;