import React from 'react';
import { connect } from 'react-redux';

import './style.css';
import { setColor } from '../redux/actions';

const Color = ({ dispatch, color = '#ff5050' }) => {
    const onClick = () => dispatch(setColor(color));

    return (
        <button className={'colorItem'} style={{ backgroundColor: color }} onClick={onClick}>&nbsp;</button>
    );
};

export default connect()(Color);