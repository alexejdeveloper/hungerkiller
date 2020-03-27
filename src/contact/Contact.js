import React from 'react';
import styles from './Contact.module.css';
import mail from './mail.png'

export const Contact = props => {
    return (
        <div className={styles.contact}>
            <p>Почта</p>
            <a href="mailto:alexejdeveloper@gmail.com"><img src={mail} alt="mail" /></a>
        </div>
    );
};