import React from 'react';
// import { useEffect } from 'react';
import { atom, selector, useRecoilValue } from 'recoil';

// Atoms are units of state(boilerPLATE)
export const usernameState = atom({
	key: 'username',
	default: [],
});

const url = 'https://jsonplaceholder.typicode.com/todos/';

// Components can subscribe to selectors just like atoms, and will then be re-rendered when the selectors change
export const countState = selector({
	key: 'count',
	get: async ({ get }) => {
		try {
			const response = await fetch(url);
			const data = await response.json();
			// console.log(data);
			return data;
		} catch (error) {
			console.log(error);
		}

		// gets username length
		// const username = set(usernameState);
		// return username.length;
	},
});

const RecoilTest = () => {
	const jsonDetails = useRecoilValue(countState);
	console.log(jsonDetails, 'data');
	return  (
		
		Object.keys(jsonDetails).map((item) => (
		<div>
			key={item.id}
			<p> {`Title: ${item.title}`}</p>
		</div>
	
		
			)
	));
		
};

export default RecoilTest;



// {jsonDetails ? (
	// 	{jsonDetails.map((item) => {
	// 	  return (
	// 		<div>
	// 			key={item.id}
	// 			<p> {`Title: ${item.title}`}</p>
	// 		</div>
	// 	  );
	// 	})}
	// ) : null }