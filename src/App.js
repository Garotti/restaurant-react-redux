import React from 'react';
import './App.scss';
import {Redirect, Route} from "react-router-dom";
import Contact from "./components/Contact/Contact";
import MenuContainer from "./components/Menu/MenuContainer";
import CartContainer from "./components/Cart/CartContainer";
import ReservationContainer from "./components/Reservations/ReservationContainer";
import BlogContainer from "./components/Blog/BlogContainer";
import HomePageContainer from "./components/HomePage/HomePageContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

const App = () => {

  return (
      <div>
          <HeaderContainer />
          <div className={"main"}>
              <Route path={'/'} render={() => <Redirect to={'/reservations'}/>} />
            <Route path={'/home'} render={() => <HomePageContainer />}/>
            <Route path={'/reservations'} render={() => <ReservationContainer />}/>
            <Route path={'/menu'} render={() => <MenuContainer />}/>
            <Route path={'/blog'} render={() => <BlogContainer />}/>
            <Route path={'/contact'} render={() => <Contact />}/>
            <Route path={'/cart'} render={() => <CartContainer />}/>
          </div>
      </div>
  );
};

export default App;
