import React from 'react';
import { connect } from 'react-redux';

import '../style.css';
import { setImage } from '../../redux/actions';

const ImageItem = ({ src, dispatch }) => {
    const onClick = () => dispatch(setImage(src));
    return (
        <img src={src} className={'imageItem'} alt={'pick image'} onClick={onClick}/>
    );
};

export default connect()(ImageItem);
