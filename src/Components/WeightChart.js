import 'chart.js/auto';
import { Line } from 'react-chartjs-2';

const WeightChart = ({ labels, data }) => {
    const chartData = {
      labels: labels,
      datasets: [
        {
          label: 'Weight',
          data: data,
          fill: false,
          borderColor: '#54de66',
          backgroundColor: '#36A2EB',
          pointBorderColor: '#36A2EB',
          pointBackgroundColor: '#36A2EB',
          pointHoverBackgroundColor: '#36A2EB',
          pointHoverBorderColor: '#36A2EB',
        },
      ],
    };

    const chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
    };

    return <Line data={ chartData } options={ chartOptions }/>;
  }
  export default WeightChart;