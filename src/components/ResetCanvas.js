import React from 'react';
import { connect } from 'react-redux';

import './style.css';
import { beginResetCanvas } from '../redux/actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEraser } from '@fortawesome/free-solid-svg-icons';

const ResetCanvas = ({ dispatch, color = '#FF0C00' }) => {
    const onClick = () => dispatch(beginResetCanvas());

    return (
        <FontAwesomeIcon
            icon={faEraser}
            color={color}
            onClick={onClick}
            size='lg'
            fixedWidth
            className={'colorItem'}
        />
    );
};

export default connect()(ResetCanvas);