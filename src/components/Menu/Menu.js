import React from 'react';
import s from './Menu.module.scss'

const Menu = () => {
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
                            are butchered and prepared on site every day, and paired with ingredients so good  <br/>
                            they really speak for themselves.
                        </p>
                    </div>
                </div>
            </section>
        </div>

    )
};

export default Menu;