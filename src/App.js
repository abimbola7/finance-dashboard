import logo from './logo.svg';
import './App.css';
import SideBar from './components/sidebar';
import Header from './components/header';
import FirstSection from './components/firstsection';
// import Chart from './components/chart';
import Chartss from "./components/chart"
import BottomSection from './components/bottomsection';
import Transaction from './components/transaction';
import DebCard from './components/debcard';
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import RadialChart from './components/radialchart';
import { LuBarChart } from "react-icons/lu";
import { CiCreditCard1 } from "react-icons/ci";

function App() {
  const [ status, setStatus ] = React.useState("stats");
  const [windowSize, setWindowSize] = React.useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    });
  };
  
  const changeColor = (size, type) => {
    return windowSize.width <= 768 ? (
      status === type ? "w-full" : "hidden"
    ) : size
  }

  React.useEffect(() => {
    window.addEventListener('resize', handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <ChakraProvider>
      <div className={`w-full min-h-screen h-full bg-[#3326AE] flex flex-row`}>
        <SideBar />
        <div className={`w-full min-h-screen tab:rounded-tl-[3rem] tab:rounded-bl-[3rem] overflow-hidden ${
              windowSize.width <= 768 ? (
                status === "stats" ? "bg-white" : "bg-[#F7F8FF]") : "bg-[#ffffff]"}`}>
          <Header/>
          <div 
          className={`py-4 flex md:hidden flex-row space-x-3 justify-center ${
              windowSize.width <= 768 && (
                status === "stats" ? "bg-white" : "bg-[#F7F8FF]"
              )}`}>
                <div className='flex flex-row space-x-5 items-center bg-white px-6 py-2 shadow-2xl rounded-xl'>
                  <div
                  onClick={()=>setStatus("stats")}
                  className="cursor-pointer">
                    <LuBarChart 
                    size={20} 
                    color='black' 
                    />
                  </div>
                  <div
                  onClick={()=>setStatus("card")} 
                  className="cursor-pointer">
                    <CiCreditCard1 
                    size={20} 
                    color='black' 
                    />
                  </div>
                </div>
          </div>
          <div className='w-full h-full flex flex-row gap-x-3 max-w-[100%] md:max-w-[95%] xl:max-w-[90%] mx-auto md:mt-8 pb-20 tab:pb-0'>
            <div className={`px-4 space-y-10 ${changeColor("w-3/4", "stats")}
            }`}>
              <FirstSection />
              <Chartss />
              <BottomSection />

            </div>
            <div className={`w-1/4 bg-[#F7F8FF] rounded-2xl px-4 py-10 space-y-12 ${changeColor("w-1/4", "card")}`}>
              <RadialChart />
              <DebCard />
              <Transaction />
            </div>
          </div>
        </div>
      </div>
    </ChakraProvider>
  );
}

export default App;
