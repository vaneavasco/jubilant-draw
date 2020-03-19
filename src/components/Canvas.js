import React, { useRef } from 'react';
import CanvasDraw from 'react-canvas-draw';
import { connect } from 'react-redux';

import useWindowDimensions from '../hooks/useWindowDimensions';
import { finishResetCanvas } from '../redux/actions';

const Canvas = ({ color, brushAlpha, brushSize, resetCanvas, dispatch }) => {
    const { height, width } = useWindowDimensions();
    let ref = useRef(null);

    if (resetCanvas) {
        ref.current.clear();
        dispatch(finishResetCanvas());
    }

    return (
        <CanvasDraw
            ref={ref}
            canvasHeight={height - 120}
            canvasWidth={width}
            brushColor={`${color}${brushAlpha}`}
            brushRadius={brushSize * 5}
            hideGrid={true}
        />
    );
};

const mapStateToProps = (state) => {
    const { controls: { color, brushAlpha, brushSize, resetCanvas } } = state;
    const hexBrushAlpha = Math.round(brushAlpha * 255 / 10).toString(16);
    return { color, brushAlpha: hexBrushAlpha, brushSize, resetCanvas };
};

export default connect(mapStateToProps)(Canvas);