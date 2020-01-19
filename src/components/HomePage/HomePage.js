import React from 'react';
import s from './HomePage.module.scss';
import second_foto from "../../assets/images/photo-1414235077428-338989a2e8c0.jpeg"
import eat_1 from '../../assets/images/eat-1.jpg';
import eat_2 from '../../assets/images/eat-2.jpg';
import eat_3 from '../../assets/images/eat-3.jpg';
import eat_4 from '../../assets/images/eat-4.jpg';
import bacon_1 from '../../assets/images/bacon--bottom.jpg';
import bacon_2 from '../../assets/images/bacon-bottom-2.jpg';
import {NavLink} from "react-router-dom";
import Footer from "../Footer/Footer";

const HomePage = () => {

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
                    <h2>Discover</h2>
                    <h1>OurStory</h1>
                    <p>Rosa is a restaurant, bar and coffee roastery located on a busy corner site in <br/>
                    Farringdon’s Exmouth Market. With glazed frontage on two sides of the <br/>
                    building, overlooking the market and a bustling London intersection.<br/></p>
                    <NavLink to={"/reservations"}>about us</NavLink>
                </div>
                <div className={s.img_second}>
                    <img src={second_foto} alt="foto"/>
                </div>
            </div>
            <section className={s.third_part}>
                <h2>Tasteful</h2>
                <h1>Recipes</h1>
            </section>
            <section className={s.four_part}>
                <div className={s.images}>
                    <img src={eat_1} alt="food_image"/>
                    <img src={eat_2} alt="food_image"/>
                    <img src={eat_3} alt="food_image"/>
                    <img src={eat_4} alt="food_image"/>
                </div>
                <div className={s.text_four}>
                    <h2>Discover</h2>
                    <h1>Menu</h1>
                    <p>For those with pure food indulgence in mind, come next door and sate <br/>
                    your desires with our ever changing internationally and seasonally inspired <br/>
                    small plates.  We love food, lots of different food, just like you.</p> <br/>
                    <NavLink to={"/menu"}>VIEW THE FULL MENU</NavLink>
                </div>
            </section>
            <section className={s.fifth_part}>
                <h2>The Perfect</h2>
                <h1>Blend</h1>
            </section>
            <section className={s.six_part}>
                <div className={s.text_six}>
                    <h2>Culinary</h2>
                    <h1>Delight</h1>
                    <p>We promise an intimate and relaxed dining experience that offers <br/>
                    something different to local and foreign patrons and ensures you enjoy a<br/>
                    memorable food experience every time.</p>
                    <NavLink to={"/reservation"}>MAKE A RESERVATION</NavLink>
                </div>
                <div className={s.six_images}>
                    <img src={bacon_1} alt=""/>
                    <img src={bacon_2} alt=""/>
                </div>
            </section>
            <Footer />
        </div>
    )
};

export default HomePage;