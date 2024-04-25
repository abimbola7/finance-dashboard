import { background } from '@chakra-ui/react'
import React from 'react'
import ReactApexChart from 'react-apexcharts'
import { FiEdit3 } from "react-icons/fi";


const RadialChart = () => {
  const [ creditScore, setCreditScore ] = React.useState(10600)
  const [ creditSpent, setCreditSpent ] = React.useState(6572)
  const [ percentage, setPercentage ] = React.useState(0)
  const setCredit = () => {
    // const score
    const per = (creditSpent / creditScore) * 100
    setPercentage(per)
  }

  React.useEffect(()=>{
    setCredit()
  }, [ creditScore, percentage ])

  const state = {
    series  : [percentage],
    options : {
      chart : {
        height : 350,
        type : "radialBar",
      },
      fill: {
        type: "gradient",
        gradient: {
          type: "vertical",
          shadeIntensity: 1,
          opacityFrom: 0.2,
          opacityTo: 1,
          colorStops: [
            [
              {
                offset: 0,
                color: "#ddf7f0",
                opacity: 1,
              },
              {
                offset: 70,
                color: "#3326AE",
                opacity: 1,
              },
            ],
          ],
        },
      },
      plotOptions : {
        // colors : ["red"],
        radialBar : {
          dataLabels : {
            show : true,

            name: {
              show: false,
            },
            value: {
              show: true,
              fontSize: '20px',
              fontWeight: 700,
              color: "#3326AE",
              offsetY: 16,
              formatter: function (val) {
                return val + '%'
              }
            },
            total: {
              show: false,
              label: 'Total',
              color: '#373d3f',
              fontSize: '16px',
              fontFamily: undefined,
              fontWeight: 600,
              formatter: function (w) {
                return w.globals.seriesTotals.reduce((a, b) => {
                  return a + b
                }, 0) / w.globals.series.length + ''
              }
          }
          },
          hollow : {
            size : "80%",
            background : "#ffffff",
            margin : 0,
            padding : 0
          },
          track : {
            background : "#ffffff"
          }
        },
      },
      labels : [],
    }
  }
  return (
    <div>
      <div className='flex items-center justify-end'>
        <FiEdit3 size={16} color='#C4BDD5' className='cursor-pointer'/>
      </div>
      <ReactApexChart
      options={{
        ...state.options,
      }}
      series={state.series}
      height={200}
      type='radialBar'
      />
    </div>
  )
}

export default RadialChart
