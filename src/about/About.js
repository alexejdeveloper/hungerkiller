import React from 'react';
import styles from './About.module.css';


export const About = props => {
    return (
        <div className={styles.about}>
          <p>Hunger Killer</p>
          <p className={styles.description}>Это приложение поможет вам похудеть!</p>
          <p className={styles.description}>Каждый раз когда вы ощущаете голод</p>
          <p className={styles.description}>включайте это приложение и жмите на кнопку!</p>
        </div>
    );
}