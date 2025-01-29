import Chart from "chart.js/auto";
import "chartjs-adapter-date-fns";
import { format } from "date-fns";

//Line Chart: Nutrient-Specific Demand Across Stages Chart function
async function lineChartNutriSpecific() {
  try {
    const ctx = document
      .getElementById("lineChart-NutrientSpecificDemandAcrossStages")
      .getContext("2d");
    // Fetch data from an API endpoint code
    // const response = await fetch(
    //   "placeholder endpoint" // Replace with actual endpoint
    // );
    // const data = await response.json();
    // const labels = [
    //   "Planting",
    //   "Tillering",
    //   "Grand Growth",
    //   "Maturation",
    //   "Harvest",
    // ];

    // const nitrogenData = data.map((item) => item.Nitrogen);
    // const phosphorusData = data.map((item) => item.Phosphorus);
    // const potassiumData = data.map((item) => item.Potassium);

    //end of fetch data from an API endpoint code

    // static data code to be changed with the above code
    const labels = [
      "Planting",
      "Tillering",
      "Grand Growth",
      "Maturation",
      "Harvest",
    ];
    const nitrogenData = [35, 75, 125, 75, 10];
    const phosphorusData = [75, 40, 40, 30, 5];
    const potassiumData = [35, 75, 150, 200, 10];

    //end of static data code

    new Chart(ctx, {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Nitrogen",
            data: nitrogenData,
            borderColor: "rgba(54, 162, 235, 1)",
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            borderWidth: 2,
            fill: true,
          },
          {
            label: "Phosphorus",
            data: phosphorusData,
            borderColor: "rgba(255, 206, 86, 1)",
            backgroundColor: "rgba(255, 206, 86, 0.2)",
            borderWidth: 2,
            fill: true,
          },
          {
            label: "Potassium",
            data: potassiumData,
            borderColor: "rgba(75, 192, 192, 1)",
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderWidth: 2,
            fill: true,
          },
        ],
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: "Line Chart: Nutrient-Specific Demand Across Stages",
          },
          legend: {
            position: "top",
          },
        },
        responsive: true,
        scales: {
          x: {
            title: {
              display: true,
              text: "Growth Stages",
            },
          },
          y: {
            title: {
              display: true,
              text: "Nutrient Demand (kg/ha)",
            },
          },
        },
      },
    });
  } catch (error) {
    console.error("Error fetching line chart data:", error);
  }
}

// Call the Line Chart: Nutrient-Specific Demand Across Stages function
lineChartNutriSpecific();

// Stacked Area Chart: Crop Rotation Nutrient Impact Chart function
async function stackedAreaChartCropRotation() {
  try {
    const ctx = document
      .getElementById("stackedAreaChart-CropRotationNutrientImpact")
      .getContext("2d");

    // Fetch data from an API endpoint code

    // const response = await fetch(
    //   "placeholder endpoint" // Replace with actual endpoint
    // );
    // const data = await response.json();
    // const labels = data.map((item) => item.year);
    // const nitrogenData = data.map((item) => item.Nitrogen);
    // const phosphorusData = data.map((item) => item.Phosphorus);
    // const potassiumData = data.map((item) => item.Potassium);

    // End of fetch data from an API endpoint code

    // Static data code to be changed with the above code
    const labels = ["2020", "2021", "2022", "2023", "2024"];
    const nitrogenData = [120, 90, 130, 110, 140];
    const phosphorusData = [80, 60, 70, 50, 60];
    const potassiumData = [100, 150, 120, 170, 130];
    // End of static data code

    new Chart(ctx, {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Nitrogen",
            data: nitrogenData,
            borderColor: "rgba(54, 162, 235, 1)",
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            borderWidth: 2,
            fill: true,
            tension: 0.4,
          },
          {
            label: "Phosphorus",
            data: phosphorusData,
            borderColor: "rgba(255, 206, 86, 1)",
            backgroundColor: "rgba(255, 206, 86, 0.2)",
            borderWidth: 2,
            fill: true,
            tension: 0.4,
          },
          {
            label: "Potassium",
            data: potassiumData,
            borderColor: "rgba(75, 192, 192, 1)",
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderWidth: 2,
            fill: true,
            tension: 0.4,
          },
        ],
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: "Stacked Area Chart: Crop Rotation Nutrient Impact",
          },
          legend: {
            position: "top",
          },
        },
        responsive: true,
        scales: {
          x: {
            //diri nga part sir ang format naka depende sa imong data nga gi fetch sa api
            //formatting the x-axis to display complete dates
            // type: "time",
            // time: {
            //   parser: "yyyy-MM-dd", // Matches the formatted SamplingDate
            //   unit: "day",
            // },

            //formatting the x-axis to display years only
            //akoang gi comment out ra ang complete date format kay static man gyud ang data
            type: "time",
            time: {
              parser: "yyyy",
              unit: "year",
            },
            title: {
              display: true,
              text: "Time (Years)",
            },
          },
          y: {
            stacked: true,
            title: {
              display: true,
              text: "Nutrient Levels (kg/ha)",
            },
          },
        },
      },
    });
  } catch (error) {
    console.error("Error fetching stacked area chart data:", error);
  }
}

