import React, {useState} from 'react';
import {sendRequest} from "../../api/Hooks/sendRequest";
import {randomIdGenerator} from "../../api/RandomIdGenerator/randomIdGenerator";
import AddProductInputs from "../AddProductInputs/AddProductInputs";

import "./addProduct.css";

const AddProduct = ({products, setProducts}) => {

    const [newProduct, setNewProduct] = useState({
        name: "",
        description: "",
        price: "",
        rating: "",
        category: "",
        img: null
    })
    const [img, setImg] = useState(null)
    const [isImageSelected, setIsImageSelected] = useState(false)

    const {sendRequestPost} = sendRequest()

    const handleInputChange = (e) => {
        setNewProduct({...newProduct, [e.target.name]: e.target.value})
    }

    const handleProductFileInputChange = (e) => {
        const reader = new FileReader()
        reader.readAsDataURL(e.target.files[0])
        reader.onload = () => {
            setImg(reader.result)
        }
        setIsImageSelected(true)
    }

    const handleSignUp = async (e) => {
        e.preventDefault()
        const data = {
            id: randomIdGenerator(products),
            name: newProduct.name,
            description: newProduct.description,
            price: newProduct.price,
            rating: newProduct.rating,
            category: newProduct.category,
            img: img
        }

        const result = await sendRequestPost("http://localhost:3001/products", data)
        setProducts([...products, result])

        setIsImageSelected(false)
        setNewProduct({
            name: "",
            description: "",
            price: "",
            rating: "",
            category: "",
            img: null
        })
    }


    return (
        <div className="addProductContainer">
            <div className="addProductContent">
                <AddProductInputs onChange={handleInputChange}
                                  nameValue={newProduct.name}
                                  descriptionValue={newProduct.description}
                                  priceValue={newProduct.price}
                                  ratingValue={newProduct.rating}
                                  categoryValue={newProduct.category}
                                  onFileChange={handleProductFileInputChange}
                                  imageSelected={isImageSelected}
                                  onClick={handleSignUp}
                                  buttonText="Add Product"/>
            </div>
        </div>
    );
};

export default AddProduct;