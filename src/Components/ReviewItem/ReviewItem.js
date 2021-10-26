import React from 'react';

const ReviewItem = (props) => {

    const {name,price,quantity,img,key} = props.product;
    const {handleRemove} = props;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
           <div>
           <h4 className="product-name">{name}</h4>
            <h6>{quantity}</h6>
            <p>{price}</p>
            <button className="purchase-btn" onClick={() => handleRemove(key)}>Remove</button>
           </div>
        </div>
    );
};

export default ReviewItem;