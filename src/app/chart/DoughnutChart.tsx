import React, { FC, useState, useEffect } from 'react';
// import io from 'socket.io-client';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js';
Chart.register(ArcElement);

// const socket = io('http://localhost:3000', { autoConnect: true });
// socket.on('connect', () => {
// 	console.log(`Connection made with id: ${socket.id}`);
// });

// socket.on('/memory', (data) => {
// 	console.log('this is data:', data);
// });
//data coming from the https server(backend)
const data = {
	//labels rendering in the screen
	labels: ['Red', 'Blue', 'Green', 'Yellow', 'Purple'],
	//data that renders in the chart
	datasets: [
		{
			data: [2, 10, 3, 15, 7],
			backgroundColor: ['Red', 'Blue', 'Green', 'Yellow', 'Purple'],
		},
	],
};

const DoughnutChart: FC = (): JSX.Element => {
	const [memoryData, setMemoryData] = useState([]);

	// const fetchData = () => {
	// 	fetch('http://localhost:3001/memory')
	// 		.then((res) => res.json())
	// 		.then((data) => setMemoryData(data));
	// };

	// fetchData();

	console.log('this is memorydata', memoryData);
	// fetchedData();

	return (
		<div>
			<h1>Chart</h1>
			<div style={{ width: 200, margin: '0 auto' }}></div>
			<Doughnut data={data} />
		</div>
	);
};

export default DoughnutChart;
