import React from 'react'

const Button = ({ children, className }) => {
  return (
    <div className='py-3 px-6 rounded-3xl text-white bg-[#3326AE] cursor-pointer'>
      { children }
    </div>
  )
}

export default Button
