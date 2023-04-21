import React from 'react';

import "./userImageInput.css";
const UserImageInput = ({onChange, imageSelected}) => {

    return (
        <div className="imageSection">
            <label className="imageSectionLabel" htmlFor="userImageInput">
                Upload New Image
                <input type="file" id="userImageInput" name="img" onChange={onChange}/>
            </label>
            <input type="checkbox" className="imageSelection" checked={imageSelected} readOnly={true}/>
        </div>
    );
};

export default UserImageInput;