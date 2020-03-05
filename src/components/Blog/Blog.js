import React, {useEffect, useState} from 'react';

import s from './Blog.module.scss';

import {FaAngleDown, GoSearch} from "react-icons/all";

import Footer from "../Footer/Footer";

const Blog = (props) => {
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        window.scrollTo(0,0)
    }, []);

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
                    <input onChange={e => setInputValue(e.target.value)}
                           type="text"
                           placeholder={'Search...'}
                           value={inputValue}
                    />
                    <button className={s.but}><GoSearch></GoSearch></button>
                </div>
            </section>
            <section className={s.second_part}>
                <hr/>
                {props.blog.map(item =>
                    <div className={s.blog_first_subpart}>
                        <div className={s.deleted_1}>
                            <img src={item.img} alt="blog_photo"/>
                        </div>
                        <div className={s.first_article}>
                            {item.date.map(c => <p>
                                <time className={s.time}>{c.month}<span>.</span>{c.day} <span>.</span>{c.year}</time>
                            </p>)}
                            <h2>
                                <a href="#">{item.title}</a>
                            </h2>
                            <p>
                                {item.description}
                            </p>
                            <div>
                                <a className={s.read_more} href="#">read more</a>
                            </div>
                        </div>
                        <div>
                            <img className={s.deleted_2} src={item.img} alt="blog_photo"/>
                        </div>
                    </div>
                )}
            </section>
            <Footer></Footer>
        </>
    )
};

export default Blog;