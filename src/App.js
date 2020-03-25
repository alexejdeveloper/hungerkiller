import React from 'react';
import Content from './content/Content';
import Button from './button/Button';
import styles from './App.module.css'; 


function App() {
  return (
    <div className={styles.main}>
      <Content></Content>
      <Button></Button>
    </div>
  );
}

export default App;
