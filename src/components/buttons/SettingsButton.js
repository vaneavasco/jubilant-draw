import React from 'react';
import { connect } from 'react-redux';

import '../style.css';
import { displayBrushPanel, displayImagesPanel } from '../../redux/actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faCog } from '@fortawesome/free-solid-svg-icons';
import { SETTINGS_PANEL_IMAGES } from '../../redux/constants/controls';

const getAction = panel => {
    switch (panel) {
        case SETTINGS_PANEL_IMAGES:
            return {
                action: displayBrushPanel,
                icon: faImage,
            };

        default:
            return {
                action: displayImagesPanel,
                icon: faCog,
            };
    }
};

const SettingsButton = ({ panel, color = '#FF0C00', dispatch }) => {
    const { action, icon } = getAction(panel);
    const onClick = () => dispatch(action());

    return (
        <FontAwesomeIcon
            icon={icon}
            color={color}
            size='lg'
            fixedWidth
            className={'colorItem'}
            onClick={onClick}
        />
    );
};

const mapStateToProps = (state) => {
    const { controls: { settingsPanel: panel } } = state;

    return {
        panel,
    };
};

export default connect(mapStateToProps)(SettingsButton);