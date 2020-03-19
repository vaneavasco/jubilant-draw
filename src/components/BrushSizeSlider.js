import React, { useState, useEffect } from 'react';
import InputRange from 'react-input-range';
import { connect } from 'react-redux';

import './style.css';
import SampleBrushSize from './SampleBrushSize';
import { setBrushSize } from '../redux/actions';

const BrushSizeSlider = ({ currentSize, dispatch }) => {
    const [size, setSizeState] = useState(currentSize);
    useEffect(() => {
        if (size !== currentSize) {
            setSizeState(currentSize);
        }
    }, [currentSize]);

    const onChangeComplete = (value) => dispatch(setBrushSize(value));

    return (
        <div className={'brushSliderContainer'}>
            <div className={'sliderContainer'}>
                <InputRange
                    maxValue={10}
                    minValue={1}
                    value={size}
                    onChange={onChangeComplete}
                />
            </div>
            <SampleBrushSize/>
        </div>
    );
};

const mapStateToProps = (state) => {
    const { controls: { brushSize: currentSize } } = state;
    return { currentSize };
};

export default connect(mapStateToProps)(BrushSizeSlider);