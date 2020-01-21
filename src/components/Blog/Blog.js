import React from 'react';
import s from './Blog.module.scss';
import {FaAngleDown, GoSearch} from "react-icons/all";
import blog_img_1 from '../../assets/images/blog-img-1.jpg';
import blog_img_2 from '../../assets/images/blog-2-img.jpg'
import blog_img_3 from '../../assets/images/blog-3-img.jpg'
import blog_img_4 from '../../assets/images/blog-4-img.jpg'
import Footer from "../Footer/Footer";

const Blog = () => {
    return (<>
            <section className={s.blog_first_part}>
                <div className={s.header_news}>
                    <h1>News</h1>
                </div>
                <div className={s.categories}>
                    <a className={s.link_category} href="#">Categories <FaAngleDown></FaAngleDown></a>
                    <div className={s.drop_menu}>
                        <ul>
                            <li><a href="#">Other</a></li>
                            <li><a href="#">Press</a></li>
                            <li><a href="#">Recipes</a></li>
                        </ul>
                    </div>
                </div>
                <div className={s.search}>
                    <input type="text" value={'Search...'}/>
                    <button className={s.but}><GoSearch></GoSearch></button>
                </div>
            </section>
            <section className={s.second_part}>
                <hr/>
                <div className={s.blog_first_subpart}>
                    <div className={s.first_article}>
                        <p><time className={s.time}>June <span>.</span> 1st <span>.</span> 2020</time></p>
                        <h2>
                            <a href="#">Cheese Brie <br/>Sandwich</a>
                        </h2>
                        <p>The key is to buy specific cuts for specific dishes and be <br/>
                        firm with your butcher. Opt for tender cuts from the <br/>
                        inner haunch muscle if..
                        </p>
                        <div>
                            <a className={s.read_more} href="#">read more</a>
                        </div>
                    </div>
                    <div>
                        <img src={blog_img_1} alt="photo"/>
                    </div>
                </div>
                <div className={s.blog_second_subpart}>
                    <div>
                        <img src={blog_img_2} alt="photo"/>
                    </div>
                    <div className={s.first_article}>
                        <p><time className={s.time}>May <span>.</span> 28st <span>.</span> 2020</time></p>
                        <h2>
                            <a href="#">Roasted Tomato <br/>soup</a>
                        </h2>
                        <p>The key is to buy specific cuts for specific dishes and be <br/>
                            firm with your butcher. Opt for tender cuts from the <br/>
                            inner haunch muscle if..
                        </p>
                        <div>
                            <a className={s.read_more} href="#">read more</a>
                        </div>
                    </div>
                </div>
                <div className={s.blog_third_subpart}>
                    <div className={s.first_article}>
                        <p><time className={s.time}>May<span>.</span> 27th <span>.</span> 2020</time></p>
                        <h2>
                            <a href="#">Cheese Stuffed <br/>Tomatoes</a>
                        </h2>
                        <p>The key is to buy specific cuts for specific dishes and be <br/>
                            firm with your butcher. Opt for tender cuts from the <br/>
                            inner haunch muscle if..
                        </p>
                        <div>
                            <a className={s.read_more} href="#">read more</a>
                        </div>
                    </div>
                    <div>
                        <img src={blog_img_3} alt="photo"/>
                    </div>
                </div>
                <div className={s.blog_four_subpart}>
                    <div>
                        <img src={blog_img_4} alt="photo"/>
                    </div>
                    <div className={s.first_article}>
                        <p><time className={s.time}>May <span>.</span> 26st <span>.</span> 2020</time></p>
                        <h2>
                            <a href="#">Hot Cereals <br/>breakfast</a>
                        </h2>
                        <p>The key is to buy specific cuts for specific dishes and be <br/>
                            firm with your butcher. Opt for tender cuts from the <br/>
                            inner haunch muscle if..
                        </p>
                        <div>
                            <a className={s.read_more} href="#">read more</a>
                        </div>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </>
    )
};

export default Blog;