import React from 'react';
import styles from './Icon.module.css';
import menu from './menu.png';


let newPosition = "0rem";
let statePosition = "";
const changePosition = ( func, oldPosition ) => {
    if (newPosition !== oldPosition) {
        statePosition = oldPosition;
        func(newPosition);
    } else {
        func(statePosition);
    }
}

export const Icon = props => {
    return (
        <div className={styles.iconContainer}>
            <img src={menu} alt="menu" className={styles.menuIcon} onClick={() => changePosition(props.changePosition, props.oldPosition)}/>
        </div>
    );
};