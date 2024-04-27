import React from 'react'
import ReactApexChart from 'react-apexcharts'
import { Select } from '@chakra-ui/react'

const Chartss = () => {
  const [ date, setDate ] = React.useState([
    "Nov",
    "Dec",
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
  ])
  const [ data1, setData1 ] = React.useState([
    9500, 8500, 7500, 7000, 9000, 9500, 10000, 7000
  ])
  const [ data2, setData2 ] = React.useState([
    6050, 8800, 7000, 6000, 7300, 8200, 6500, 5500
  ])
  const [ data3, setData3 ] = React.useState([
    4500, 3000, 5000, 3200, 4100, 4050, 3100, 2330
  ])
  const options  = {
    series : [
      { name : "Net Profit", data : data1 },
      { name : "Revenue", data : data2 },
      { name : "Free Cash Flow", data : data3 }
    ],
    options: {
      stroke: {
        width : 5,
        colors: 'transparent'
      },
      tooltip : {
        enabled : true,
      },
      yaxis : {
        stepSize : 10000
      },
      grid: {
        borderColor : "#808080",
        show: false,
        strokeDashArray: 5,
        yaxis: {
          lines: {
            show: true,
          },

        },
        xaxis: {
          lines: {
            show: false,
          },
        },
      },
      chart: {
        height: 250,
        type: 'bar',
        toolbar : {
          show : false
        },
        foreColor : '#808080'
        },
        // colors: colors,
        plotOptions: {
          bar: {
            columnWidth: '12px',
            // borderRadius : 10,
            borderRadiusApplication : "end",
            // endingShape : 'rounded'

          }
        },
        dataLabels: {
          enabled: false
        },
        legend: {
          show: false,
        },
        xaxis: {
          categories: date,
          labels: {
            style: {
              // colors: colors,
              fontSize: '12px'
            }
          }
        },
      },
  }
  return (
    <div className='p-4 bg-[#F7F8FF] rounded-2xl'>
      <div className='flex items-center justify-between flex-row'>
        <h2 className='font-semibold text-xl text-[#141434]'>
          Statistics
        </h2>
        <Select 
        placeholder='Year' 
        w={""} 
        color={"#372BB0"} 
        borderRadius={20} 
        backgroundColor={"#fff"}
        focusBorderColor='none'
        outlineColor={"none"}
        className='!focus:outline-none'
        >
          <option value='month'>Month</option>
          <option value='week'>Week</option>
        </Select>
     </div>
      <ReactApexChart
      options={
        {
          ...options.options,
          // colors:['red', 'blue', 'yellow'],
          fill: {
            type: "gradient",
            gradient: {
              type: "vertical",
              shadeIntensity: 0,
              opacityFrom: 1,
              opacityTo: 1,
              colorStops: [
                [
                  {
                    offset: 0,
                    color: "#372BB0",
                    opacity: 1,
                  },
                  {
                    offset: 100,
                    color: "#372BB0",
                    opacity: 1,
                  },
                ],
                [
                  {
                    offset: 0,
                    color: "#372BB0",
                    opacity: 1,
                  },
                  {
                    offset: 100,
                    color: "#372BB0",
                    opacity: 1,
                  },
                ],
                [
                  {
                    offset: 0,
                    color: "#372BB0",
                    opacity: 1,
                  },
                  {
                    offset: 100,
                    color: "#372BB0",
                    opacity: 1,
                  },
                ],
              ],
            },
          },
        }
      } 
      series={options.series} 
      type="bar" 
      width={"100%"}
      height={270}
      />
    </div>
  );
}

export default Chartss