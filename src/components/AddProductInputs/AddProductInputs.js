import React from 'react';
import ProductImageInput from "../ProductImageInput/ProductImageInput";

import "./addProductInputs.css"

const AddProductInputs = ({
                              onChange,
                              nameValue,
                              descriptionValue,
                              priceValue,
                              ratingValue,
                              categoryValue,
                              onFileChange,
                              imageSelected,
                              onClick,
                              buttonText
                          }) => {
    return (
        <form className="addProductInputs" onSubmit={onClick}>
            <input type="text" onChange={onChange} name="name" value={nameValue} placeholder="Product Name"/>
            <input type="text" onChange={onChange} name="description" value={descriptionValue} placeholder="Description"/>
            <input type="text" onChange={onChange} name="price" value={priceValue} placeholder="Price"/>
            <input type="text" onChange={onChange} name="rating" value={ratingValue} placeholder="Rating"/>
            <input type="text" onChange={onChange} name="category" value={categoryValue} placeholder="Category"/>
            <ProductImageInput onChange={onFileChange}
                               imageSelected={imageSelected}/>
            <button>{buttonText}</button>
        </form>
    );
};

export default AddProductInputs;