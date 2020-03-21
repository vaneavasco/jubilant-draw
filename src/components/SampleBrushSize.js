import React from 'react';
import { connect } from 'react-redux';

const SampleBrushSize = ({ color = '#ff5050', brushSize = 30 }) => {
    const borderRadius = Math.round(brushSize / 2);
    return (
        <div className={'sampleBrushContainer'}>
        <span className={'sampleBrush'}
              style={{ backgroundColor: color, width: brushSize, height: brushSize, borderRadius }}>

        </span>
        </div>
    );
};

const mapStateToProps = (state) => {
    const { controls: { color, brushSize } } = state;
    return { color, brushSize: brushSize * 3 };
};

export default connect(mapStateToProps)(SampleBrushSize);