import React, {useEffect} from 'react';
import s from './Contact.module.scss'
import {FaFacebookF, FaTwitter} from "react-icons/all";
import Footer from "../Footer/Footer";
import { Formik } from "formik";
import * as Yup from "yup";
import GoogleMaps from "../common/GoogleMaps/GoogleMaps";
import Form from "./Form/Form";
import Error from "./Form/Error/Error";

const Contact = () => {


    useEffect(() => {
        window.scrollTo(0,0)
    }, []);

    return (<>
            <section className={s.back_photo}>
                <div className={s.header}>
                    <h2>Find us</h2>
                    <h1>Contact</h1>
                </div>
            </section>
            <section className={s.first_contact_part}>
                <div>
                    <h3>Get in touch</h3>
                    <p>The Rosa’s restaurant and bar are located on the ground and first floor within the <br/>
                    Winchester Grade VI listed building of the Royal Institution of Chartered Surveyors. <br/>
                    The restaurant and bar both have their own entrances.
                    </p>
                    <p>If you have questions or comments, please get a hold of us in whichever way is most <br/>
                    convenient. Ask away. There is no reasonable question that our team can not answer
                    </p>
                    <div className={s.follow_us}>
                        <h3>Follow US</h3>
                        <a href="#" className={s.facebook}><FaFacebookF></FaFacebookF></a>
                        <a href="#"><FaTwitter></FaTwitter></a>
                    </div>
                </div>
                <Form />
            </section>
            <section>
                <GoogleMaps />
            </section>
            <Footer />
        </>
    )
};


export default Contact;