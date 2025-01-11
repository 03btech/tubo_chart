import Chart from "chart.js/auto";
import "chartjs-adapter-date-fns";
import { format } from "date-fns";

const ctx = document.getElementById("forecastChart").getContext("2d");

// Example data for forecasting
const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const nitrogenData = [50, 55, 60, 65, 70, 75, 80, 85, 90];
const phosphorusData = [30, 35, 40, 42, 44, 47, 50, 52, 55];
const potassiumData = [20, 25, 28, 30, 33, 35, 38, 40, 42];

new Chart(ctx, {
  type: "line",
  data: {
    labels: labels, // Time labels
    datasets: [
      {
        label: "Nitrogen (N)",
        data: nitrogenData,
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        fill: false,
        tension: 0.3,
      },
      {
        label: "Phosphorus (P)",
        data: phosphorusData,
        borderColor: "rgba(54, 162, 235, 1)",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        fill: false,
        tension: 0.3,
      },
      {
        label: "Potassium (K)",
        data: potassiumData,
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: false,
        tension: 0.3,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Months",
        },
      },
      y: {
        title: {
          display: true,
          text: "Nutrient Levels (mg/kg)",
        },
        beginAtZero: true,
      },
    },
  },
});
