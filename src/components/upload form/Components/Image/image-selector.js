import React from 'react';

const ImageUpload = ({ onImageChange }) => {
    const handleImageChange = (event) => {
        const imageFile = event.target.files[0];
        onImageChange(imageFile);
    };

    return (
        <div>
            <h3>Select an image for the cover of your news</h3>
            <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className='py-1'
            />
        </div>
    );
}

export default ImageUpload;