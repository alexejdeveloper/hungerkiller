import React, { useState } from 'react';
import { Content } from './content/Content';
import { Button } from './button/Button';
import styles from './App.module.css'; 
import { Menu } from './menu/Menu';


const App = () => {
  const [content, setContent] = useState('Пришло время похудеть!');
  return (
    <div className={styles.main}>
      <Menu />
      <Content content={content} />
      <Button buttonClick={setContent} />
    </div>
  );
}

export default App;
