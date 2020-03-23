import React, { useState, useEffect, useRef } from 'react';
import CanvasDraw from 'react-canvas-draw';
import { connect } from 'react-redux';

import useWindowDimensions from '../hooks/useWindowDimensions';
import { finishResetCanvas } from '../redux/actions';

import './style.css';

const Canvas = ({ color, brushAlpha, brushSize, resetCanvas, image, dispatch }) => {
    const [dimensions, setDimensions] = useState({ width: 0, height: 0, image });
    const containerRef = useRef(null);
    let ref = useRef(null);
    const { width, height } = useWindowDimensions();

    useEffect(() => {
        if (containerRef.current) {
            setDimensions({
                height: containerRef.current.clientHeight,
                width: containerRef.current.clientWidth,
            });
            ref.current.drawImage();
        } else {
            setDimensions({
                height,
                width,
            })
        }
    }, [width, height, image]);

    //const { height, width } = useWindowDimensions();


    if (resetCanvas) {
        ref.current.clear();
        dispatch(finishResetCanvas());
    }

    const adjustedHeight = dimensions.height ? dimensions.height - 10 : 0;
    const adjustedWidth = dimensions.width ? dimensions.width - 20 : 0;

    return (
        <div className={'canvasContainer'} ref={containerRef}>
                <CanvasDraw
                    ref={ref}
                    canvasHeight={adjustedHeight}
                    canvasWidth={adjustedWidth}
                    brushColor={`${color}${brushAlpha}`}
                    brushRadius={brushSize * 3}
                    hideGrid={true}
                    lazyRadius={0}
                    imgSrc={image}
                />
        </div>
    );
};

const mapStateToProps = (state) => {
    const { controls: { color, brushAlpha, brushSize, resetCanvas, image } } = state;
    const hexBrushAlpha = Math.round(brushAlpha * 255 / 10).toString(16);
    return { color, brushAlpha: hexBrushAlpha, brushSize, resetCanvas, image };
};

export default connect(mapStateToProps)(Canvas);