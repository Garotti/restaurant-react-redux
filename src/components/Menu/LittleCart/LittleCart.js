import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";

import s from './LittleCart.module.scss'

import {AiOutlineShoppingCart, FaShoppingCart, GiCrossMark, GiIronCross, IoIosAdd, IoIosRemove} from "react-icons/all";

const LittleCart = (props) => {

    const [scrollValue, setScrollValue] = useState(false);
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const isTop = window.scrollY < 450;
            if (isTop !== true) {
                setScrollValue(true);
            } else {
                setScrollValue(false);
            }
            return () => {
                window.removeEventListener('scroll', () => {
                });
            }
        });
    });

    const changeToggle = () => {
        setToggle(!toggle);
    };

    const subtractQuantity = (id) => {
        props.subtractQuantity(id);
    };
    const addQuantity = (id) => {
        props.addQuantity(id)
    };


    return (
        <>
            <div className={toggle ? s.hidden : !s.isShow}>
                <div className={scrollValue ? s.active : s.cart}>
                    <button>Delivery</button>
                    <button className={s.takeaway_btn}>Takeaway</button>
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
                                            <span onClick={() => addQuantity(item.id)}><IoIosAdd/></span>
                                            <span className={s.subtract}
                                                  onClick={() => subtractQuantity(item.id)}><IoIosRemove/></span>
                                        </div>
                                        {item.price}$
                                    </p>
                                </div>) :
                                <div className={s.cart_image}>
                                    <img
                                        src="https://cdn0.iconfinder.com/data/icons/shopping-cart-26/1000/Shopping-Basket-03-512.png"
                                        alt="cart"/>
                                    <p>Card is empty</p>
                                </div>
                            }
                            <hr/>
                            <NavLink to={'#'} className={s.cart_image_a}>I have a coupon</NavLink>
                        </div>
                    </div>
                    <h3>Total price: {props.price}$</h3>
                    <NavLink to={"/cart"} className={s.relocateToCart}>go to Cart</NavLink>
                </div>
            </div>
            <div className={s.show_btn}>
                <button onClick={() => changeToggle()}><i>{toggle ? <FaShoppingCart></FaShoppingCart> :
                    <GiCrossMark></GiCrossMark>}</i></button>
            </div>
        </>
    );
};

export default LittleCart;
