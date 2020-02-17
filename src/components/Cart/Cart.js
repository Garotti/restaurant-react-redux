import React from 'react';
import s from './Cart.module.scss';
const Cart = (props) => {


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
                            <p>
                                <b>Quantity: {item.quantity}</b>
                            </p>
                            <button onClick={() => props.removeItem(item.id)}>Remove</button>
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