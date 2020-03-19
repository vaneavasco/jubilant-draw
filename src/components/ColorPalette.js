import React from 'react';
import { connect } from 'react-redux';

import Color from './Color';
import ResetCanvas from './ResetCanvas';

const colors = [
    '#ffffff',
    '#009933',
    '#ffff00',
    '#ff0000',
    '#0000ff',
    '#003366',
    '#8B4513',
    '#000000',
];

const ColorPalette = () => {
    return (
        <div className={'colorsContainer'}>
            {
                colors.map(color => <Color color={color}/>)
            }
            <ResetCanvas />
        </div>
    );
};

export default connect()(ColorPalette);