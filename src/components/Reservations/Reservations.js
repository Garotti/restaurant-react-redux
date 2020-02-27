import React from 'react';
import s from './Reservations.module.scss'
import reservation_1 from '../../assets/images/reservations_foto-1.jpg';
import reservation_2 from '../../assets/images/reservation_foto-2.jpg';
import SliderV1 from "../common/Sliders/SliderV1/SliderV1";
import Footer from "../Footer/Footer";
import {FaRegCalendarAlt, FaRegClock, IoMdPerson} from "react-icons/all";


const Reservations = (props) => {

    let date = new Date();

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
                            <input type="text" placeholder={date} value={date}/>
                        </div>
                        <div>
                            <i><FaRegClock></FaRegClock></i>
                            <select name="ResTime" id="time-otreservations">
                                {props.optionsValue.map(item => <option key={item.id}  value={item.value}>
                                    {item.value}
                                </option>)}
                            </select>
                        </div>
                        <div>
                            <i><IoMdPerson></IoMdPerson></i>
                            <select name="partySize" id="party-otreservation">
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
                <div className={s.mezzanine_part}>
                    <div className={s.text_part}>
                        <h2>The private</h2>
                        <h1>Mezzanine</h1>
                        <p>Rosa’s 50 seat room, “The Meazzanine Room” features a temperature- <br/>
                            controlled wine cellar, displays of more wine and a private atmosphere. A <br/>
                            semi-private room, “Barbaresco,” is available for meetings, birthdays and <br/>
                            other occasions.
                        </p>
                        <p><strong>Seat up to 50 guests</strong></p>
                    </div>
                    <div>
                        <img src={reservation_1} alt="restaurant_photo"/>
                    </div>
                </div>
                <div className={s.crown_part}>
                    <div>
                        <img src={reservation_2} alt="restaurant_photo"/>
                    </div>
                    <div className={s.dining_text}>
                        <h2>The dining</h2>
                        <h1>Crown</h1>
                        <p>Overlooking the dining room and open kitchen, can seat up to 75 guests or <br/>
                            a standing reception of 130 guests. Ut enim ad minim veniam, quis nostrud <br/>
                            exercitation ullamco laboris nisi ut aliquip.
                        </p>
                        <p><strong>Seat up to 75 guests</strong></p>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    )
};

export default Reservations;