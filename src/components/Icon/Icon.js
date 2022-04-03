import React from 'react';
import parse from 'html-react-parser';
import { icons } from './icons';
import './Icon.css';

const Icon = ({color, name}) => {

    return (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        focusable="false"
        fill="none"
        role="img"
        stroke={ color }
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        width= "24px" 
        height= "24px"
        viewBox="0 0 24 24"> { parse(icons[name]) } </svg>
    );
  };
  
  export default Icon;