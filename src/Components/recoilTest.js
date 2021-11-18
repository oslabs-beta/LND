import React from 'react';
import { atom, selector } from 'recoil';

export const usernameState = atom({
  key: 'username',
  default: 'Rabbit',
});

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
