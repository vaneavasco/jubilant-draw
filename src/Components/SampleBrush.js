import React from 'react';

const SampleBrush = ({color = '#ff5050', size = 30}) => {
    return (
        <span className={'sampleBrush'} style={{backgroundColor: color, width: size, height: size}}>

        </span>
    )
};

export default SampleBrush;