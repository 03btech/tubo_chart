import Chart from "chart.js/auto";
import "chartjs-adapter-date-fns";
import { format } from "date-fns";

async function fetchDataAndRenderCharts() {
  try {
    // API request (commented out for static data demo)
    // const response = await fetch(
    //   "https://6780a11585151f714b0745bd.mockapi.io/sampling"
    // );
    // const data = await response.json();

    // Static data for demonstration
    const data = [
      {
        SamplingDate: "2025-01-01",
        Nitrogen: 20,
        Phosphorus: 15,
        Potassium: 25,
      },
      {
        SamplingDate: "2025-01-02",
        Nitrogen: 18,
        Phosphorus: 17,
        Potassium: 23,
      },
      {
        SamplingDate: "2025-01-03",
        Nitrogen: 27,
        Phosphorus: 14,
        Potassium: 26,
      },
      {
        SamplingDate: "2025-01-04",
        Nitrogen: 19,
        Phosphorus: 16,
        Potassium: 24,
      },
    ];

    // Formatting data
    const labels = data.map(
      (item) => new Date(item.SamplingDate).toISOString().split("T")[0]
    );
    const nitrogenData = data.map((item) => ({
      x: item.SamplingDate,
      y: item.Nitrogen,
    }));
    const phosphorusData = data.map((item) => ({
      x: item.SamplingDate,
      y: item.Phosphorus,
    }));
    const potassiumData = data.map((item) => ({
      x: item.SamplingDate,
      y: item.Potassium,
    }));

    // Render charts for each nutrient
    renderChart(
      "nitrogenChart",
      "Nitrogen (N)",
      nitrogenData,
      "rgba(255, 99, 132, 1)",
      "rgba(255, 99, 132, 0.2)"
    );
    renderChart(
      "phosphorusChart",
      "Phosphorus (P)",
      phosphorusData,
      "rgba(54, 162, 235, 1)",
      "rgba(54, 162, 235, 0.2)"
    );
    renderChart(
      "potassiumChart",
      "Potassium (K)",
      potassiumData,
      "rgba(75, 192, 192, 1)",
      "rgba(75, 192, 192, 0.2)"
    );
  } catch (error) {
    console.error("Error fetching data for nutrient forecast charts:", error);
  }
}

// Function to render a single chart
function renderChart(canvasId, nutrientLabel, data, lineColor, fillColor) {
  const ctx = document.getElementById(canvasId).getContext("2d");
  new Chart(ctx, {
    type: "scatter",
    data: {
      datasets: [
        {
          type: "line",
          label: `${nutrientLabel} - Trend Line`,
          data: data,
          borderColor: lineColor,
          backgroundColor: fillColor,
          fill: false,
          tension: 0.3,
        },
        {
          type: "scatter",
          label: `${nutrientLabel} - Data Points`,
          data: data,
          borderColor: lineColor,
          backgroundColor: lineColor,
          pointRadius: 5,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: `${nutrientLabel} Levels Over Time (by Days)`,
        },
        legend: {
          display: true,
          position: "top",
        },
      },
      scales: {
        x: {
          type: "time",
          time: {
            parser: "yyyy-MM-dd",
            unit: "day",
            displayFormats: {
              day: "dd",
            },
          },
          title: {
            display: true,
            text: "Days",
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
}

// Fetch data and render charts
fetchDataAndRenderCharts();

//function to populate the report details and recommendations
const sampleData = {
  nitrogen: {
    current: "45 kg/ha",
    optimal: "70 kg/ha",
    impact: "Suboptimal nitrogen levels can reduce crop yield by 20%.",
    recommendations: [
      "Apply 20 kg/ha of nitrogen-based fertilizer.",
      "Monitor nitrogen levels weekly.",
    ],
  },
  phosphorus: {
    current: "25 kg/ha",
    optimal: "40 kg/ha",
    impact: "Low phosphorus levels may result in poor root development.",
    recommendations: [
      "Add 10 kg/ha of phosphorus-rich fertilizer.",
      "Test soil phosphorus levels monthly.",
    ],
  },
  potassium: {
    current: "50 kg/ha",
    optimal: "60 kg/ha",
    impact:
      "Deficient potassium levels can cause weaker stems and lower resistance to pests.",
    recommendations: [
      "Incorporate 5 kg/ha of potassium supplement for optimal balance.",
      "Check potassium levels bi-weekly.",
    ],
  },
};

// Function to populate the report details and recommendations
function populateReportDetails(data) {
  const nutrientKeys = ["nitrogen", "phosphorus", "potassium"];

  nutrientKeys.forEach((nutrient) => {
    const reportDetailsList = document.querySelector(
      `.report-details-list.${nutrient}`
    );
    const recommendationList = document.querySelector(
      `.recommendation-list.${nutrient}`
    );

    reportDetailsList.innerHTML = "";
    recommendationList.innerHTML = "";

    // Populate the report details list for the nutrient
    const reportItems = [
      `<li><strong>Current ${nutrient} Levels:</strong> ${data[nutrient].current}</li>`,
      `<li><strong>Optimal ${nutrient} Levels:</strong> ${data[nutrient].optimal}</li>`,
      `<li><strong>Impact on Crop Yield:</strong> ${data[nutrient].impact}</li>`,
    ];
    reportItems.forEach((item) => {
      reportDetailsList.insertAdjacentHTML("beforeend", item);
    });

    // Populate the recommendation list for the nutrient
    data[nutrient].recommendations.forEach((recommendation) => {
      const li = document.createElement("li");
      li.textContent = recommendation;
      recommendationList.appendChild(li);
    });
  });
}

// Populate with static data
populateReportDetails(sampleData);

// Fetch API data (commented out for testing with static data)
// async function fetchReportDetails() {
//   try {
//     const response = await fetch("https://example.com/api/reports");
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     const data = await response.json();
//     populateReportDetails(data);
//   } catch (error) {
//     console.error("Error fetching report details:", error);
//   }
// }

// Uncomment the following line to use the fetch functionality
// fetchReportDetails();
