import React from 'react'
import Card from './ui/card'
import Button from './ui/button'
import { IoCaretForwardOutline } from 'react-icons/io5'
import { BsArrowRight } from 'react-icons/bs'

const RightCard = () => {
  return (
    <Card
    className="flex flex-col space-y-6"
    >
      <div className='flex items-center gap-x-3 flex-row'>
        <div className='w-12 h-12'>
          <img src='/avatar2.jpg' className='w-12 h-12 object-cover object-center rounded-full' alt='img'/>
        </div>
        <div className='flex flex-col'>
          <h1 className='font-medium text-base text-veryDeepBlue'>Lily Donovan</h1>
          <p className='text-xs text-[#b6b7b8]'>Business trainer</p>
        </div>
      </div>
      <div className='font-medium text-lg text-veryDeepBlue'>
        How to properly manage your personal budget
      </div>
      <div className='flex items-center font-medium text-[#4A4A66] text-sm gap-x-6'>
        <div className='flex items-center'>
          <img src="/assets/video.svg" alt="video" className='mr-2' />  
          Video
        </div>
        <div className='flex items-center'>
          <img src="/assets/time.svg" alt="time" className='mr-2' />  
          15 mins
        </div>
        <div className='flex items-center'>
          <img src="/assets/star.svg" alt="star" className='mr-2' />  
          12 likes
        </div>
      </div>
      <div className='flex items-center justify-between'>
        <p className='text-sm font-medium text-[#4A4A66] tracking-tight'>5 days ago</p>
        <Button>
          Connect
          <BsArrowRight size={16} className='ml-5 inline-block' />
        </Button>
      </div>
    </Card>
  )
}

export default RightCard
