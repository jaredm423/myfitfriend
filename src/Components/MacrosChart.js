import 'chart.js/auto';
import { Pie } from 'react-chartjs-2';

const MacrosChart = ({ protein, carbs, fats }) => {
    const data = {
      labels: ['Protein', 'Carbohydrates', 'Fats'],
      datasets: [
        {
          data: [protein, carbs, fats],
          backgroundColor: ['#54de66', '#e91645', '#FFCE56'],
          hoverBackgroundColor: ['#54de66', '#e91645', '#FFCE56'],
        },
      ],
    };

    const chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
    };

    return <Pie data={data} options={chartOptions}/>;
  }
  export default MacrosChart;