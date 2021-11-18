import React from 'react';
import Body from './Components/Body';
import Nav from './Components/Nav';
import RecoilTest from './Components/recoilTest';

const App = () => {
	return (
		<>
			<React.Suspense fallback={<div>loading</div>}>
				<RecoilTest />
				<Nav />
				<Body />
			</React.Suspense>
		</>
	);
};

export default App;
