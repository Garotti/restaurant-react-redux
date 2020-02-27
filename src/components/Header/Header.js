import React, {useState} from 'react';
import s from './Header.module.scss';
import {NavLink} from 'react-router-dom'
import {
    AiFillCloseCircle,
    FaInstagram,
    FaShoppingCart,
    FaTelegramPlane,
    FaTwitter,
    GiHamburgerMenu,
    IoLogoFacebook
} from "react-icons/all";

const Header = (props) => {

    const [toggle, setToggle] = useState(true);

    const handleClick = () => {
        setToggle(!toggle);
        console.log(toggle);
    };

    return (
        <header>
             <nav className={`${s.navbar} ${!toggle ? s.active : s.close} }`}>
                    <div className={s.nav_left}>
                        <NavLink to={'/'}><h2>ROSA</h2></NavLink>
                    </div>
                    <ul className={s.nav_center}>
                        <li><NavLink to={'/home'}>Home</NavLink></li>
                        <li><NavLink to={'/reservations'}>Reservations</NavLink></li>
                        <li><NavLink to={'/menu'}>Menu</NavLink></li>
                        <li><NavLink to={'/blog'}>Blog</NavLink></li>
                        <li><NavLink to={'/contact'}>Contact</NavLink></li>
                    </ul>
                    <ul className={s.nav_right}>
                        <li><a href={"https://www.facebook.com/"}><IoLogoFacebook></IoLogoFacebook></a></li>
                        <li><a href={"https://www.instagram.com/"}><FaTwitter></FaTwitter></a></li>
                        <li><a href={"https://www.facebook.com/"}><FaInstagram></FaInstagram></a></li>
                        <li><a href={"https://www.facebook.com/"}><FaTelegramPlane></FaTelegramPlane></a></li>
                        <li><NavLink to="Cart"><FaShoppingCart></FaShoppingCart></NavLink></li>
                    </ul>
                </nav>
            <div>
                { toggle ?
                    <span onClick={() => handleClick()} className={s.burger}><GiHamburgerMenu/></span>
                    : < span onClick={() => handleClick()} className={s.burger}><AiFillCloseCircle /></span>
                }
            </div>
        </header>

    )
};

export default Header;