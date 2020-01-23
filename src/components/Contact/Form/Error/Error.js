import React from 'react';
import s from './Error.module.scss';

const Error = ({touched, message}) => {
    if (!touched) {
        return <div className={`${s.form_message} ${s.invalid}`}>&nbsp;</div>
    }
    if (message) {
        return <div className={`${s.form_message} ${s.invalid}`}>{message}</div>
    }
    return <div className={`${s.form_message} ${s.valid}`}>all good</div>
};

export default Error;