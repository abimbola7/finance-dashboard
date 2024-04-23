"use client"

import React from 'react'
import { CiSearch } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx"
import { BsFillMicFill } from "react-icons/bs"
import { AiOutlineSearch } from "react-icons/ai"

const SearchBar = ({ className }) => {
  const [ term, setTerm ] = React.useState('')
  return (
    <form 
    className='flex items-center rounded-2xl px-4 py-3 ml-10 mr-5 flex-grow max-w-3xl bg-[#F7F8FF]'>
      <AiOutlineSearch 
      className='text-2xl hidden sm:inline-flex text-blue-500 cursor-pointer'
      />
      <input
      onChange={(e)=>setTerm(e.target.value)}
      value={term}
      type='text' 
      className='w-full focus:outline-none bg-[#F7F8FF] pl-3' 
      placeholder='Search...' 
      />
    </form>
  )
}

export default SearchBar