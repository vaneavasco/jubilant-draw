import React from 'react';
import BrushSizeSlider from './BrushSizeSlider';
import BrushAlphaSlider from './BrushAlphaSlider';

const BrushSettings = () => {
    return (
        <>
            <BrushSizeSlider/>
            <BrushAlphaSlider/>
        </>
    );
};

export default BrushSettings;