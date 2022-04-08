import React from 'react';
import { Chart as ChartJS, registerables } from 'chart.js';
import { Chart } from "react-chartjs-2";
import { toHour } from '../../utils/hours';
import { chartStyle } from './barChart.styles';
ChartJS.register(...registerables);

const dataToColors = (data) => {
  return data.map((d) => d > 0.8 ? 'rgba(255, 99, 132, 0.2)' : 'rgba(54, 162, 235, 0.2)')
};

export const DashboardBarChart = () => {
  const data = [...new Array(24)].map((el, i) => Math.abs(Math.cos(i/5)) * Math.random());

  return(
    <Chart
      style={chartStyle}
      type='bar'
      data={{
        labels: [...new Array(24)].map((el, i) => `${ toHour(i) }`),
        datasets: [{
          label: 'Godzinowe zużycie wody',
          data,
          backgroundColor: dataToColors(data)
        }],
      }}
    >
    </Chart>
  );
}