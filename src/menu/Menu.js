import React, { useState } from 'react';
import styles from './Menu.module.css';
import { Icon } from './icon/Icon';

export const Menu = props => {
    const [position, setPostition] = useState('-28rem');
    return (
        <div className={styles.menuContainer} style={{left: position}}>
            <div className={styles.icon}><Icon changePosition={setPostition} oldPosition={position}/></div>
            <div className={styles.navList}></div>
        </div>
    );
};