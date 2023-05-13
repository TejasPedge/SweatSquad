import React from 'react'

import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";


ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Exercise", "Walking", "Rest"],
  datasets: [
    {
      label: "My BMI analysis",
      data: [300, 50, 100],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
      ],
      hoverOffset: 4,
    },
  ],
  animation: {
    animateScale: true,
    animateRotate: true,
    duration: 2000,
    easing: "easeOutQuart",
  },
};
const config = {
  type: "doughnut",
  data: data,
};
const Charts = () => {
  return (
    <Doughnut data={data} />
  )
}

export default Charts
