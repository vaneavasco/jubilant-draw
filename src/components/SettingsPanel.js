import React from 'react';
import { connect } from 'react-redux';
import { SETTINGS_PANEL_IMAGES } from '../redux/constants/controls';
import ImagePicker from './images/ImagePicker';
import BrushSettings from './BrushSettings';
import config from '../config';

const getPanel = panel => {
    switch (panel) {
        case SETTINGS_PANEL_IMAGES:
            return (<ImagePicker images={config.images}/>);

        default:
            return (<BrushSettings/>);
    }
};

const SettingsPanel = ({ panel }) => {
    return getPanel(panel);
};

const mapStateToProps = (state) => {
    const { controls: { settingsPanel: panel } } = state;

    return {
        panel,
    };
};

export default connect(mapStateToProps)(SettingsPanel);