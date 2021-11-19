import React from 'react';
import { atom, selector, useRecoilValue } from 'recoil';
import { fetchedDataOnClick } from './Profile';

export const url = 'https://jsonplaceholder.typicode.com/todos/';

// Atoms are units of state(boilerPLATE)
export const usernameState = atom({
	key: 'username',
	default: [],
});

// Components can subscribe to selectors just like atoms, and will then be re-rendered when the selectors change
export const countState = selector({
	key: 'count',
	get: async ({ get }) => {
		const username = get(usernameState);
		return username.length;
	},
});

//Created a function that 
export const usersState = selector({
	key: 'users',
	get: async ({ get }) => {
		try {
			const response = await fetch(url);
			const data = await response.json();
			return data;
		} catch (error) {
			console.log(error);
			return [];
		}
	},
});

//mapping thru the json obj and returning the title and assigning ids
export const RecoilTest = () => {
	const jsonDetails = useRecoilValue(fetchedDataOnClick);
	console.log(jsonDetails, 'data');
	return (
		<>
			{jsonDetails.map((item) => (
				<div key={item.id}>
					<p> {`Title: ${item.title}`}</p>
				</div>
			))}
		</>
	);
};
