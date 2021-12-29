// import React, { FC, ChangeEvent } from 'react';
// import { useRecoilState } from 'recoil';
// import { usernameState } from './recoilPOST';

// // THIS IS EXAMPLE URL FOR TESTING
// export const postUrl = 'https://jsonplaceholder.typicode.com/posts';

// const Profile: FC = (): JSX.Element => {
//   const [username, setUsername] = useRecoilState<string | any>(usernameState);

//   const submitHandler = async (event: any) => {
//     event.preventDefault();
//     console.log('triggered submitHandler');

//     fetch(postUrl, {
//       //CHANGE postUrl to '/core'
//       method: 'post',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({
//         username: { username },
//       }),
//     });

//     setUsername((oldUsername: any) => [
//       oldUsername,
//       { id: username.id, username: { username } },
//     ]);

//     setUsername('');
//   };
//   //onClick will invoke the submitHandler
//   return (
//     <div>
//       <h2>Profile:</h2>
//       <input
//         type='text'
//         value={username}
//         onChange={(event: any) => setUsername(event.target.value)}
//       />
//       <button onClick={submitHandler}>Submit</button>
//     </div>
//   );
// };

// export default Profile;
