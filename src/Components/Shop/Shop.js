import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {


    const[products,setProducts] = useState([])
    const[cart,setCart] = useState([])
    const[searchProducts,setSearchProducts] = useState([])

    useEffect( () => {
        fetch('./products.JSON')
        .then(res => res.json())
        .then(data => {
            setProducts(data)
            setSearchProducts(data)
        })
    },[])

    useEffect( () => {
        if(products.length){
            const savedCart = getStoredCart();
            const storedCart = [];
        for(const key in savedCart) {
            const addedProduct = products.find(product => product.key === key);
            if(addedProduct) {
                const quantity = savedCart[key];
                addedProduct.quantity = quantity
                storedCart.push(addedProduct);
            }
            
        }
         setCart(storedCart);
        }
        
    },[products])

    const handleAddToCart = (product) => {

        //console.log(product.name);
        let newCart =[];
        const exist = cart.find(pd => pd.key === product.key)
        if (exist) {

            const rest = cart.filter(pd => pd.key !== product.key);
            exist.quantity+=1;
            newCart=[...rest,product];

        }
        else {
            product.quantity=1;
            newCart = [...cart,product];
        }
        
        setCart(newCart);
        addToDb(product.key)

    }

    const handleSearch = (event) => {

        const searchText = event.target.value;
        const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
        setSearchProducts(matchedProducts)

    }

    return (


        <div >
            <div className="search-container">
            <input type="text" placeholder="Search Here" onChange={handleSearch} />
        </div>

        <div className="shop-container">
            <div className="product-container">

                {
                    searchProducts.map(product => <Product key={product.key} handleAddToCart={handleAddToCart} product={product}></Product>)
                }

            </div>
            <div className="cart-container">

                <Cart cart={cart}>
                    <Link to="/orders">
                        <button className="reviewBtn">Review Order</button> 
                    </Link>
                </Cart>

            </div>
            
        </div>
        </div>
    );
};

export default Shop;