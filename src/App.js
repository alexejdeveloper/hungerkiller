import React, { useState } from 'react';
import { Content } from './content/Content';
import { Button } from './button/Button';
import styles from './App.module.css'; 
import { Menu } from './menu/Menu';


const App = () => {
  const [content, setContent] = useState('Пришло время похудеть!');
  const [mediaType, setMediaType] = useState(0);
  return (
    <div className={styles.main}>
      <Menu />
      <Content content={content} media={mediaType}/>
      <Button buttonClick={setContent} media={setMediaType}/>
    </div>
  );
}

export default App;
