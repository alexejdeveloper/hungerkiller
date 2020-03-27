import React, { useState } from 'react';
import { Content } from './content/Content';
import { Button } from './button/Button';
import styles from './Main.module.css';

export const Main = props => {
    const [content, setContent] = useState('Пришло время похудеть!');
    const [mediaType, setMediaType] = useState(0);
    return (
        <div className={styles.main}>
            <Content content={content} mediaType={mediaType} />
            <Button setContent={setContent} setMediaType={setMediaType} />
        </div>
    );
};