import React, {useEffect, useRef, useState} from 'react';
import CartIcon from "../../utils/icons/CartIcon";
import Cart from "../../components/Cart/Cart";

import "./productsPage.css";

const ProductsPage = ({products, children}) => {

    const [cartItems, setCartItems] = useState([])
    const [cartIsOpen, setCartIsOpen] = useState(false)

    const totalCount = useRef(0)

    const setProductToCart = (product) => {

        const findItem = cartItems.find((item) => {
            return(
                item.id === product.id
            )
        })

        if(findItem){
            findItem.count++
            findItem.sumPrice += +product.price
            setCartItems([...cartItems.map((item) => item.id === findItem.id ? {...item, count: findItem.count, sumPrice: findItem.sumPrice} : item)])
            totalCount.current += 1
            return
        }

        product.count = 1
        product.sumPrice = +product.price
        setCartItems([...cartItems, product])
        totalCount.current += 1
    }

    const openCart = () => {
        setCartIsOpen(!cartIsOpen)
    }

    const deleteFromCart = (id) => {
        const filteredCart = cartItems.filter((item) => {
            return item.id !== id
        })
        cartItems.forEach((item) => {
            if(item.id === id){
                totalCount.current = totalCount.current - item.count
            }
        })
        setCartItems([...filteredCart])
    }

    const plusProduct = (id) => {
        const foundItem = cartItems.find((item) => item.id === id)
        foundItem.count++
        foundItem.sumPrice += (+foundItem.price)
        setCartItems([...cartItems.map((item) => item.id === foundItem.id ? {...item, count: foundItem.count, sumPrice: foundItem.sumPrice} : item)])
        totalCount.current += 1
    }

    const minusProduct = (id) => {
        const foundItem = cartItems.find((item) => item.id === id)
        foundItem.count--
        foundItem.sumPrice -= (+foundItem.price)
        setCartItems([...cartItems.map((item) => item.id === foundItem.id ? {...item, count: foundItem.count, sumPrice: foundItem.sumPrice} : item)])
        totalCount.current -= 1
    }

    return (
        <div className="productsPage">
            {children}
            <div className="cartButton">
                <button onClick={openCart}>Cart {<CartIcon/>}</button>
                {totalCount.current > 0 && <div>{totalCount.current}</div>}
            </div>
            {
                cartIsOpen && cartItems.length !== 0 && <div className="openCart">
                                                            <Cart cartItems={cartItems}
                                                                  plusProduct={plusProduct}
                                                                  minusProduct={minusProduct}
                                                                  deleteFromCart={deleteFromCart}/>
                                                        </div>
            }
            {
                cartIsOpen && cartItems.length === 0 && <div className="openCart">
                                                            No Items
                                                        </div>
            }
            <div className="productsListContainer">
                {
                    products.map((product) => {
                        return (
                            <div key={product.id} className="product">
                                <div className="productImage">
                                    <img src={product.img} alt="Product"/>
                                    <span><span>Rating:</span> {product.rating}</span>
                                </div>
                                <div className="productInfo">
                                    <span><span>Category:</span> {product.category}</span>
                                    <h2>{product.name}</h2>
                                    <span><span>Price:</span> {product.price}$</span>
                                    <p>{product.description}</p>
                                </div>
                                <div>
                                    <button onClick={() => {
                                        setProductToCart(product)
                                    }}>{<CartIcon/>}</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default ProductsPage;