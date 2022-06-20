import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    // const totalPrice = cart.reduce((total, prd) => total + prd.price,0) ;
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price * product.quantity;
    }
    let shipping = 0;
    if(total > 150){
        shipping = 4.99;
    }else if(total > 0){
        shipping = 20;
    }
    function formatNumber(num){
        const number = (num).toFixed(2);
        return number;
    }
    return (
        <div style={{textAlign:'center'}}>
            <h4>Order Summary</h4>
            <p>Items Ordered : {cart.length}</p>
            <p><small>Shipping Cost : {shipping}</small></p>
            <p>Total Price : {formatNumber(total + shipping)}</p>
            <br />
            {props.children}
        </div>
    );
};

export default Cart;