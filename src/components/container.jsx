import React from 'react'

const Container = ({ className, title, amount, firstSrc, secondSrc }) => {
  return (
    <div className={`p-2 sm:py-7 sm:px-5 ${className} rounded-xl shadow-lg flex flex-col-reverse gap-y-5 sm:flex-row gap-x-5`}>
      <div className='relative w-full sm:w-fit'>
        <img src={firstSrc} alt="curve" className='absolute w-full sm:w-fit' />
        <img src={secondSrc} alt="curve" className='w-full sm:w-fit' />
      </div>
      <div className={`flex flex-col`}>
        <p className={`text-xs font-medium uppercase tracking-wide ${className === "bg-[#FF392B]" ? "text-[#FFFFFF]" : "text-[#C4BDD5]"}`}>{title}</p>
        <p className={`text-2xl font-semibold ${className === "bg-[#FF392B]" ? "text-[#FFFFFF]" : "text-[#111136]"}`}>{amount.toLocaleString()}</p>
      </div>
    </div>
  )
}

export default Container
