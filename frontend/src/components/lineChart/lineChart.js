import React from 'react'
import { Chart } from "react-chartjs-2";
import { chartStyle } from './lineChart.styles';

export const LineChart = (props) => {
  const data = props.data.usages;

  return(
    <Chart
      style={chartStyle}
      type='line'
      data={{
        labels: data.map((el) => `${ el.day }`),
        datasets: [{
          label: 'Miesięczne zużycie wody',
          data: data.map((el) => el.usage )
        }],
      }}
    >
    </Chart>
  );
}