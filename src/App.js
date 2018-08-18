import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Sidebar from './components/Sidebar/Sidebar';
// import { Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
     
        <div>
        <Header />
        <Sidebar />
        
        <Home />
         

          <Footer />
          </div>
     
    );
  }
}

export default App;
