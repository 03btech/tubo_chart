import Chart from 'chart.js/auto';
import 'chartjs-adapter-date-fns';

const data = [
  { SamplingDate: new Date(2023, 0, 1), Nitrogen: 30 },
  { SamplingDate: new Date(2023, 0, 2), Nitrogen: 35 },
  { SamplingDate: new Date(2023, 0, 3), Nitrogen: 40 },
  { SamplingDate: new Date(2023, 0, 4), Nitrogen: 45 },
  { SamplingDate: new Date(2023, 0, 5), Nitrogen: 50 },
  { SamplingDate: new Date(2023, 0, 6), Nitrogen: 55 },
  { SamplingDate: new Date(2023, 0, 7), Nitrogen: 60 },
  { SamplingDate: new Date(2023, 0, 8), Nitrogen: 65 },
  { SamplingDate: new Date(2023, 0, 9), Nitrogen: 70 },
  { SamplingDate: new Date(2023, 0, 10), Nitrogen: 75 },
];

const ctx = document.getElementById('lineGraph').getContext('2d');
const myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: data.map(item => item.SamplingDate),
    datasets: [{
      label: 'Nitrogen Levels',
      data: data.map(item => item.Nitrogen),
      borderColor: 'rgba(75, 192, 192, 1)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      fill: true,
    }]
  },
  options: {
    scales: {
      x: {
        type: 'time',
        time: {
          unit: 'day'
        }
      },
      y: {
        beginAtZero: true
      }
    }
  }
});