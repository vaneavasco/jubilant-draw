import React from 'react';
import ImageItem from './ImageItem';

const ImagePicker = ({ images = [] }) => {
    return (
        <div className={'imagePickerContainer'}>
            {images.map(image => <ImageItem src={image}/>)}
        </div>
    );
};

export default ImagePicker;