import React, {useState} from 'react';
import {sendRequest} from "../../api/Hooks/sendRequest";

import "./productsTable.css";
import EditModal from "../EditModal/EditModal";

const ProductsTable = ({products, setProducts, editIsOpen, setEditIsOpen}) => {

    const [count, setCount] = useState(4)
    const [product, setProduct] = useState({})
    const {sendRequestDelete} = sendRequest()

    const deleteUser = async (id) => {
        await  sendRequestDelete(`http://localhost:3001/products/${id}`)
        setProducts([...products.filter((product) => product.id !== id)])
        count > 4 && setCount(products.length - 1)
    }

    const openEditModal = (product) => {
        setProduct(product)
        setEditIsOpen(!editIsOpen)
    }

    return (
        <div className="productsTable">
            <h1>Products</h1>
            <div className="productsContainer">
                {
                    editIsOpen && <EditModal product={product} setEditIsOpen={setEditIsOpen}/>
                }
                <table>
                    <thead>
                    <tr>
                        <th>Product Image</th>
                        <th>Name</th>
                        <th>Rating</th>
                        <th>Category</th>
                        <th>Delete</th>
                        <th>Edit</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        products?.map((product, index) => {
                            if(index > count) return false
                            return  <tr key={product.id}>
                                <td><img className="productImg" src={product.img} alt="Product"/></td>
                                <td>{product.name}</td>
                                <td>{product.rating}</td>
                                <td>{product.category}</td>
                                <td><button onClick={() => {deleteUser(product.id)}}>Delete</button></td>
                                <td><button onClick={() => {openEditModal(product)}}>Edit</button></td>
                            </tr>
                        })
                    }
                    <tr>
                        <td className="productsButtonsTd" colSpan="5">
                            <div className="productsTableButtons">
                                <button style={{padding: "4px 20px"}}
                                        onClick={() => {setCount(count - 5)}}
                                        disabled={count === 4}>Show Less</button>
                                <button style={{padding: "4px 20px"}}
                                        onClick={() => {setCount(count + 5)}}
                                        disabled={count >= products.length - 1}>Show More</button>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProductsTable;