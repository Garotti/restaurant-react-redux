import React from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import {Route} from "react-router-dom";
import Reservations from "./components/Reservations/Reservations";
import Menu from "./components/Menu/Menu";
import Blog from "./components/Blog/Blog";

const App = () => {
  return (
      <div>
          <Header />
          <div>
            <Route path={'/home'} render={() => <HomePage />}/>
            <Route path={'/reservations'} render={() => <Reservations />}/>
            <Route path={'/menu'} render={() => <Menu />}/>
            <Route path={'/blog'} render={() => <Blog />}/>
          </div>
      </div>
  );
};

export default App;
