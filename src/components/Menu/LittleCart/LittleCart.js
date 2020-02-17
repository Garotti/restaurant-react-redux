import React from 'react';
import s from './LittleCart.module.scss'
import {NavLink} from "react-router-dom";

const LittleCart = (props) => {
    return (
        <div className={s.cart}>
            <button>Delivery</button>
            <button>Takeaway</button>
            <div className={s.cart_header}>
                <h4>Your order</h4>
                <div>
                    {props.items.length ?
                        props.items.map(item => <div>
                                <p>{item.quantity}x {item.dish} </p><span>{item.price}$</span>
                            </div>) :
                        <div className={s.cart_image}>
                            <img src="https://cdn0.iconfinder.com/data/icons/shopping-cart-26/1000/Shopping-Basket-03-512.png" alt="cart"/>
                            <p>Card is empty</p>
                        </div>
                    }
                    <hr/>
                    <NavLink to={'#'} className={s.cart_image_a}>I have a coupon</NavLink>
                </div>
            </div>
            <h3>Total price: {props.price}</h3>
        </div>
    );
};

export default LittleCart;