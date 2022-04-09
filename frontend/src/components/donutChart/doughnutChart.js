import React from 'react'
import { Chart } from "react-chartjs-2";
import { chartStyle } from './doughnutChart.styles';

export const  DoughnutChart = () => {
  const data = {
    labels: ['pokryte zapotrzebowanie'],
    datasets: [{
      data: [300, 50],
      backgroundColor: [
        'rgb(54, 162, 235)',
        'rgb(201, 203, 207)'
      ],
    }]
  }

  return(
    <Chart
      style={chartStyle}
      type='doughnut'
      data={data}
    >
    </Chart>
  );
}