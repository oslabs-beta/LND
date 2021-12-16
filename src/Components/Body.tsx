import React, { FC } from 'react';
import Profile from './Profile2';
import '../App.css';

const Body: FC = (): JSX.Element => {
	
	return (
		<div className='body'>
			<Profile />
		</div>
	);
};

export default Body;
