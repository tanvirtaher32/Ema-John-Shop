import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Rating from 'react-rating';
import './Product.css'

const Product = (props) => {

    const{name,img,seller,price,stock,star} = props.product;
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className="product">

            <div>
            <img src={img} alt="" />
            </div>
            <div>
            <h3 className="product-name">{name}</h3>
            <p><small>by: {seller}</small></p>
            <p>Price: {price}</p>
            <p>Only {stock}left in stock</p>
            <Rating readonly
            initialRating={star}
            emptySymbol="far fa-star icon-color"
            fullSymbol="fas fa-star icon-color"
            ></Rating>
            <br />
            <button className="purchase-btn" onClick={() => props.handleAddToCart(props.product)}> {element} Add to cart</button>
            </div>
        </div>
    );
};

export default Product;