import React from "react";
import { Doughnut } from "react-chartjs-2";
import { useEffect, useState } from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const Donut = () => {
  const [chartDatam, setChartData] = useState({});

  const matcheslg = useMediaQuery("(min-width:1280px)");
  const matchesxl = useMediaQuery("(max-width:1919px)");
  const matchesmd = useMediaQuery("(min-width:960px)");
  const matcheslgmax = useMediaQuery("(max-width:1279px)");

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
          // responsive: true, // Instruct chart js to respond nicely.
          // maintainAspectRatio: true, // Add to prevent default behaviour of full-width/height

          legend:
            matcheslg && matchesxl
              ? {
                  display: true,
                  labels: {
                    boxWidth: 10,
                    fontSize: 9,
                    padding: 5,
                  },
                }
              : matchesmd && matcheslgmax
              ? {
                  display: true,
                  labels: {
                    boxWidth: 10,
                    fontSize: 9,
                    padding: 5,
                  },
                }
              : {
                  display: true,
                  labels: {
                    boxWidth: 40,
                    fontSize: 12,
                    padding: 10,
                  },
                },
        }}
      />
    </div>
  );
};

export default Donut;
