import React, { Component } from 'react';
import { atom, selector } from 'recoil';

// Atoms are units of state
export const usernameState = atom({
  // key - unqiue key for persistence
  key: 'username',
  // default value similar to react component state
  default: [],
});

// Components can subscribe to selectors just like atoms, and will then be re-rendered when the selectors change
export const countState = selector({
  key: 'count',
  get: ({ get }) => {
    const username = get(usernameState);
    return username.length;
  },
});

const RecoilTest = () => {
  return <div></div>;
};

export default RecoilTest;
