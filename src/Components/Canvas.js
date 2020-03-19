import React from 'react';
import useWindowDimensions from '../hooks/useWindowDimensions';
import CanvasDraw from 'react-canvas-draw';

const Canvas = (props) => {
    const { height, width } = useWindowDimensions();

    return (
        <CanvasDraw
            canvasHeight={height - 120}
            canvasWidth={width}
            brushColor={'#4444447F'}
        />
    );
};

export default Canvas;