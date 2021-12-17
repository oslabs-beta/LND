import React, { FC } from "react";

// import { RecoilTest } from './Components/recoilPOST';

const App: FC = (): JSX.Element => {
	return (
		<>
			<React.Suspense fallback={<div>loading</div>}>
				{/* <RecoilTest /> */}
				<h1>hello</h1>
			</React.Suspense>
		</>
	);
};

export default App;