import React from 'react'
import SearchBar from './searchbar'
import { IoIosNotifications } from "react-icons/io";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
  Icon,
  Image,
} from '@chakra-ui/react'
import { ChevronDownIcon } from 'lucide-react';

const Header = ({ className }) => {
  return (
    <header className={`w-full flex items-center px-1 sticky left-0 top-0  z-[50]`}>
      <nav className={`flex items-center justify-between mx-auto pt-10 pb-4 px-4 max-w-[90%] w-full flex-row flex-nowrap`}>
        <div className='mr-5 tab:hidden'>
          <img src="/assets/icon3.svg" alt='icon' className=''/>
        </div>
        <div className='flex flex-row flex-1 tab:flex-none tab:w-1/2'>
          <SearchBar />
        </div>
        <div className='flex flex-row tab:w-1/2 justify-end md:justify-between'>
          <ul className='hidden md:flex flex-row items-center space-x-6 text-[#232345]'>
            {
              [
                ["Feedback"], ["Contacts"], ["Help"]
              ].map(([item])=>(
                <li className='font-medium text-md cursor-pointer'>{item}</li>
              ))
            }
          </ul>
          <div className='flex flex-row space-x-5 items-center'>
            <div className='relative cursor-pointer'>
              <div className='absolute right-[.4rem] top-1 w-1 h-1 bg-red-500 rounded-full'/>
              <IoIosNotifications size={20} color='#BBBED9' />
            </div>
            
            <Menu>
              <MenuButton as={Button}  variant={'unstyled'}>
                <div className='w-8 h-8 overflow-hidden rounded-xl cursor-pointer'>
                  <img src="/avatar.webp" alt="" className='w- h-8 scale-125'/>
                </div>
              </MenuButton>
              <MenuList>
                <MenuItem fontWeight={600}>Alex Smith</MenuItem>
                <MenuItem color={"#ff0000"}>Log out</MenuItem>
              </MenuList>
            </Menu>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
