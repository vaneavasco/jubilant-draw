import React from 'react';

import './style.css';

const Color = ({color = '#ff5050'}) => {
    return (
        <button className={'colorItem'} style={{backgroundColor: color}}></button>
    )
};

export default Color;