import React from 'react'
import { IoMdHome } from "react-icons/io";
import { AiFillPieChart } from "react-icons/ai";
import { MdChatBubble } from "react-icons/md";
import { IoWalletSharp } from "react-icons/io5";

const SideBar = () => {
  return (
    <div className='tab:w-20 tab:h-screen p-1 tab:p-3 tab:sticky tab:top-0 tab:left-0 transition-all duration-500 w-full h-12 sm:h-20 fixed left-0 bottom-0 bg-[#3326AE] tab:bg-transparent z-[10000] rounded-[30px]'>
      {/* <div className='flex item-center justify-center py-4'>
      </div> */}
      <div className='w-full h-full flex flex-row tab:flex-col items-center'>
        <img src="/icon.png" alt="" className='w-10 h-10 mt-4 hidden tab:block'/>
        <div className='w-full h-full flex items-center justify-center'>
          <div className='w-full flex flex-row tab:flex-col items-center tab:items-stretch justify-center gap-x-6 sm:gap-x-12 tab:space-x-0'>
            <div className='flex items-center justify-center px-3 py-6 cursor-pointer'>
              <IoMdHome color='#857DCE' className='text-xl sm:text-3xl'/>
            </div>
            <div className='flex items-center justify-center px-3 py-6 cursor-pointer'>
              <AiFillPieChart color='#857DCE' className='text-xl sm:text-2xl'/>
            </div>
            <div className='flex items-center justify-center px-3 py-6 cursor-pointer'>
              <MdChatBubble color='#857DCE' className='text-xl sm:text-2xl'/>
            </div>
            <div className='flex items-center justify-center px-3 py-6 cursor-pointer'>
              <IoWalletSharp color='#857DCE' className='text-xl sm:text-2xl'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SideBar
