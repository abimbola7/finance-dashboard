import React from 'react'
import { BsThreeDots } from 'react-icons/bs'
import SvgCard from './svgcard'


const DebCard = () => {
  return (
    <div className=''>
      <div className="flex justify-between items-center">
        <h2 className='text-veryDeepBlue font-semibold text-lg'>My Card</h2>
        <BsThreeDots size={16}/>
      </div>
      <div className='mt-5'>
        <SvgCard />
      </div>
    </div>
  )
}

export default DebCard
