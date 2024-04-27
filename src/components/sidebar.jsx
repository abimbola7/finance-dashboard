import React from 'react'
import { IoMdHome } from "react-icons/io";
import { AiFillPieChart } from "react-icons/ai";
import { MdChatBubble } from "react-icons/md";
import { IoWalletSharp } from "react-icons/io5";

const SideBar = () => {
  const [ status, setStatus ] = React.useState("home");
  const icons = [
    { id : 1,  name : "home", icon : <IoMdHome  className='text-xl sm:text-3xl'/> },
    { id : 2,  name : "chart", icon : <AiFillPieChart  className='text-xl sm:text-2xl'/> },
    { id : 3,  name : "chat", icon : <MdChatBubble  className='text-xl sm:text-2xl'/> },
    { id : 4,  name : "wallet", icon : <IoWalletSharp  className='text-xl sm:text-2xl'/> },
  ]
  return (
    <div className='tab:w-20 tab:h-screen p-1 tab:p-3 tab:sticky tab:top-0 tab:left-0 transition-all duration-500 w-full h-12 sm:h-16 fixed left-0 bottom-0 bg-[#3326AE] tab:bg-transparent z-[10] rounded-[30px]'>
      <div className='w-full h-full flex flex-row tab:flex-col items-center'>
        <img src="/assets/icon2.svg" alt="" className='w-10 h-10 mt-4 hidden tab:block cursor-pointer'/>
        <div className='w-full h-full flex items-center justify-center '>
          <div className='w-full flex flex-row tab:flex-col items-center tab:items-stretch justify-center gap-x-6 sm:gap-x-12 tab:space-x-0 gap-y-10'>
            {
              icons.map(icon=>(
                <div
                onClick={()=>setStatus(icon.name)} 
                key={icon.id}
                className={`flex items-center justify-center px-3 py-4 cursor-pointer transition-all duration-500 relative ${
                  status === icon.name ? 'before:absolute before:transition-all before:duration-500 before:top-0 before:left-0 before:w-full before:h-full before:bg-white before:rounded-xl before:-z-[10] -translate-y-4 sm:-translate-y-8 tab:translate-y-0 tab:translate-x-6 before:shadow-2xl !text-red-500 ' : "text-[#857DCE] hover:text-[#ffffff]"
                }`}>
                  {icon.icon}
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default SideBar
