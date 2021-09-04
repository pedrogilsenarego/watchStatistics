import React from "react";
import { Radar } from "react-chartjs-2";

const data = {
	labels: [
		"Quality",
		"Price",
		"Brand",
		"Refinement",
		"History",
		"Engineering",
		"X factor"
	],
	datasets: [
		{
			data: [8, 10, 9, 6, 9, 4, 10],
			label: "Own",
			borderColor: "#314e7d",
			backgroundColor: "#314e7d",
			fill: false
		},
		{
			data: [5, 8, 9, 5, 7, 3, 9],
			label: "Not Own",
			borderColor: "#989ea6",
			fill: false,
			backgroundColor: "#989ea6"
		}
	]
};

const options = {
	title: {
		display: true,
		text: "Seiko SKX-007"
	},
	scale: {
		ticks: { beginAtZero: true }
	},
	animations: {
		tension: {
			duration: 700,
			easing: "linear",
			from: 0.05,
			to: 0,
			loop: true
		}
	}
};

const RadarChart = () => (
	<>
		<div className="header">
			<h1 className="title">Radar Chart</h1>
		</div>
		<Radar data={data} options={options} />
	</>
);

export default RadarChart;
