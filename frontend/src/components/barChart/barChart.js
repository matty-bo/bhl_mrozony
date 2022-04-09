import React from 'react';
import { Chart as ChartJS, registerables } from 'chart.js';
import { Chart } from "react-chartjs-2";
import { chartStyle } from './barChart.styles';
ChartJS.register(...registerables);

const dataToColors = (data) => {
  return data.map((d) => d.usage > 0.8 ? 'rgba(255, 99, 132, 0.2)' : 'rgba(54, 162, 235, 0.2)')
};

export const DashboardBarChart = (props) => {
  const data = props.data.usages;

  return(
    <Chart
      style={chartStyle}
      type='bar'
      data={{
        labels: data.map((el) => `${ el.time.slice(0,5) }`),
        datasets: [{
          label: 'Godzinowe zużycie wody',
          data: data.map((el) => el.usage),
          backgroundColor: dataToColors(data)
        }],
      }}
    >
    </Chart>
  );
}