import React, {Component, Fragment} from 'react';
import {Formik} from "formik";
import Error from "./Error/Error";
import * as Yup from "yup";
import s from './Form.module.scss';

const validationSchema = Yup.object().shape({
    name: Yup.string()
        .min(1, "Must have a character")
        .max(255, "Must be shorter than 255")
        .required("Must enter a name"),
    email: Yup.string()
        .email("Must be a valid email address")
        .max(255, "Must be shorter than 255")
        .required("Must enter an email")
});

const Form = () => {
    return (
        <div>
            <Formik initialValues={{name: "", email: "", text: ""}}
                    validationSchema={validationSchema}
                    onSubmit={(values, {setSubmitting, resetForm}) => {
                        setSubmitting(true);

                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2))
                            resetForm();
                            setSubmitting(false);
                        }, 500);
                    }}
            >
                {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting
                  }) => (
                    <form onSubmit={handleSubmit}>
                        <div className={s.input_row}>
                            <label htmlFor="name">Your Name (required)</label><br/>
                            <input type="text"
                                   name="name"
                                   id="name"
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                                   value={values.name}
                                   className={touched.name && errors.name ? "has-error" : null}
                            />
                            <Error touched={touched.name} message={errors.name}/>
                        </div>
                        <div className={s.input_row}>
                            <label htmlFor="email">Your email (required)</label><br/>
                            <input type="text"
                                   name="email"
                                   id="email"
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                                   value={values.email}
                                   className={touched.email && errors.email ? "has-error" : null}
                            />
                            <Error touched={touched.email} message={errors.email}/>
                        </div>
                        <div className={s.input_row}>
                            <label htmlFor="text">Your Message</label><br/>
                            <textarea name="text"
                                      id="text"
                                      rows={5}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      value={values.text}
                                      className={touched.text && errors.text ? "has-error" : null}
                            />
                        </div>
                        <div className={s.input_row}>
                            <button disabled={isSubmitting} type={"submit"}>send</button>
                        </div>
                    </form>
                )}
            </Formik>
        </div>
    )
};

export default Form;