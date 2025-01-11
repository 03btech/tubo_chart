import Chart from "chart.js/auto";
import "chartjs-adapter-date-fns";
import { format } from "date-fns";

fetch("https://6780a11585151f714b0745bd.mockapi.io/sampling")
  .then((response) => response.json())
  .then((data) => {
    const formattedData = data.map((item) => ({
      ...item,
      SamplingDate: new Date(item.SamplingDate).toISOString().split("T")[0], // Ensure ISO format
    }));

    const ctx = document.getElementById("lineGraph").getContext("2d");
    const myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: formattedData.map((item) => item.SamplingDate),
        datasets: [
          {
            label: "Nitrogen Level (mg/kg)",
            data: formattedData.map((item) => item.Nitrogen),
            borderColor: "rgba(75, 192, 192, 1)",
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            fill: true,
          },
        ],
      },
      options: {
        scales: {
          x: {
            type: "time",
            time: {
              parser: "yyyy-MM-dd", // Matches the formatted SamplingDate
              unit: "day",
            },
          },
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  })
  .catch((error) => console.error("Error fetching data:", error));
