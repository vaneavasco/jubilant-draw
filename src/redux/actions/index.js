import {
    SET_BRUSH_ALPHA,
    SET_BRUSH_SIZE,
    SET_COLOR,
    BEGIN_RESET_CANVAS,
    FINISH_RESET_CANVAS,
    SET_SETTINGS_PANEL, SETTINGS_PANEL_BRUSH, SET_IMAGES_PANEL, SETTINGS_PANEL_IMAGES, SET_IMAGE,
} from '../constants/controls';

export const setBrushSize = brushSize => ({
    type: SET_BRUSH_SIZE,
    payload: brushSize,
});

export const setColor = color => ({
    type: SET_COLOR,
    payload: color,
});

export const setAlpha = alpha => ({
    type: SET_BRUSH_ALPHA,
    payload: alpha,
});

export const beginResetCanvas = alpha => ({
    type: BEGIN_RESET_CANVAS,
});

export const finishResetCanvas = alpha => ({
    type: FINISH_RESET_CANVAS,
});

export const displayBrushPanel = () => ({
    type: SET_SETTINGS_PANEL,
    payload: SETTINGS_PANEL_BRUSH,
});

export const displayImagesPanel = () => ({
    type: SET_IMAGES_PANEL,
    payload: SETTINGS_PANEL_IMAGES,
});

export const setImage = image => ({
    type: SET_IMAGE,
    payload: image,
});