// Call the Stacked Area Chart: Crop Rotation Nutrient Impact function
stackedAreaChartCropRotation();

// Line Chart: Time Series Forecast for Nitrogen, Phosphorus, and Potassium function
async function timeSeriesForecastChart() {
  try {
    const ctx = document
      .getElementById("timeSeriesForecastChart")
      .getContext("2d");

    // Fetch data from an API endpoint code

    // const response = await fetch(
    //   "placeholder endpoint" // Replace with actual endpoint
    // );
    // const data = await response.json();
    // const labels = data.map((item) => item.time); // Replace 'time' with your field
    // const nitrogenData = data.map((item) => item.nitrogen);
    // const phosphorusData = data.map((item) => item.phosphorus);
    // const potassiumData = data.map((item) => item.potassium);
    // const nitrogenPredicted = data.map((item) => item.nitrogenPredicted);
    // const phosphorusPredicted = data.map((item) => item.phosphorusPredicted);
    // const potassiumPredicted = data.map((item) => item.potassiumPredicted);

    // end of fetch data from an API endpoint code

    // Static data code to be replaced with the above API integration
    const labels = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330, 360];
    const nitrogenHistorical = [
      20, 30, 50, 70, 90, 110, 130, 150, 120, 90, 50, 30, 20,
    ];
    const nitrogenPredicted = [
      null,
      null,
      null,
      null,
      null,
      120,
      140,
      160,
      140,
      100,
      70,
      40,
      20,
    ];
    const phosphorusHistorical = [
      50, 60, 70, 60, 50, 40, 35, 30, 25, 20, 15, 10, 5,
    ];
    const phosphorusPredicted = [
      null,
      null,
      null,
      null,
      null,
      40,
      35,
      30,
      25,
      20,
      15,
      10,
      5,
    ];
    const potassiumHistorical = [
      30, 40, 60, 80, 100, 120, 150, 200, 175, 150, 100, 50, 20,
    ];
    const potassiumPredicted = [
      null,
      null,
      null,
      null,
      null,
      200,
      190,
      180,
      160,
      140,
      100,
      60,
      20,
    ];

    // end of static data code

    new Chart(ctx, {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Nitrogen (Historical)",
            data: nitrogenHistorical,
            borderColor: "rgba(54, 162, 235, 1)", // Blue
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            borderWidth: 2,
            fill: true,
            tension: 0.4, // Smooth line
          },
          {
            label: "Nitrogen (Predicted)",
            data: nitrogenPredicted,
            borderColor: "rgba(255, 99, 132, 1)", // Red
            borderDash: [5, 5], // Dashed line
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderWidth: 2,
            fill: true,
            tension: 0.4,
          },
          {
            label: "Phosphorus (Historical)",
            data: phosphorusHistorical,
            borderColor: "rgba(255, 206, 86, 1)", // Yellow
            backgroundColor: "rgba(255, 206, 86, 0.2)",
            borderWidth: 2,
            fill: true,
            tension: 0.4,
          },
          {
            label: "Phosphorus (Predicted)",
            data: phosphorusPredicted,
            borderColor: "rgba(75, 192, 192, 1)", // Teal
            borderDash: [5, 5], // Dashed line
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderWidth: 2,
            fill: true,
            tension: 0.4,
          },
          {
            label: "Potassium (Historical)",
            data: potassiumHistorical,
            borderColor: "rgba(153, 102, 255, 1)", // Purple
            backgroundColor: "rgba(153, 102, 255, 0.2)",
            borderWidth: 2,
            fill: true,
            tension: 0.4,
          },
          {
            label: "Potassium (Predicted)",
            data: potassiumPredicted,
            borderColor: "rgba(255, 159, 64, 1)", // Orange
            borderDash: [5, 5], // Dashed line
            backgroundColor: "rgba(255, 159, 64, 0.2)",
            borderWidth: 2,
            fill: true,
            tension: 0.4,
          },
        ],
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: "Line Chart: Time Series Forecast for Nutrients",
          },
          legend: {
            position: "top",
          },
        },
        responsive: true,
        scales: {
          x: {
            title: {
              display: true,
              text: "Time (Days)",
            },
          },
          y: {
            title: {
              display: true,
              text: "Nutrient Demand (kg/ha)",
            },
          },
        },
      },
    });
  } catch (error) {
    console.error("Error fetching time series forecast data:", error);
  }
}

