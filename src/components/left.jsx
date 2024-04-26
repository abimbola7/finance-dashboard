import React from 'react'
import ReactApexChart from 'react-apexcharts'
import Card from './ui/card'

const LeftCard = () => {
  const state = {
    series: [{
      name: 'series1',
      type : "area",
      data: [31, 40, 28, 51, 42, 109, 100]
    }, {
      name: 'series2',
      type : "area",
      data: [11, 32, 45, 32, 34, 52, 41]
    }],
    options: {
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 0,
          opacityFrom: 0,
          opacityTo: 0,
          stops: [0, 90, 100]
        }
      },
      colors : [
        "#FF392B",
        "#F2F4FE"
      ],
      grid : {
        show : false
      },
      chart: {
        height: 350,
        type: 'area',
        toolbar : {
          show : false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth',
        width : "2"
      },
      legend : {
        show : false
      },
      yaxis : {
        show : false
      },
      xaxis: {
        colors : ["#CFD1E4"],
        type: 'category',
        categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
      },
      // tooltip: {
      //   x: {
      //     format: 'dd/MM/yy HH:mm'
      //   },
      // },
    },
  }
  return (
    <Card
    className={""}
    >
      <ReactApexChart
      options={state.options}
      series={state.series}
      type='area'
      height={"100%"}
      />
    </Card>
  )
}

export default LeftCard
