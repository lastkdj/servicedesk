import React from "react";
import { Line, Bar } from "react-chartjs-2";
import { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const BarChart = () => {
  const [chartDatam, setChartData] = useState({});

  const matcheslg = useMediaQuery("(max-width:600px)");

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
          borderWidth: 2,
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
    <Grid
      item
      container
      xs={12}
      sm={12}
      md={9}
      lg={9}
      xl={9}
      style={{ order: 7 }}
    >
      <Paper
        elevation={3}
        style={{
          display: "flex",
          backgroundColor: "#282C34",
          alignItems: "flex-end",
          color: "white",
          width: "100%",
          // height: matcheslg ? "200px" : "100%",
        }}
      >
        {!matcheslg ? (
          <Line
            data={chartDatam}
            height={100}
            options={{
              responsive: true,

              scales: {
                xAxes: [
                  {
                    gridLines: "none",
                  },
                ],

                yAxes: [
                  {
                    gridLines: {
                      color: "#5F6063",
                    },
                  },
                ],
              },
            }}
          />
        ) : (
          <Bar data={chartDatam} />
        )}
      </Paper>
    </Grid>
  );
};

export default BarChart;
