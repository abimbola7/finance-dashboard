import React from 'react'
import { BsThreeDots } from 'react-icons/bs'
import SvgCard from './svgcard'
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
} from '@chakra-ui/react'
import { ChevronDownIcon } from 'lucide-react'



const DebCard = () => {
  return (
    <div className=''>
      <div className="flex justify-between items-center">
        <h2 className='text-veryDeepBlue font-semibold text-lg'>My Card</h2>
        <Menu className='!bg-none'>
          <MenuButton as={Button} className='!bg-none' backgroundColor={"none"}>
            <BsThreeDots size={16}/>
          </MenuButton>
          <MenuList>
            <MenuItem>Block Card</MenuItem>
            <MenuItem  color={"#ff0000"}>Delete Card</MenuItem>
          </MenuList>
        </Menu>
        {/* <BsThreeDots size={16}/> */}
      </div>
      <div className='mt-5'>
        <SvgCard />
      </div>
    </div>
  )
}

export default DebCard
