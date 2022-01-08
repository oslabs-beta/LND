import React, { FC } from 'react';
import { useSetRecoilState, atom, useRecoilValue } from 'recoil';
import io from 'socket.io-client';

// Est socket connection
const socket = io('http://localhost:3000', { autoConnect: true });
// socket.connect();
socket.on('connect', () => {
	console.log(`Connection made with id: ${socket.id}`);
});
// events from client/browser are sent to server; event is called on server

export const state = atom({
	key: 'test',
	default: [],
});

export const Subscriber: FC = (): JSX.Element => {
	const setTest = useSetRecoilState<any>(state);

	React.useEffect(() => {
		const u = (old: any) => {
			const item = Math.random();

			if (old.length >= 100000) {
				return [item, ...old.slice(0, -1)];
			} else {
				return [item, ...old];
			}
		};

		const t = () => setTest(u);
		setInterval(t, 10);
	}, []);

	return null as any;
};
// sending subscriber atom to the back
socket.emit('Atom sent', Subscriber);

export const Test = () => {
	const test = useRecoilValue(state);
	return <div>{test.length}</div>;
};
