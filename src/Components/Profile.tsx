// import React from 'react';
// import { useRecoilState } from 'recoil';
// import { usernameState, url } from './recoilGET';
// import { atom } from 'recoil';

// export const fetchedDataOnClick = atom({
//   key: 'fetchedDataOnClick',
//   default: [], //!atom=> stores data in the react component tree
// });

// const Profile = () => {
//   // useRecoilState To read and weite atom from component - similar to react useState
//   const [username, setUsername] = useRecoilState(usernameState);
//   const [fetchedData, setFetchedData] = useRecoilState(fetchedDataOnClick);
//   //created a submit handler that will invoke a fetch request
//   const submitHandler = async () => {
//     console.log('triggered submitHandler');
//     try {
//       const res = await fetch(url).then((data) => data.json());
//       // console.log(`res`, res);
//       setFetchedData(res);
//     } catch {
//       return [];
//     }
//   };
//   //onClick will invoke the submitHandler
//   return (
//     <div>
//       <h2>Profile:</h2>
//       <p>{username}</p>
//       <input
//         type='text'
//         value={username}
//         onChange={(event) => setUsername(event.target.value)}
//       />
//       <button onClick={submitHandler}>Submit</button>
//     </div>
//   );
// };

// export default Profile;
