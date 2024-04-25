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

function App() {
  const [ status, setStatus ] = React.useState("first");
  return (
    <ChakraProvider>
      <div className='w-full min-h-screen h-full bg-[#3326AE] flex flex-row transition duration-500'>
        <SideBar />
        <div className='w-full min-h-screen bg-[#ffffff] rounded-tl-[3rem] rounded-bl-[3rem] overflow-hidden'>
          <Header />
          <div className='w-full h-full flex flex-row gap-x-3 max-w-[90%] mx-auto mt-8'>
            <div className='w-3/4 px-4 space-y-10'>
              <FirstSection />
              <Chartss />
              <BottomSection />
              {/* <Chart /> */}

            </div>
            <div className='w-1/4 bg-[#F7F8FF] rounded-2xl px-4 py-10 space-y-12'>
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
