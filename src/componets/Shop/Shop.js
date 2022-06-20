import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
import {addToDatabaseCart, getDatabaseCart} from '../../utilities/databaseManager'
import { Link } from 'react-router-dom';

const Shop = () => {
    const first10 = fakeData.slice(0,10);
    // eslint-disable-next-line
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productsKeys = Object.keys(savedCart);
        const cartProducts = productsKeys.map( key=>{
            const products = fakeData.find(pd => pd.key === key);
            products.quantity = savedCart[key];
            return products;
        })
    setCart(cartProducts);
    },[]);

    const handelAddProducts = (product) =>{
        const ToBeaddedKey = product.key;
        const sameProduct = cart.find(pd => pd.key === ToBeaddedKey);
        let count = 1;
        let newCart;
        if(sameProduct){
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const others = cart.filter(pd=>pd.key !== ToBeaddedKey);
            newCart = [...others, sameProduct];
        }else{
            product.quantity = 1;
            newCart = [...cart, product];
        }
        
        setCart(newCart);
        
        addToDatabaseCart(product.key, count);
    }

    return (
        <div className='shop-container'>
           <div className="product-container">
                {
                    products.map(pd => <Product handelAddProducts={handelAddProducts} product= {pd} key={pd.key}> </Product>)
                }
           </div>
           <div className="cart-container">
            <Cart cart={cart}>
            <Link to="/review"><button className='main-button'>REVIEW ITEMS</button></Link>
            </Cart>
           </div>
        </div>
    );
};

export default Shop;