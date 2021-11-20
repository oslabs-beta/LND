import React from 'react';
import { useRecoilState } from 'recoil';
import { usernameState } from './recoilPOST';

export const postUrl = 'https://jsonplaceholder.typicode.com/posts';

const Profile = () => {
  const [username, setUsername] = useRecoilState(usernameState);
  //   const postData = useRecoilValue(atomData);
  //created a submit handler that will invoke a fetch request
  const submitHandler = async (event) => {
    event.preventDefault();
    console.log('triggered submitHandler');
    fetch('postUrl', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: { username },
      }),
    });
  };
  //onClick will invoke the submitHandler
  return (
    <div>
      <h2>Profile:</h2>
      <p>{username}</p>
      <input
        type='text'
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <button onClick={submitHandler}>Submit</button>
    </div>
  );
};

export default Profile;
