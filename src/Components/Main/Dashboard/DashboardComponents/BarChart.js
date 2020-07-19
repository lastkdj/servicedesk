import React from "react";
import { Line } from "react-chartjs-2";
import { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const BarChart = () => {
  const [chartDatam, setChartData] = useState({});

  const chart = () => {
    setChartData({
      labels: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      datasets: [
        {
          label: "New Users",
          data: [12, 19, 3, 17, 28, 24, 7, 3, 15, 23, 33, 19],
          backgroundColor: "rgba(75, 74, 93, 0.2)",
          borderWidth: 4,
          borderColor: "#8a85ff",
          borderRadius: "40%",
          hoverBackgroundColor: "white",
          pointBorderWidth: 0,
          pointHoverBorderWidth: 4,
          pointBorderColor: "#48458A",
          pointBackgroundColor: "#8a85ff",
          pointRadius: 5,
          pointHitRadius: 3,
        },
      ],
      xAxisID: "none",
    });
  };

  useEffect(() => {
    chart();
  }, []);

  return (
    <Grid item container xs={9}>
      <Paper
        elevation={3}
        style={{
          display: "flex",
          backgroundColor: "#282C34",
          alignItems: "flex-end",
          color: "white",
          width: "100%",
        }}
      >
        <Line
          data={chartDatam}
          height={100}
          options={{
            responsive: true,
            // scales: {
            //   xAxes: [
            //     {
            //       gridLines: "none",
            //     },
            //   ],

            //   yAxes: [
            //     {
            //       gridLines: {
            //         color: "white",
            //       },
            //     },
            //   ],
            // },
          }}
        />
      </Paper>
    </Grid>
  );
};

export default BarChart;
