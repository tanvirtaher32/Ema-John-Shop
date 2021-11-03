import React from 'react';
import useProducts from '../../Hooks/useProducts';
import useCart from '../../Hooks/useCart';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import { clearTheCart, removeFromDb } from '../../utilities/fakedb';
import { useHistory } from 'react-router';
import './OrderReview.css';

const OrderReview = () => {

    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    const history = useHistory();

    const handleRemove = (key) => {

        const newCart = cart.filter(product => product.key!==key);
        setCart(newCart);
        removeFromDb(key)

    }

    const handlePlaceOrder = () => {

        history.push('/shipping');
        // setCart([]);
        // clearTheCart()

    }
    return (
        <div className="shop-container">

            <div className="product-container">

                {
                    cart.map(product => <ReviewItem product={product} key={product.key} handleRemove={handleRemove}></ReviewItem>)
                }

            </div>

            <div className="cart-container">

                <Cart cart={cart}>
                    <button className="shipping-btn" onClick={handlePlaceOrder}>Proceed Shipping</button>
                </Cart>
            </div>
            
        </div>
    );
};

export default OrderReview;