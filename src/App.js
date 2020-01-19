import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import {Route} from "react-router-dom";
import Reservations from "./components/Reservations/Reservations";

const App = () => {
  return (
      <div>
          <Header />
          <div>
            <Route path={'/home'} component={HomePage}/>
            <Route path={'/reservations'} component={Reservations}/>
          </div>
      </div>
  );
};

export default App;
