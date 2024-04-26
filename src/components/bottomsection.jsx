import React from 'react'
import LeftCard from './left'
import RightCard from './right'

const BottomSection = () => {
  return (
    <div className='w-full grid p-3 grid-cols-1 sm:grid-cols-2 gap-x-6 xl:gap-x-12 gap-y-10'>
      <LeftCard/>
      <RightCard/>
    </div>
  )
}

export default BottomSection
