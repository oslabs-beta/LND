import React, { FC, useState, useEffect, useContext } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js';
import { SocketContext } from '../context/socket';
Chart.register(ArcElement);

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

	const socket = useContext(SocketContext);
  console.log(socket)

	const fetchData = () => {
		// cleaner way would be to store port in config
		fetch('http://localhost:3001/memory').then((res) =>
			console.log(res.json())
		);
		// .then((data) => setMemoryData(data));
	};
	fetchData();
	console.log('this is memorydata', memoryData);

	return (
		<div>
			<h1>Chart</h1>
			<div style={{ width: 200, margin: '0 auto' }}></div>
			<Doughnut data={data} />
		</div>
	);
};

export default DoughnutChart;
