import React from 'react';
import { connect } from 'react-redux';

import './style.css';
import { beginResetCanvas } from '../redux/actions';

const ResetCanvas = ({ dispatch, color = '#ff5050' }) => {
    const onClick = () => dispatch(beginResetCanvas());

    return (
        <button className={'colorItem'} style={{ backgroundColor: color }} onClick={onClick}>X</button>
    );
};

export default connect()(ResetCanvas);