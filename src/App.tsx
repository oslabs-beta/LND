import React from 'react';
import Body from './Components/Body';
import Nav from './Components/Nav';
import { RecoilTest } from './Components/recoilTest';

const App = () => {
	return (
		<>
			<React.Suspense fallback={<div>loading</div>}>
				<Nav />
				<Body />
				<RecoilTest />
			</React.Suspense>
		</>
	);
};

export default App;
