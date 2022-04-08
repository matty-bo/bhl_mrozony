import React from 'react'
import { Chart } from "react-chartjs-2";
import { chartStyle } from './lineChart.styles';

export const LineChart = () => {
  return(
    <Chart
      style={chartStyle}
      type='line'
      data={{
        labels: [...new Array(31)].map((el, i) => `${ i }`),
        datasets: [{
          label: 'Miesięczne zużycie wody',
          data: [...new Array(31)].map((el, i) => Math.abs(Math.sin(i/4)) * 10 * Math.random() )
        }],
      }}
    >
    </Chart>
  );
}