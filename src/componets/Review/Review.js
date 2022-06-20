import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import happyImage from '../../images/giphy.gif';

const Review = () => {
    const [cart, setCart] = useState([]);
    const [orderPlaced, setOrderPlaced] = useState(false);

    const handelPlaceOrder = () =>{
        setCart([]);
        processOrder();
        setOrderPlaced(true);
    }

    const removeProduct = (productKey)=>{
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }
    useEffect(()=>{
       const savedCart = getDatabaseCart();
       const productsKeys = Object.keys(savedCart);
       const cartProducts = productsKeys.map( key=>{
        const products = fakeData.find(pd => pd.key === key);
        products.quantity = savedCart[key];
        return products;
       })
       setCart(cartProducts);
    },[]);

    let thankYou;
    if(orderPlaced){
        thankYou = <center><img src={happyImage} alt="" /></center>;
    }
    let nothing;
    if(cart.length === 0){
        nothing = <div>
            <center>
                <h2>You don't have anything to your cart.....</h2>
                <h2>Please Add something to your cart</h2>
            </center>
        </div>
    }
    return (
        <div className='shop-container'>
            <div className='product-container'>
                {cart.map(pd=> <ReviewItem removeProduct={removeProduct} key={pd.key} products={pd}></ReviewItem>)}
                {thankYou}
                {nothing}
            </div>
            <div className='cart-container'>
                <Cart cart={cart}>
                <Link to="/review"><button onClick={handelPlaceOrder} className='place-order'>Place Order</button></Link>
                </Cart>
            </div>
        </div>
    );
};

export default Review;