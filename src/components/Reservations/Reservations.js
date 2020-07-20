import React, {useEffect, useRef, useState} from 'react';

import s from './Reservations.module.scss'

import SliderV1 from "../common/Sliders/SliderV1/SliderV1";
import {FaRegCalendarAlt, FaRegClock, IoMdPerson} from "react-icons/all";

import Calendar from 'react-calendar';
import Footer from "../Footer/Footer";

const Reservations = (props) => {
    const [hookDate, setHookDate] = useState(new Date);
    const [toggleCalendar, setToggleCalendar] = useState(false);
    const calendarRef = useRef();

    const q = hookDate.toISOString().slice(0, 10);

    const handleCalendarClick = () => {
        setToggleCalendar(!toggleCalendar);
    };

    const onChangeCalendar = (hookDate) => {
        setHookDate(hookDate);
    };
    const handleOutsideClick = (e) => {
        if(calendarRef.current && !calendarRef.current.contains(e.target)) {
            setToggleCalendar(false);
        }
    }
    useEffect(() => {
        document.body.addEventListener('click', handleOutsideClick);
        window.scrollTo(0, 0)
    }, []);

    return (
        <div>
            <section className={s.background_photo}>
                <div className={s.reservation}>
                    <span className={s.makeA}><h2>Make a</h2><br/>
                    <h1 className={s.header_reservation}>Reservation</h1>
                    <p>Booking a table online is easy and takes just a couple of minutes.</p>
                    </span>
                </div>
            </section>
            <section className={s.second_part}>
                <div className={s.make_reservation}>
                    <h4>Make online reservation</h4>
                    <div className={s.date_time_people}>
                        <div>
                            <i><FaRegCalendarAlt></FaRegCalendarAlt></i>
                            <input ref={calendarRef} onClick={handleCalendarClick} type="text" value={q}/>
                            {toggleCalendar ? <div>
                                <Calendar className={s.calendar} onClickDay={onChangeCalendar} value={hookDate}/>
                            </div> : null}
                        </div>
                        <div>
                            <i><FaRegClock></FaRegClock></i>
                            <select className={s.select_options} name="ResTime" id="time-otreservations">
                                {props.optionsValue.map(item =>
                                    <option key={item.id} value={item.value}>
                                        {item.value}
                                    </option>)}
                            </select>
                        </div>
                        <div>
                            <i><IoMdPerson></IoMdPerson></i>
                            <select className={s.select_options} name="partySize" id="party-otreservation">
                                {props.people.map(party =>
                                    <option key={party.id} value={party.people}>
                                        {party.people}
                                    </option>)}
                            </select>
                        </div>
                    </div>
                    <div className={s.find_table_b}>
                        <input type="submit" value={"Find a Table"}/>
                        <hr/>
                    </div>
                </div>
                <div className={s.second_subpart}>
                    <div className={s.reserve_by_phone}>
                        <h3>RESERVE BY PHONE</h3>
                        <p>We take reservations for lunch and dinner. To make a reservation, please call us at <br/>
                            (027) 8338 145 between 10am-6pm, Monday to Friday.
                        </p>
                        <p>We do not book the bar area – we leave this for walk-in guests to ensure that we <br/>
                            always offer some tables for those who have not booked.
                        </p>
                    </div>
                    <div className={s.dining_events}>
                        <h3>PRIVATE DINING & EVENTS</h3>
                        <p>Whatever your event or celebration, we are here to make your special day a truly <br/>
                            memorable one. Rosa’s private dining experts are more than happy to create custom <br/>
                            floral arrangements and arrange for guests to meet Chef Moise during the course of <br/>
                            their meal. For parties of 8-12 we have the roastery table which is available for <br/>
                            private hire.
                        </p>
                    </div>
                </div>
            </section>
            <section className={s.third_section}>
                <div className={s.slider_container}>
                    <SliderV1/>
                </div>
            </section>
            <section className={s.four_section}>
                {props.info.map(i =>
                    <div className={s.crown_part}>
                        <div className={s.first_deleted_img}>
                            <img src={i.img} alt="photo"/>
                        </div>
                        <div className={s.dining_text}>
                            <h2>{i.topTitle}</h2>
                            <h1>{i.title}</h1>
                            <p>{i.text}</p>
                            <p>{i.seats}</p>
                        </div>
                        <div>
                            <img className={s.second_delete_img} src={i.img} alt="photo"/>
                        </div>
                    </div>)}
            </section>
            <Footer/>
        </div>
    )
};

export default Reservations;