import React from 'react';

// import { RecoilTest } from './Components/recoilPOST';

const App = () => {
	return (
		<>
			<React.Suspense fallback={<div>loading</div>}>
				{/* <RecoilTest /> */}
			</React.Suspense>
		</>
	);
};

export default App;
