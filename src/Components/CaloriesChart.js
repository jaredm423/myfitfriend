import 'chart.js/auto';
import { Pie } from 'react-chartjs-2';

const CaloriesChart = ({ consumed, left }) => {
    const chartData = {
      labels: ['Consumed', 'Left'],
      datasets: [
        {
          data: [ consumed, left ],
          backgroundColor: ['#54de66', '#36A2EB'],
          hoverBackgroundColor: ['#54de66', '#36A2EB'],
        },
      ],
    };

    const chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
    };

    return <Pie data={ chartData } options={ chartOptions }/>;
  }
  export default CaloriesChart;