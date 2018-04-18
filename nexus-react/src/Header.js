import React from 'react';
import robo from './robocog-1.png';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';
import { logout } from './actions/auth.js';

const Header = ({ isAuthenticated, logout }) => (
	<header className="App-header">
    <img src={robo} className="App-logo" alt="logo" />
    {isAuthenticated ? 
    	<Button className='App-title' primary onClick={()=> logout()}>Logout</Button> : 
    	<Link to='/login'>
    		<Button className="App-title" primary>Login</Button>
    	</Link>}	
  </header>
);

Header.propTypes = {
	isAuthenticated: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
	return {
		isAuthenticated: !!state.user.token,
		logout: PropTypes.func.isRequired
	};
}

export default connect(mapStateToProps, { logout })(Header);