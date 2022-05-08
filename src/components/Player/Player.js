import React, { useEffect, useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import './Player.css';

const Player = () => {
    const [currentSong, setCurrentSong] = useState(0);
    const songs = JSON.parse(localStorage.getItem('songs'));
    const song = songs[currentSong];

    return (
      <AudioPlayer
        autoPlay = {true}
        src = {song}
        autoPlayAfterSrcChange
        showJumpControls = {false}
        showSkipControls
        onClickPrevious={() => setCurrentSong(i => i - 1)}
        onClickNext = {() => setCurrentSong(i => i + 1)}
        onPlay={() => console.log('playing', currentSong)}
        onEnded={() => setCurrentSong(i => i + 1)}
      />
    );
  };
  
  export default Player;