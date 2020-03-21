import React from 'react';
import { connect } from 'react-redux';

const SampleBrush = ({ color = '#ff5050', size = 30, brushAlpha }) => {
    return (
        <div className={'sampleBrushContainer'}>
            <span
                className={'sampleBrush'}
                style={{ backgroundColor: `${color}${brushAlpha}`, width: size, height: size }}>

            </span>
        </div>
    );
};

const mapStateToProps = (state, ownProps) => {
    const { controls: { color, brushAlpha, brushSize } } = state;
    const hexBrushAlpha = Math.round(brushAlpha * 255 / 10).toString(16);
    return { color, brushAlpha: hexBrushAlpha, brushSize };
};

export default connect(mapStateToProps)(SampleBrush);