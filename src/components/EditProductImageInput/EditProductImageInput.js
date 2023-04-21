import React from 'react';

import "./editProductImageInput.css";
const EditProductImageInput = ({onChange, imageSelected}) => {

    return (
        <div className="imageSection">
            <label className="imageSectionLabel" htmlFor="editProductImageInput">
                Upload New Image
                <input type="file" id="editProductImageInput" name="img" onChange={onChange}/>
            </label>
            <input type="checkbox" className="imageSelection" checked={imageSelected} readOnly={true}/>
        </div>
    );
};

export default EditProductImageInput;