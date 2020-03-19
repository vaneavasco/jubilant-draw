import React, { useState } from 'react';
import InputRange from 'react-input-range';

import './style.css';
import SampleBrush from './SampleBrush';

const BrushAlphaSlider = () => {
    const [brushSize, setBrushSize] = useState(5);
    return (
        <div className={'brushSliderContainer'}>
            <div className={'sliderContainer'}>
                <InputRange
                    maxValue={10}
                    minValue={1}
                    value={brushSize}
                    onChange={value => setBrushSize(value)}
                />
            </div>
            <SampleBrush/>
        </div>
    );
};

export default BrushAlphaSlider;