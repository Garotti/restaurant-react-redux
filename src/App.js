import React from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import {Redirect, Route} from "react-router-dom";
import Reservations from "./components/Reservations/Reservations";
import Menu from "./components/Menu/Menu";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";

const App = () => {
  return (
      <div>
          <Header />
          <div>
              <Route path={'/'} render={() => <Redirect to={'/contact'}/>} />
            <Route path={'/home'} render={() => <HomePage />}/>
            <Route path={'/reservations'} render={() => <Reservations />}/>
            <Route path={'/menu'} render={() => <Menu />}/>
            <Route path={'/blog'} render={() => <Blog />}/>
            <Route path={'/contact'} render={() => <Contact />}/>
          </div>
      </div>
  );
};

export default App;
