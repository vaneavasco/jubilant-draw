import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaintBrush, faEraser } from '@fortawesome/free-solid-svg-icons';

import './style.css';
import { setColor } from '../redux/actions';

const Color = ({ dispatch, color = '#ff5050' }) => {
    const onClick = () => dispatch(setColor(color));

    return (
        <FontAwesomeIcon
            icon={faPaintBrush}
            color={'#000'}
            onClick={onClick}
            size='lg'
            fixedWidth
            className={'colorItem'}
            style={{ backgroundColor: color }}
        />
    );
};

export default connect()(Color);