// Call the Time Series Forecast Chart function
timeSeriesForecastChart();

// Function to fetch data and create the sugarcane growth chart
async function fetchAndCreateSugarcaneGrowthChart() {
  try {
    // Static data for testing with heights in meters
    const data = {
      stages: ["Germination", "Tillering", "Grand Growth", "Maturity"],
      currentHeights: [0.15, 1.8, 1.5, 5.0], // Heights in meters (converted from m)
      forecastedHeights: [0.2, 0.8, 1.7, 2.0], // Forecasted heights in meters (converted from m)
    };

    // const response = await fetch(
    //   "api endpoint" // Replace with actual API URL
    // );
    // const data = await response.json();

    // Ensure the data follows the expected format
    const { stages, currentHeights, forecastedHeights } = data;

    // Get sugarcane image
    const sugarcaneImage = document.getElementById("sugarcaneImage");

    // Chart.js instance
    const ctx = document
      .getElementById("sugarcaneGrowthChart")
      .getContext("2d");
    const sugarcaneChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: stages,
        datasets: [
          {
            label: "Current Height (m)",
            data: currentHeights,
            borderColor: "green",
            borderWidth: 2,
            fill: false,
          },
          {
            label: "Forecasted Height (m)",
            data: forecastedHeights,
            borderColor: "blue",
            borderWidth: 2,
            borderDash: [5, 5],
            fill: false,
          },
        ],
      },
      options: {
        layout: {
          padding: { left: 20, right: 78, top: 50, bottom: 50 },
        },
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          legend: {
            display: true,
            onClick: (e, legendItem, legend) => {
              const index = legendItem.datasetIndex;
              const ci = legend.chart;
              const meta = ci.getDatasetMeta(index);
              meta.hidden = !meta.hidden;
              ci.update();
            },
          },
          tooltip: { enabled: true },
        },
        scales: {
          x: { title: { display: true, text: "Growth Stages" } },
          y: {
            title: { display: true, text: "Height (m)" },
            suggestedMin: 0,
            ticks: { stepSize: 0.5 },
          },
        },
      },
      plugins: [
        {
          id: "sugarcaneImagePlugin",
          afterDraw(chart) {
            const { ctx, chartArea, scales } = chart;
            const { bottom } = chartArea;
            const yScale = scales.y;
            const xScale = scales.x;

            const meta = chart.getDatasetMeta(0);
            if (meta.hidden) return;

            const imageAspectRatio =
              sugarcaneImage.naturalWidth / sugarcaneImage.naturalHeight;

            stages.forEach((stage, index) => {
              const xPos = xScale.getPixelForValue(stage);
              const currentHeightY = yScale.getPixelForValue(
                currentHeights[index]
              );
              const imageHeight = Math.abs(bottom - currentHeightY);
              const imageWidth = imageHeight * imageAspectRatio;

              ctx.drawImage(
                sugarcaneImage,
                xPos - imageWidth / 2,
                currentHeightY,
                imageWidth,
                imageHeight
              );
            });
          },
        },
      ],
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Call the function to fetch data and create the chart
fetchAndCreateSugarcaneGrowthChart();

