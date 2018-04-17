import React from 'react';
import './App.css';
import { Nav } from './navBar.js';
import { Header } from './Header.js';
import { Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage.js';
import LoginPage from './components/pages/LoginPage.js';


const App = () => (
  <div>
    <Header />
    <div className='ui container'>
      <Route path='/' exact component={HomePage} />
      <Route path='/login' exact component={LoginPage} />
    </div>
  </div>      
)

export default App;