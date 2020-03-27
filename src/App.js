import React from 'react';
import { BrowserRouter, Route} from "react-router-dom";
import { Main } from './main/Main'
import { About } from './about/About'
import { Contact } from './contact/Contact'
import { Menu } from './menu/Menu';

const App = () => {
  
  return (
    <BrowserRouter>
      <Menu />
      <Route path="/hungerkiller" exact component={Main} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </BrowserRouter>
  );
}

export default App;
