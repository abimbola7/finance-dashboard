// import React from 'react'
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js';
// import { Bar } from 'react-chartjs-2';
// import faker from '@faker-js/faker';

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );

// export const options = {
//   responsive: true,
//   plugins: {
//     legend: {
//       display : false
//       // position: 'top',
//     },
//     title: {
//       display: false,
//     },
//   },
// };

// const labels = ["November", "December", 'January', 'February', 'March', 'April', 'May', 'June'];

// export const data = {
//   labels,
//   datasets: [
//     {
//       label: 'Dataset 1',
//       data: [10, 20, 30, 40, 50, 60, 70, 80, 90],
//       backgroundColor: 'rgba(255, 99, 132, 0.5)',
//       barPercentage : .8
//       // borderRadius : 20,
//       // barThickness : 5,
      
//     },
//     {
//       label: 'Dataset 2',
//       data: [100, 200, 300, 400, 500, 600, 700, 1000, 500],
//       backgroundColor: 'rgba(53, 162, 235, 0.5)',
//       barPercentage : .8,
//       // borderRadius : 20,
//       // barThickness : 5,
//     },
//     {
//       label: 'Dataset 3',
//       data: [500, 300, 800, 600, 200, 900, 400, 1200, 1500],
//       backgroundColor: 'rgba(53, 162, 235, 0.5)',
//       barPercentage : .8
//       // barThickness : 5,
//       // borderRadius : 10
//     },
//   ],
// };


// const Chart = () => {
//   return (
//     <div className='pt-8 px-5 bg-[#F7F8FF] h-fit'>
//       <div className='flex items-center justify-between flex-row'>
//         <h2 className='font-semibold text-xl text-[#141434]'>
//           Statistics
//         </h2>
//         <div></div>
//       </div>
//       <div className='h-[400px] mt-5'>
//         <Bar 
//         className='w-full h-80'
//         options={{
//           ...options,
//           categoryPercentage : .4,
//           // barPercentage : .9,
//           // cornerRadius: 0,
//           // maintainAspectRatio: false,
//           scales: {
    
//             x: {
//               border: {
//                 display: false,
//               },
//               grid: {
//                 display: false,
//                 color: "rgba(255, 255, 255, 0.1)",
//               },
//             },
//             y: {
//               ticks: {
//                 maxTicksLimit: 5,
//               },
//               border: {
//                 display: false,
//               },
//               grid: {
//                 display: false,
//                 color: "rgba(255, 255, 255, 0.1)",
//               },
//             },
//           },
//         }} 
//         data={{
//           ...data,
//         }}/>
//       </div>
//     </div>
//   )
// }

// export default Chart

// "use client"
import React from 'react'
import ReactApexChart from 'react-apexcharts'
import { Select } from '@chakra-ui/react'
// import "./chart.css"
// import dynamic from "next/dynamic"
// import { theme } from "next-themes"
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select"

// const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });
// import { Chart } from "react-apexcharts"

const Chartss = () => {
  // console.log(theme)
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
    7500, 18000, 3000, 30000, 10000, 45000, 10000, 23000
  ])
  const [ data2, setData2 ] = React.useState([
    750, 1800, 300, 3000, 1000, 4500, 1000, 2300
  ])
  const [ data3, setData3 ] = React.useState([
    70, 100, 30, 300, 100, 450, 100, 230
  ])
  const options  = {
    // series: [{
    //   name : "Sales Trend",
    //   data: data1
    // }],
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
    <div className='sm:p-4 bg-[#F7F8FF] rounded-2xl'>
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
          <option value='option1'>Option 1</option>
          <option value='option2'>Option 2</option>
          <option value='option3'>Option 3</option>
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