import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";

const App = () => {
  return (
      <div>
          <Header />
          <div>
              <HomePage />
          </div>
      </div>
  );
};

export default App;
