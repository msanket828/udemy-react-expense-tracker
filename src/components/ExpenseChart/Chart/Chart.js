import React from 'react';
import ChartBar from '../ChartBar/ChartBar';
import './Chart.css';

const Chart = (props) => {
  let dataPointValues=props.dataPoints.map(dataPoint=>dataPoint.value);
  const totalMaximum=Math.max(...dataPointValues);
  return (
    <div className="chart-container rounded d-flex align-items-center justify-content-between p-3">
      {
        props.dataPoints.map((dataPoint) => {
          return (
            <ChartBar key={dataPoint.label}
              value={dataPoint.value}
              maxValue={totalMaximum}
              label={dataPoint.label}
            />
          )
        })
      }
    </div>
  )
}

export default Chart;