import React from 'react';
import { useRecoilState } from 'recoil';
import { usernameState } from './recoilPOST';

// THIS IS EXAMPLE URL FOR TESTING
export const postUrl = 'https://jsonplaceholder.typicode.com/posts';

const Profile = () => {
  const [username, setUsername] = useRecoilState(usernameState);

  const submitHandler = async (event) => {
    event.preventDefault();
    console.log('triggered submitHandler');

    fetch(postUrl, {
      //CHANGE postUrl to '/core'
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: { username },
      }),
    });

    setUsername((oldUsername) => [
      ...oldUsername,
      { id: username.id, username: { username } },
    ]);

    setUsername('');
  };
  //onClick will invoke the submitHandler
  return (
    <div>
      <h2>Profile:</h2>
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
