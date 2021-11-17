import React from 'react';
import { useRecoilValue } from 'recoil';
import { usernameState } from './recoilTest';
import '../App.css';

const Nav = () => {
  const username = useRecoilValue(usernameState);
  return (
    <div className='nav'>
      <p>{username}</p>
    </div>
  );
};

export default Nav;
