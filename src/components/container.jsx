import React from 'react'

const Container = ({ className, title, amount, firstSrc, secondSrc }) => {
  return (
    <div className={`py-7 px-5 ${className} rounded-xl shadow-lg flex flex-row gap-x-5`}>
      <div className='relative'>
        <img src={firstSrc} alt="curve" className='absolute' />
        <img src={secondSrc} alt="curve" className='' />
      </div>
      <div className={`flex flex-col`}>
        <p className={`text-xs font-medium uppercase tracking-wide ${className === "bg-[#FF392B]" ? "text-[#FFFFFF]" : "text-[#C4BDD5]"}`}>{title}</p>
        <p className={`text-2xl font-semibold ${className === "bg-[#FF392B]" ? "text-[#FFFFFF]" : "text-[#111136]"}`}>{amount.toLocaleString()}</p>
      </div>
    </div>
  )
}

export default Container
