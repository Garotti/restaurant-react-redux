import React from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import {Redirect, Route} from "react-router-dom";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";
import MenuContainer from "./components/Menu/MenuContainer";
import CartContainer from "./components/Cart/CartContainer";
import ReservationContainer from "./components/Reservations/ReservationContainer";

const App = () => {
  return (
      <div>
          <Header />
          <div>
              <Route path={'/'} render={() => <Redirect to={'/reservations'}/>} />
            <Route path={'/home'} render={() => <HomePage />}/>
            <Route path={'/reservations'} render={() => <ReservationContainer />}/>
            <Route path={'/menu'} render={() => <MenuContainer />}/>
            <Route path={'/blog'} render={() => <Blog />}/>
            <Route path={'/contact'} render={() => <Contact />}/>
            <Route path={'/cart'} render={() => <CartContainer />}/>
          </div>
      </div>
  );
};

export default App;
