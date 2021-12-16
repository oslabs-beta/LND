import React, { FC } from "react";

// import { RecoilTest } from './Components/recoilPOST';

const App: FC = (): JSX.Element => {
	return (
		<>
			<React.Suspense fallback={<div>loading</div>}>
				{/* <RecoilTest /> */}
			</React.Suspense>
		</>
	);
};

export default App;