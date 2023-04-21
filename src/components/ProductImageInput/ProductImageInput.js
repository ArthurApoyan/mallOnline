import React from 'react';

import "./productImageInput.css";
const ProductImageInput = ({onChange, imageSelected}) => {

    return (
        <div className="imageSection">
            <label className="imageSectionLabel" htmlFor="productImageInput">
                Upload New Image
                <input type="file" id="productImageInput" name="img" onChange={onChange}/>
            </label>
            <input type="checkbox" className="imageSelection" checked={imageSelected} readOnly={true}/>
        </div>
    );
};

export default ProductImageInput;