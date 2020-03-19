import {
    SET_BRUSH_ALPHA,
    SET_BRUSH_SIZE,
    SET_COLOR,
    BEGIN_RESET_CANVAS,
    FINISH_RESET_CANVAS,
} from '../constants/controls';

const defaultState = {
    color: '#ff5050',
    brushSize: 5,
    brushAlpha: 5,
    resetCanvas: false,
};

const controls = (state = defaultState, action) => {
    switch (action.type) {
        case SET_COLOR:
            return {
                ...state,
                color: action.payload,
            };

        case SET_BRUSH_SIZE:
            return {
                ...state,
                brushSize: action.payload,
            };
        case SET_BRUSH_ALPHA:
            return {
                ...state,
                brushAlpha: action.payload,
            };

        case BEGIN_RESET_CANVAS:
            return {
                ...state,
                resetCanvas: true,
            };

        case FINISH_RESET_CANVAS:
            return {
                ...state,
                resetCanvas: false,
            };

        default:
            return state;
    }
};

export default controls;