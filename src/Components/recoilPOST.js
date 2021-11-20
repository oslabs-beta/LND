import React from 'react';
import { atom, selector } from 'recoil';

// const axios = require('axios');

// export const postUrl = 'https://jsonplaceholder.typicode.com/posts';

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

// export const usersState = selector({
//   key: 'users',
//   get: async ({ get }) => {
//     try {
//       const response = await fetch(url);
//       const data = await response.json();
//       return data;
//     } catch (error) {
//       console.log(error);
//       return [];
//     }
//   },
// });

//mapping thru the json obj and returning the title and assigning ids
// export const RecoilTest = () => {
//   const jsonDetails = useRecoilValue(fetchedDataOnClick);
//   console.log(jsonDetails, 'data');
//   return (
//     <>
//       {jsonDetails.map((item) => (
//         <div key={item.id}>
//           <p> {`Title: ${item.title}`}</p>
//         </div>
//       ))}
//     </>
//   );
// };
