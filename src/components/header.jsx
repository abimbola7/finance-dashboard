import React from 'react'
import SearchBar from './searchbar'
import { IoIosNotifications } from "react-icons/io";

const Header = () => {
  return (
    <header className={`w-full flex items-center px-1 sticky top-0 z-[50] overflow-hidden`}>
      <nav className="flex items-center justify-between mx-auto pt-10 pb-4 px-4 max-w-[90%] w-full flex-row flex-nowrap">
        <div className='flex flex-row w-1/2 px-3'>
          <SearchBar />
        </div>
        <div className='flex flex-row w-1/2 justify-between'>
          <ul className='flex flex-row items-center space-x-6 text-[#232345]'>
            {
              [
                ["Feedback"], ["Contacts"], ["Help"]
              ].map(([item])=>(
                <li className='font-medium text-md'>{item}</li>
              ))
            }
          </ul>
          <div className='flex flex-row space-x-5 items-center'>
            <div className='relative'>
              <div className='absolute right-[.4rem] top-1 w-1 h-1 bg-red-500 rounded-full'/>
              <IoIosNotifications size={20} color='#BBBED9' />
            </div>
            <div className='w-8 h-8 overflow-hidden rounded-xl'>
              <img src="/avatar.webp" alt="" className='w- h-8 scale-125'/>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
