import React, {useEffect} from 'react';
import { useRecoilState } from 'recoil';
import { usernameState } from './recoilTest';
	// setMessageList((prevList) => [...prevList, data]);
const Profile = ({props}) => {
  const [username, setUsername] = useRecoilState(usernameState);
  //handle function
  const EventHandler = () => {
   setUsername((prevInput) => [...prevInput, username])
  }
  useEffect(() => {
EventHandler();
  },[])

  return (
    <div>
      <h2>Profile:</h2>
      <p>{username}</p>
      <input
        type='text'
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <button onClick={EventHandler , console.log('its working')}> Submit</button>
    </div>
  );
};

export default Profile;
