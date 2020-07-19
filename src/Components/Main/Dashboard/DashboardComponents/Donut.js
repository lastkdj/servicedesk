import React from "react";
import { Doughnut } from "react-chartjs-2";
import { useEffect, useState } from "react";

const Donut = () => {
  const [chartDatam, setChartData] = useState({});

  const chart = () => {
    setChartData({
      labels: ["Tickets", "Licenses", "Users", "Notebooks"],
      datasets: [
        {
          data: [500, 50, 150, 600], // Specify the data values array
          borderColor: ["#8A85FF", "#6F6BC8", "#57549B", "#BEBCFF"], // Add custom color border
          backgroundColor: ["#8A85FF", "#6F6BC8", "#57549B", "#BEBCFF"], // Add custom color background (Points and Fill)
          hoverBackgroundColor: "white",
          borderWidth: 0,
          // hoverBorderColor: ["#8A85FF", "#6F6BC8", "#57549B", "#BEBCFF"],
          // hoverBorderWidth: 16,
          // Specify bar border width
        },
      ],

      options: {
        responsive: true, // Instruct chart js to respond nicely.
        maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height
      },
    });
  };

  useEffect(() => {
    chart();
  }, []);

  return (
    <div>
      <Doughnut
        data={chartDatam}
        width={300}
        height={300}
        style={{ cursor: "pointer" }}
        options={{
          responsive: true,
        }}
      />
    </div>
  );
};

export default Donut;
