import React from 'react';
import s from './LittleCart.module.scss'
import {NavLink} from "react-router-dom";
import {subtractQuantity} from "../../../redux/menu-reducer";
import {IoIosAdd, IoIosRemove} from "react-icons/all";

const LittleCart = (props) => {

    const subtractQuantity = (id) =>{
        props.subtractQuantity(id);
    };
    const addQuantity = (id) => {
        props.addQuantity(id)
    };

    return (
        <div className={s.cart}>
            <button>Delivery</button>
            <button>Takeaway</button>
            <div className={s.cart_header}>
                <h4>Your order</h4>
                <div>
                    {props.items.length ?
                        props.items.map(item => <div>
                            <p className={s.little_cart}>{item.quantity}x
                                <div>
                                    <span className={s.little_header}>{item.dish}</span>
                                </div>
                                <div>
                                    <span onClick={() => addQuantity(item.id)}><IoIosAdd /></span>
                                    <span className={s.subtract} onClick={() => subtractQuantity(item.id)}><IoIosRemove /></span>
                                </div>
                                {item.price}$</p>
                        </div>) :
                        <div className={s.cart_image}>
                            <img src="https://cdn0.iconfinder.com/data/icons/shopping-cart-26/1000/Shopping-Basket-03-512.png"
                                 alt="cart"/>
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