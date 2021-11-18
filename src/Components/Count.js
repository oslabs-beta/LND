import React from 'react';
import { useRecoilValue } from 'recoil';
import { countState } from './recoilTest';

const Count = () => {
  const count = useRecoilValue(countState);
  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
};

export default Count;
