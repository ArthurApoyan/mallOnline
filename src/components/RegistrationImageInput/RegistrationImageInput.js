import React from 'react';

import "./registrationImageInput.css";
const RegistrationImageInput = ({onChange, imageSelected}) => {

    return (
        <div className="imageSection">
            <label className="imageSectionLabel" htmlFor="imageInput">
                Upload New Image
                <input type="file" id="imageInput" name="img" onChange={onChange}/>
            </label>
            <input type="checkbox" className="imageSelection" checked={imageSelected} readOnly={true}/>
        </div>
    );
};

export default RegistrationImageInput;