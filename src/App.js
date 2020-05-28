import React from 'react';
import Menu from './Components/Menu';
import MyFooter from './Components/MyFooter';
import Main from './Components/Main';
import Fest from './Components/Fest';
import News from './Components/News';
import Photo from './Components/Photo';
import {BrowserRouter, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Menu></Menu>
      <Route exact path='/' component={Main}/>
      <Route path='/fest' component={Fest}/>
      <Route path='/news' component={News}/>
      <Route path='/photo' component={Photo}/>
      <MyFooter></MyFooter>
    </BrowserRouter>
  );
}

export default App;
