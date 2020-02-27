import React, {useState} from 'react';
import s from './Menu.module.scss'
import LittleCart from "./LittleCart/LittleCart";
import {addQuantity, subtractQuantity} from "../../redux/menu-reducer";

const Menu = (props) => {
    const [boolValue, setBoolValue] = useState(false);
    const handleClick = (id) => {
        props.addToCart(id);
        console.log(props.total);
        setBoolValue(true);
    };
    const handleSetDessert = (id) => {
        props.setDessert(id);
    };
    const handleSetMains = (id) => {
        props.setMains(id);
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
                    <h2>Meals</h2>
                    <div className={s.menu__colums}>
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
                    <h2>Desserts</h2>
                    <div className={s.menu__colums}>
                        {props.desserts.map(dess => <div key={dess.id}>
                            <div className={s.price_header}>
                                <h4>{dess.dish}</h4>
                                <span>{dess.price}$</span>
                            </div>
                            <div className={s.desc_button}>
                                <p>{dess.description}</p>
                                <button onClick={() => handleClick(dess.id)}>Order now</button>
                            </div>
                        </div>)}
                    </div>
                </div>
                <div className={s.cart}>
                    <LittleCart price={props.total}
                                items={props.items}
                                dessert={props.dessert}
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