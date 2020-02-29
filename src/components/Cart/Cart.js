import React, {useState} from 'react';
import s from './Cart.module.scss';
import {IoMdArrowDropupCircle, MdArrowDropDownCircle} from "react-icons/all";
const Cart = (props) => {

    const addQuantity = (id) => {
        props.addQuantity(id);
        debugger;
    };
    const subtractQuantity = (id) => {
        props.subtractQuantity(id);
    };

    let addedItems = props.items.length ?
        (
            props.items.map(item => {
                return (
                <div className={s.carts}>
                    <li key={item.id}>
                        <div className={s.images}>
                            <img src={item.img} alt={item.img} className=""/>
                        </div>

                        <div>
                            <span className={s.name_of_dish}>{item.dish}</span>
                            <p className={s.description}>{item.description}</p>
                            <p><b>Price: {item.price}$</b></p>
                            <div className={s.quantity}>
                                <div>
                                    <p>
                                        <b>Quantity: {item.quantity}</b>
                                    </p>
                                </div>
                                <div className={s.add_remove}>
                                    <span onClick={() => addQuantity(item.id)}><i className={s.up}><IoMdArrowDropupCircle /></i></span>
                                    <span onClick={() => subtractQuantity(item.id)}><i className={s.down}><MdArrowDropDownCircle /></i></span>
                                </div>
                                <div className={s.remove_btn}>
                                    <button onClick={() => props.removeItem(item.id)}>Remove</button>
                                </div>
                            </div>

                        </div>
                    </li>
                </div>
                )
            })
        ) :
        (
            <p>Nothing.</p>
        );
    return (
        <div className={s.container}>
            <div className={s.cart}>
                <h5>You have ordered:</h5>
                <ul className={s.collection}>
                    {addedItems}
                </ul>
            </div>
            <h4>Total price:  {props.total}$</h4>
        </div>
    )
};

export default Cart;