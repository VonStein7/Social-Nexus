import React from 'react';
import './App.css';
import PropTypes from 'prop-types';
import { Nav } from './navBar.js';
import Header from './Header.js';
import { Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage.js';
import LoginPage from './components/pages/LoginPage.js';
import DashboardPage from './components/pages/DashboardPage.js';
import GuestRoute from './components/routes/GuestRoute.js';
import UserRoute from './components/routes/UserRoute.js';

const App = ( {location} ) => (
  <div>
    <Header />
    <div className='ui container'>
      <Route location={location} path='/' exact component={HomePage} />
    	<GuestRoute location={location} path='/login' exact component={LoginPage} />
    	<UserRoute location={location} path='/dashboard' exact component={DashboardPage} />
    </div>
  </div>      
)

App.propTypes = {
	location: PropTypes.shape({
		pathname: PropTypes.string.isRequired
	}).isRequired
};

export default App;