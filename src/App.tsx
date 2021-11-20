import React from 'react';
import Body from './Components/Body';
// import { RecoilTest } from './Components/recoilPOST';

const App = () => {
  return (
    <>
      <React.Suspense fallback={<div>loading</div>}>
        <Body />
        {/* <RecoilTest /> */}
      </React.Suspense>
    </>
  );
};

export default App;
