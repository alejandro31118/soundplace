import React from 'react';
import parse from 'html-react-parser';
import { icons } from './icons';
import './Icon.css';

const Icon = ({color, name, size}) => {

    return (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        focusable="false"
        fill="none"
        role="img"
        stroke={ color }
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        width= { size } 
        height= { size }
        viewBox="0 0 24 24"> { parse(icons[name]) } </svg>
    );
  };
  
  export default Icon;