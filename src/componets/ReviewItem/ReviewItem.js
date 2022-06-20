import React from 'react';

const ReviewItem = (props) => {
    const {name,quantity,key,price} = props.products;
    const reviewItemStyle = {
        borderBottom: '1px solid lightgray',
        padding: '15px'
    }

    return (
        <div style={reviewItemStyle}>
            <h4>{name}</h4>
            <p>Quantity: {quantity}</p>
            <small>Price: ${price}</small><br /><br />
            <button onClick={()=>props.removeProduct(key)} className='main-button'>REMOVE</button>
        </div>
    );
};

export default ReviewItem;