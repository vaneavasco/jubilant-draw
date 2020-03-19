import React from 'react';
import Color from './Color';

const colors = [
    '#ffffff',
    '#009933',
    '#ffff00',
    '#ff0000',
    '#0000ff',
    '#003366',
    '#000000'
];

const ColorPallet = () => {
    return (
        <div className={'colorsContainer'}>
            {
                colors.map(color => <Color color={color} /> )
            }
        </div>
    )
};

export default ColorPallet;