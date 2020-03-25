import React from 'react';
import styles from './Content.module.css';


const Content = props => {
    return (
        <div className={styles.content}>
            <h1>Нажми на кнопку!</h1>
        </div>
    );
};

export default Content;