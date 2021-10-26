import React from 'react';
import img from '../../images/giphy.gif';

const PlaceOrder = () => {
    return (
        <div>
            <h1>Order Placed Successfully</h1>
            <img src={img} alt="" style={{textAlign: 'center'}} />
        </div>
    );
};

export default PlaceOrder;