import React, { Component } from 'react';
/*import logo from './logo.svg';*/
import './App.css';
import Header from './components/Header';
import { Routes } from './Routes.js';


class App extends Component {
  render() {
    return (
      <div className="App">    
        <Header/>  
        <Routes/>
      </div>
    );
  }
}

export default App;
