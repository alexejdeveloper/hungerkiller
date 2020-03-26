import React from 'react';
import styles from './Content.module.css';


export const Content = props => {
    return (
        <div className={styles.content}>
            <h1>{props.content}</h1>
        </div>
    );
};