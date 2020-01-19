import React from 'react';
import s from './Footer.module.scss';
import {FaInstagram, FaTelegramPlane, FaTwitter, IoLogoFacebook} from "react-icons/all";

const Footer = () => {
    return(
        <div>
            <section className={s.seven_part}>
                <div className={s.about}>
                    <h4>ABOUT ROSA</h4><br/>
                    <p>ROSA is an enchanting and easy-to-use parallax Restaurant WordPress theme <br/>
                        that allows you to tell your story in a dynamic, narrative and enjoyable way,<br/>
                        making it perfect for restaurants, bakeries, bars or coffee shops.</p> <br/>
                </div>
                <div className={s.follow}>
                    <h4>FOLLOW ALONG</h4>
                    <div className={s.icons}>
                        <li><a href={"https://www.facebook.com/"}><IoLogoFacebook></IoLogoFacebook></a></li>
                        <li><a href={"https://www.instagram.com/"}><FaTwitter></FaTwitter></a></li>
                        <li><a href={"https://www.facebook.com/"}><FaInstagram></FaInstagram></a></li>
                        <li><a href={"https://www.facebook.com/"}><FaTelegramPlane></FaTelegramPlane></a></li>
                    </div>
                </div>
                <div className={s.newsletter}>
                    <h4>NEWSLETTER</h4>
                    <div>
                        <input type="text" placeholder={"Your email address"}/>
                    </div>
                </div>
            </section>
            <footer className={s.footer}>
                <p>© ROSA 2019  •   13 Hanway Square, London   •   Tel: 71494563 </p>
            </footer>
        </div>
    )
};

export default Footer;