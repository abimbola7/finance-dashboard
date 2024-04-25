import React from 'react'
import LeftCard from './left'
import RightCard from './right'

const BottomSection = () => {
  return (
    <div className='w-full grid p-3 grid-cols-2 gap-x-12'>
      <LeftCard/>
      <RightCard/>
    </div>
  )
}

export default BottomSection
