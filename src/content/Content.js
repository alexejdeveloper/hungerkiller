import React from 'react';
import styles from './Content.module.css';

const selectType = (content, media) => {
    if (media === 0) {
        return content;
    } else {
        return (
            <img src={content} alt="img" className={styles.imgContent}></img>
        );
    }
}

export const Content = props => {
    return (
        <div className={styles.content}>
            {selectType(props.content, props.media)}
        </div>
    );
};