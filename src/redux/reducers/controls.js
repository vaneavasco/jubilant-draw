import {
    SET_BRUSH_ALPHA,
    SET_BRUSH_SIZE,
    SET_COLOR,
    BEGIN_RESET_CANVAS,
    FINISH_RESET_CANVAS,
    SETTINGS_PANEL_BRUSH,
    SETTINGS_PANEL_IMAGES,
    SET_IMAGE,
    SET_SETTINGS_PANEL,
} from '../constants/controls';

const defaultState = {
    color: '#ff5050',
    brushSize: 5,
    brushAlpha: 5,
    resetCanvas: false,
    image: '',
    settingsPanel: SETTINGS_PANEL_IMAGES,
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

        case SET_IMAGE: {
            return {
                ...state,
                image: action.payload,
            };
        }

        case SET_SETTINGS_PANEL: {
            return {
                ...state,
                settingsPanel: action.payload,
            };
        }

        default:
            return state;
    }
};

export default controls;