import React, { FC } from 'react';
import Profile from './Profile';

const Body: FC = (): JSX.Element => {
	return (
		<div className='body'>
			<Profile />
		</div>
	);
};

export default Body;
