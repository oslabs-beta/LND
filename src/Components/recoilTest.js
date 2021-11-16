import React from 'react';
import { atom, selector } from 'recoil';

const usernameState = atom({
  key: 'username',
  default: 'Rabbit',
});

const countState = selector({
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