// Combined Radar Chart for Daily Comparison of Actual vs. Target for All Nutrients
async function renderCombinedChart() {
  try {
    const ctx = document.getElementById("combinedChart").getContext("2d");

    // Static Data for Demo
    const labels = [
      "Planting",
      "Tillering",
      "Grand Growth",
      "Maturation",
      "Harvest",
    ];
    const nitrogenTarget = [20, 50, 100, 50, 10];
    const nitrogenActual = [18, 55, 95, 60, 8];
    const phosphorusTarget = [50, 30, 30, 20, 5];
    const phosphorusActual = [48, 35, 25, 22, 6];
    const potassiumTarget = [20, 50, 150, 150, 10];
    const potassiumActual = [22, 45, 140, 160, 8];
    //end of static data

    // Fetch data from an API endpoint code
    // const response = await fetch("your-api-endpoint"); // Replace with actual endpoint
    // const data = await response.json();
    // const labels = data.map((item) => item.stage);
    // const nitrogenTarget = data.map((item) => item.nitrogenTarget);
    // const nitrogenActual = data.map((item) => item.nitrogenActual);
    // const phosphorusTarget = data.map((item) => item.phosphorusTarget);
    // const phosphorusActual = data.map((item) => item.phosphorusActual);
    // const potassiumTarget = data.map((item) => item.potassiumTarget);
    // const potassiumActual = data.map((item) => item.potassiumActual);

    new Chart(ctx, {
      type: "radar",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Target Nitrogen (kg/ha)",
            data: nitrogenTarget,
            borderColor: "rgba(54, 162, 235, 1)",
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            borderWidth: 2,
          },
          {
            label: "Actual Nitrogen (kg/ha)",
            data: nitrogenActual,
            borderColor: "rgba(255, 99, 132, 1)",
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderWidth: 2,
          },
          {
            label: "Target Phosphorus (kg/ha)",
            data: phosphorusTarget,
            borderColor: "rgba(54, 235, 162, 1)",
            backgroundColor: "rgba(54, 235, 162, 0.2)",
            borderWidth: 2,
          },
          {
            label: "Actual Phosphorus (kg/ha)",
            data: phosphorusActual,
            borderColor: "rgba(255, 206, 86, 1)",
            backgroundColor: "rgba(255, 206, 86, 0.2)",
            borderWidth: 2,
          },
          {
            label: "Target Potassium (kg/ha)",
            data: potassiumTarget,
            borderColor: "rgba(75, 192, 192, 1)",
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderWidth: 2,
          },
          {
            label: "Actual Potassium (kg/ha)",
            data: potassiumActual,
            borderColor: "rgba(153, 102, 255, 1)",
            backgroundColor: "rgba(153, 102, 255, 0.2)",
            borderWidth: 2,
          },
        ],
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: "Daily Nutrient Levels vs. Targets by Growth Stage",
          },
        },
        responsive: true,
        scales: {
          r: {
            angleLines: {
              display: true,
            },
            suggestedMin: 0,
            suggestedMax: 200, // Adjust to the highest nutrient level range
          },
        },
      },
    });
  } catch (error) {
    console.error("Error fetching combined chart data:", error);
  }
}

// Render the combined chart
renderCombinedChart();
