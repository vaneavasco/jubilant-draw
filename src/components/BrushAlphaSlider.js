import React, { useState, useEffect } from 'react';
import InputRange from 'react-input-range';
import { connect } from 'react-redux';

import './style.css';
import SampleBrush from './SampleBrush';
import { setAlpha } from '../redux/actions';

const BrushAlphaSlider = ({ currentAlpha, dispatch }) => {
    const [alpha, setAlphaState] = useState(currentAlpha);
    useEffect(() => {
        if (alpha !== currentAlpha) {
            setAlphaState(currentAlpha);
        }
    }, [currentAlpha]);

    const onChangeComplete = (value) => dispatch(setAlpha(value));

    return (
        <div className={'brushSliderContainer'}>
            <div className={'sliderContainer'}>
                <InputRange
                    maxValue={10}
                    minValue={1}
                    value={alpha}
                    onChange={onChangeComplete}
                />
            </div>
            <SampleBrush/>
        </div>
    );
};

const mapStateToProps = (state) => {
    const { controls: { brushAlpha: currentAlpha } } = state;
    return { currentAlpha };
};

export default connect(mapStateToProps)(BrushAlphaSlider);