import React, {useEffect, useState} from 'react';
import {sendRequest} from "../../api/Hooks/sendRequest";
import EditProductImageInput from "../EditProductImageInput/EditProductImageInput";

import "./editModal.css";

const EditModal = ({product, setEditIsOpen}) => {

    const [editedProduct, setEditedProduct] = useState({
        name: product.name,
        description: product.description,
        price: product.price,
        rating: product.rating,
        category: product.category,
        img: product.img
    })
    const [isEditImageSelected, setIsEditImageSelected] = useState(false)
    const {sendRequestPut} = sendRequest()

    useEffect(() => {
        window.scrollTo(0, 2330)
    }, [])

    const handleInputChange = (e) => {
        setEditedProduct({...editedProduct, [e.target.name] : e.target.value})
    }

    const handleFileInputChange = (e) => {
        const reader = new FileReader()
        reader.readAsDataURL(e.target.files[0])
        reader.onload = () => {
            setEditedProduct({...editedProduct, img: reader.result})
        }
        setIsEditImageSelected(true)
    }

    const handleEdit = async (e) => {
        e.preventDefault()
        await sendRequestPut(`http://localhost:3001/products/${product.id}`, editedProduct)
        setIsEditImageSelected(false)
        setEditIsOpen(false)
    }

    return (
            <div>
                <div className="backdrop"></div>
                <form className="editProductInputs" onSubmit={handleEdit}>
                    <button className="closeButton" onClick={() => {setEditIsOpen(false)}}>x</button>
                    <input type="text" onChange={handleInputChange} name="name" value={editedProduct.name} placeholder="Product Name"/>
                    <input type="text" onChange={handleInputChange} name="description" value={editedProduct.description} placeholder="Description"/>
                    <input type="text" onChange={handleInputChange} name="price" value={editedProduct.price} placeholder="Price"/>
                    <input type="text" onChange={handleInputChange} name="rating" value={editedProduct.rating} placeholder="Rating"/>
                    <input type="text" onChange={handleInputChange} name="category" value={editedProduct.category} placeholder="Category"/>
                    <EditProductImageInput onChange={handleFileInputChange} imageSelected={isEditImageSelected}/>
                    <button className="editButton">Edit</button>
                </form>
            </div>
    );
};

export default EditModal;