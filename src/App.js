import React from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import {Redirect, Route} from "react-router-dom";
import Reservations from "./components/Reservations/Reservations";
import Menu from "./components/Menu/Menu";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";
import MenuContainer from "./components/Menu/MenuContainer";
import Cart from "./components/Cart/Cart";
import CartContainer from "./components/Cart/CartContainer";

const App = () => {
  return (
      <div>
          <Header />
          <div>
              <Route path={'/'} render={() => <Redirect to={'/menu'}/>} />
            <Route path={'/home'} render={() => <HomePage />}/>
            <Route path={'/reservations'} render={() => <Reservations />}/>
            <Route path={'/menu'} render={() => <MenuContainer />}/>
            <Route path={'/blog'} render={() => <Blog />}/>
            <Route path={'/contact'} render={() => <Contact />}/>
            <Route path={'/cart'} render={() => <CartContainer />}/>
          </div>
      </div>
  );
};

export default App;
