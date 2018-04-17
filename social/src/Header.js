import React from 'react';
import robo from './robocog-1.png';
import { Link } from 'react-router-dom';

export class Header extends React.Component {
	render(){
		return(
			<header className="App-header">
        <img src={robo} className="App-logo" alt="logo" />
        <Link to='/login'>
        	<button className="App-title">Sign In</button>
        </Link>	
      </header>
		);
	}
}