import { atom, selector } from 'recoil';
//no need to import react since we are not using react

// Atoms are units of state(boilerPLATE)
export const usernameState = atom({
	key: 'username',
	default: [],
});

// Components can subscribe to selectors just like atoms, and will then be re-rendered when the atoms change
export const atomData = selector({
	key: 'postUsername',
	get: async ({ get }) => {
		const username = get(usernameState);
		console.log('username', username);
	},
});
