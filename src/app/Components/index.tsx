import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { RecoilRoot } from 'recoil';
import { SocketContext, socket } from '../context/socket';

ReactDOM.render(
	<React.StrictMode>
		<SocketContext.Provider value={socket}>
			<RecoilRoot>
				<App />
			</RecoilRoot>
		</SocketContext.Provider>
	</React.StrictMode>,

	document.getElementById('root')
);
