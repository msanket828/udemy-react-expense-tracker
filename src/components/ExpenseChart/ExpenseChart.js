import React from 'react'
import Chart from './Chart/Chart';

const ExpenseChart = (props) => {

  const chartDataPoints = [
    { label: 'Jan', value: 0 },
    { label: 'Feb', value: 0 },
    { label: 'MAR', value: 0 },
    { label: 'APR', value: 0 },
    { label: 'May', value: 0 },
    { label: 'Jun', value: 0 },
    { label: 'Jul', value: 0 },
    { label: 'Aug', value: 0 },
    { label: 'Sep', value: 0 },
    { label: 'Oct', value: 0 },
    { label: 'Nov', value: 0 },
    { label: 'Dec', value: 0 },
  ]

  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth();
    chartDataPoints[expenseMonth].value += expense.amount;
    console.log(chartDataPoints[expenseMonth].value);
  }

  return (
    <div className="mb-4">
      <Chart dataPoints={chartDataPoints} />
    </div>
  )
}

export default ExpenseChart;