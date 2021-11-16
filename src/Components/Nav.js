import React from 'react';
import { useRecoilValue } from 'recoil';

const Nav = () => {
  const username = useRecoilValue(usernameState);
  return (
    <div className='nav'>
      <p>{username}</p>
    </div>
  );
};

export default Nav;
