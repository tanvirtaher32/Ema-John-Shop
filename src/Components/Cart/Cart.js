import React from 'react';
import './Cart.css'

const Cart = (props) => {

    const {cart} = props;
    let total = 0;
    let totalQuantity = 0;
    for(const product of cart) {
        product.quantity = !product.quantity ? 1 : product.quantity;
        total += product.price* parseInt(product.quantity);
        totalQuantity+=product.quantity;
    }

    const shipping = total>0 ?20 : 0;
    const tax = (total + shipping)*0.10;
    const grandTotal = total + shipping + tax;

    return (
        <div>
            <h2>
                    Order Summary
            </h2>
            <h4>
                    Items Ordered {totalQuantity}
            </h4>
            <p>Shipping : {shipping}</p>
            <p>Tax : {tax.toFixed(2)}</p>
            
            <p>
                Total : {grandTotal.toFixed(2)}
            </p>
            {props.children}
        </div>
    );
};

export default Cart;