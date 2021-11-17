import React from 'react';
import { atom, useRecoilState, useRecoilValue } from 'recoil';
import { usernameState } from './recoilTest';

const Profile = () => {
  // useRecoilState To read and weite atom from component - similar to react useState
  const [username, setUsername] = useRecoilState(usernameState);
  // const submittions = useRecoilValue(usernameState);
  //make a post request
  //async await
  //
  const submitHandler = async () => {
    // setUsername((prevInput) => [...prevInput, username]);
    // setUsername('');
    const body = JSON.stringify({ data });
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body,
    };
    await fetch('api/recoilFile');
  };

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
