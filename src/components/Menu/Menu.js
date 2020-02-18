import React, {useState} from 'react';
import s from './Menu.module.scss'
import LittleCart from "./LittleCart/LittleCart";
import {addQuantity, subtractQuantity} from "../../redux/menu-reducer";

const Menu = (props) => {
    const [boolValue, setBoolValue] = useState(false);

    const handleClick = (id) => {
        props.addToCart(id);
        setBoolValue(true);
    };

    return (
        <div>
            <section className={s.background_menu}>
                <h1>The Menu</h1>
            </section>
            <section className={s.second_part_menu}>
                <div className={s.header_menu_text}>
                    <div className={s.left_text}>
                        <p>Chef Michel Paris Jr and Head Chef Steve Groves have created a menu of dishe using <br/>
                            the finest seasonal produce. Table service throughout for food and drinks. Taking <br/>
                            inspiration from around the world, all the dishes on our menu are
                        </p>
                    </div>
                    <div className={s.right_text}>
                        <p>designed for sharing. Using incredible British produce, whole animals and fish <br/>
                            are butchered and prepared on site every day, and paired with ingredients so good <br/>
                            they really speak for themselves.
                        </p>
                    </div>
                </div>
            </section>
            <section className={s.main_menu}>
                <div className={s.menu_part}>
                    {props.menu.map(m => <div key={m.id}>
                        <div className={s.price_header}>
                            <h4>{m.dish}</h4>
                            <span>{m.price}$</span>
                        </div>
                        <div className={s.desc_button}>
                            <p>{m.description}</p>
                            <button onClick={() => handleClick(m.id)}>Order now</button>
                        </div>
                    </div>)}
                </div>
                <div className={s.cart}>
                    <LittleCart  price={props.total}
                                 items={props.items}
                                 addQuantity={props.addQuantity}
                                 subtractQuantity={props.subtractQuantity}
                                 itemTotal={props.itemTotal}
                    />
                </div>
            </section>
        </div>

    )
};

export default Menu;