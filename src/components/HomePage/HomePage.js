import React, {useEffect} from 'react';

import s from './HomePage.module.scss';

import {NavLink} from "react-router-dom";
import Footer from "../Footer/Footer";

const HomePage = ({home, menu, delight}, props) => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <div>
            <section className={s.photo}>
                <div className={s.main_page}>
                    <span className={s.welcome}><h2>Welcome</h2><br/>
                    <h1 className={s.rosa}>THE ROSA</h1>
                    <p>Ready to be opened</p>
                        <button>explore</button>
                    </span>
                </div>
            </section>
            <div className={s.our_story}>
                <div className={s.text_second}>
                    <h2>{home.title}</h2>
                    <h1>{home.header}</h1>
                    <p>{home.description}</p>
                    <NavLink to={"/reservations"}>{home.bottom_link}</NavLink>
                </div>
                <div className={s.img_second}>
                    <img src={home.img} alt="dish_img"/>
                </div>
            </div>
            <section className={s.third_part}>
                <div className={s.third_headers}>
                    <h2>Tasteful</h2>
                    <h1>Recipes</h1>
                </div>
            </section>
            <section className={s.four_part}>
                <div className={s.images}>
                    <img src={menu.img1} alt="food_image"/>
                    <img src={menu.img2} alt="food_image"/>
                    <img src={menu.img3} alt="food_image"/>
                    <img src={menu.img4} alt="food_image"/>
                </div>
                <div className={s.text_four}>
                    <h2>{menu.title}</h2>
                    <h1>{menu.header}</h1>
                    <p>{menu.description}</p>
                    <NavLink to={"/menu"}>{menu.bottom_link}</NavLink>
                </div>
            </section>
            <section className={s.fifth_part}>
                <div className={s.fifth_headers}>
                    <h2>The Perfect</h2>
                    <h1>Blend</h1>
                </div>
            </section>
            <section className={s.six_part}>
                <div className={s.text_six}>
                    <h2>{delight.title}</h2>
                    <h1>{delight.header}</h1>
                    <p>{delight.description}</p>
                    <NavLink to={"/reservation"}>{delight.bottom_link}</NavLink>
                </div>
                <div className={s.six_images}>
                    <img src={delight.img_bacon} alt="food_img"/>
                    <img src={delight.img_bacon2} alt="food_img"/>
                </div>
            </section>
            <Footer/>
        </div>
    )
};

export default HomePage;
