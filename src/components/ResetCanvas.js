import React from 'react';
import { connect } from 'react-redux';

import './style.css';
import { beginResetCanvas } from '../redux/actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedo } from '@fortawesome/free-solid-svg-icons';

const ResetCanvas = ({ dispatch, color = '#ff5050' }) => {
    const onClick = () => dispatch(beginResetCanvas());

    return (
        <FontAwesomeIcon
            icon={faRedo}
            color={color}
            onClick={onClick}
            size='lg'
            fixedWidth
            className={'colorItem'}
        />
    );
};

export default connect()(ResetCanvas);