import React from 'react';
import DoughnutChart from '../chart/DoughnutChart';
import { Subscriber } from './Leak';
import { Test } from './Leak';

function FallbackComponent() {
	return <div>An error has occurred</div>;
}

const myFallback = <FallbackComponent />;
// Alternatively:
// const myFallback = () => <FallbackComponent />;

export default function App() {
	return (
		<>
			<DoughnutChart />
			<Subscriber />
			<Test />
		</>
	);
}
