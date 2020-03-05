import React from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import {Redirect, Route} from "react-router-dom";
import Contact from "./components/Contact/Contact";
import MenuContainer from "./components/Menu/MenuContainer";
import CartContainer from "./components/Cart/CartContainer";
import ReservationContainer from "./components/Reservations/ReservationContainer";
import BlogContainer from "./components/Blog/BlogContainer";
import HomePageContainer from "./components/HomePage/HomePageContainer";

const App = () => {

  return (
      <div>
          <Header />
          <div>
              <Route path={'/'} render={() => <Redirect to={'/home'}/>} />
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
