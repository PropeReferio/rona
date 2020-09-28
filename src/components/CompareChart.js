import React from "react"
import { Flex, Text } from "@chakra-ui/core"
import { Line } from "react-chartjs-2"
import moment from "moment"

export default function MixedChart({
  main,
  baseLine,
  mainTitle,
  baseLineTitle,
  dates,
  xTitle,
  yTitle,
}) {
  const chartData = {
    labels: dates.map((item) => moment(item, "DD/MM/YYYY")).reverse(),
    datasets: [
      {
        label: baseLineTitle,
        fill: false,
        type: "line",
        lineTension: 0.1,
        backgroundColor: "rgba(112, 5, 0,1)",
        borderColor: "rgb(112, 5, 0)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgb(112, 5, 0)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgb(112, 5, 0)",
        pointHoverBorderColor: "rgb(220,220,220)",
        pointHoverBorderWidth: 2,
        pointRadius: 0,
        pointHitRadius: 10,
        data: baseLine.reverse(),
      },
      {
        label: mainTitle,
        type: "line",
        fill: true,
        lineTension: 0.1,
        backgroundColor: "rgba(189, 11, 2, 0.8)",
        borderColor: "rgb(189, 11, 2)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgb(189, 11, 2)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgb(189, 11, 2)",
        pointHoverBorderColor: "rgb(220,220,220)",
        pointHoverBorderWidth: 2,
        pointRadius: 0,
        pointHitRadius: 10,
        data: main.reverse(),
      },
    ],
  }

  const options = {
    maintainAspectR: true,
    responsive: true,
    legend: {
      position: "bottom",
    },
    scales: {
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: yTitle,
          },
        },
      ],
      xAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: xTitle,
          },
          type: "time",
          time: {
            unit: "month",
            displayFormats: {
              month: "MMM",
            },
          },
        },
      ],
    },
  }
  return (
    <Flex
      style={{
        margin: "1rem",
        flexDirection: "column",
        justifyContent: "center",
        flexGrow: 1,
      }}
    >
      <Flex
        style={{
          margin: "1rem auto",
          flexDirection: "column",
          justifyContent: "center",
          width: "75%",
          minWidth: "290px",
          color: "dimgray",
        }}
      ></Flex>
      <Line data={chartData} maintainAspectR options={options} />
    </Flex>
  )
}