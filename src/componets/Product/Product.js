import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = (props) => {
    const {img, name, seller,price,stock} = props.product;
    return (
        <div className='product' >
            <div>
                <img src={img} alt="" />
            </div>
            <div style={{marginLeft:'50px'}}>
                <h4 className='product-name'>{name}</h4><br />
                <p><small>by : {seller}</small></p>
                <p>${price}</p>
                <p><small>Only {stock} left in the left - order soon</small></p>
                <button onClick={()=>props.handelAddProducts(props.product)} className='main-button'><FontAwesomeIcon icon={faShoppingCart} /> Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;