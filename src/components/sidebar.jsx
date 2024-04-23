import React from 'react'
import { IoMdHome } from "react-icons/io";
import { AiFillPieChart } from "react-icons/ai";
import { MdChatBubble } from "react-icons/md";
import { IoWalletSharp } from "react-icons/io5";

const SideBar = () => {
  return (
    <div className='w-20 h-full p-3 '>
      {/* <div className='flex item-center justify-center py-4'>
      </div> */}
      <div className='w-full h-full flex flex-col items-center'>
        <img src="/icon.png" alt="" className='w-10 h-10 mt-4'/>
        <div className='w-full h-full flex items-center justify-center'>
          <div className='w-full flex flex-col'>
            <div className='flex items-center justify-center px-3 py-6'>
              <IoMdHome size={28} color='#857DCE'/>
            </div>
            <div className='flex items-center justify-center px-3 py-6'>
              <AiFillPieChart size={24} color='#857DCE'/>
            </div>
            <div className='flex items-center justify-center px-3 py-6'>
              <MdChatBubble size={24} color='#857DCE'/>
            </div>
            <div className='flex items-center justify-center px-3 py-6'>
              <IoWalletSharp size={24} color='#857DCE'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SideBar
