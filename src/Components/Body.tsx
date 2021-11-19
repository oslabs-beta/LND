import React from 'react';
import Profile from './Profile';
import Count from './Count';
import '../App.css';

const Body = () => {
	return (
		<div className="body">
			<Profile />
			<Count />
		</div>
	);
};

export default Body;
