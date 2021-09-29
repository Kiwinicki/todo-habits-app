import React from 'react';
import './PieChart.scss';

const PieChart = ({ chartSlices, addClass = '' }) => {
	const slicesArr = chartSlices.map(
		(slice, i, arr) =>
			`${slice.color} ${i === 0 ? 0 : arr[i - 1].perc / 100}turn ${
				slice.perc / 100
			}turn`
	);

	return (
		<div
			className={`pie-chart ${addClass}`}
			style={{ backgroundImage: `conic-gradient(${slicesArr.join(', ')})` }}
		></div>
	);
};

export default PieChart;
