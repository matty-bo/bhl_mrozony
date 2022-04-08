import React from 'react';
import { Chart as ChartJS, registerables } from 'chart.js';
import { Chart } from "react-chartjs-2";
ChartJS.register(...registerables);

const toHour = (value) => {
  let parsedValue = value;

  if (!Number.isInteger(parsedValue)) {
    parsedValue = 0;
  }

  return `${ parsedValue }:00`;
}

export const DashboardBarChart = () => {
  return(
    <Chart
      style={{ backgroundColor: '#ffffff', borderRadius: '8px' }}
      type='bar'
      data={{
        labels: [...new Array(24)].map((el, i) => `${ toHour(i) }`),
        datasets: [{
          label: 'Godzinowe zużycie wody',
          data: [...new Array(24)].map((el, i) => 10 + i)
        }],
      }}
    >
    </Chart>
  );
}