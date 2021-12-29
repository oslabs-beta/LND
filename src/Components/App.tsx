import React, { FC } from "react";
import Body from "./Body";

// import { RecoilTest } from './Components/recoilPOST';

const App = () => {
	return (
		<>
			<React.Suspense fallback={<div>loading</div>}>
				{/* <RecoilTest /> */}
				<Body />
			</React.Suspense>
		</>
	);
};

export default App;