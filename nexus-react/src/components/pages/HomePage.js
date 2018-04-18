import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../../Header.js';

const HomePage = () => (
	<div>
		<h1>Home Page</h1>
		<Link to='/login'>Login</Link>
	</div>
);

export default HomePage;