import React from 'react';
import DeleteIcon from "../../utils/icons/DeleteIcon";

import "./cart.css";
const Cart = ({cartItems, plusProduct, minusProduct, deleteFromCart}) => {

    let totalSum = 0;

    return (
        <div>
            {
                cartItems.map((item) => {
                    totalSum += item.sumPrice
                    return(
                        <div key={item.id} className="cart">
                            <div className="cartImage">
                                <img src={item.img} alt="cartItem"/>
                            </div>
                            <div className="cartName">
                                <h2>{item.name}</h2>
                            </div>
                            <div className="cartPrice">
                                <p>Price: {item.sumPrice}$</p>
                            </div>
                            <div className="countButtons">
                                <button onClick={() => {minusProduct(item.id)}} disabled={item.count === 1}>-</button>
                                    {item.count}
                                <button onClick={() => {plusProduct(item.id)}}>+</button>
                            </div>
                            <div className="deleteButton">
                                <button onClick={() => {deleteFromCart(item.id)}}>
                                    <DeleteIcon/>
                                </button>
                            </div>
                        </div>
                    )
                })
            }
            <div className="buySection">
                <div className="totalPrice"><span>Total price:</span> {totalSum}$</div>
                <button onClick={() => {alert("Purchase completed")}}>Buy</button>
            </div>
        </div>
    );
};

export default Cart;