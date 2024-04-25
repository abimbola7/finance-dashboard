import React from 'react'

const Card = ({ children, className }) => {
  return (
    <div className={`rounded-xl shadow-lg py-7 px-5 bg-white w-full ${className}`}>
      { children }
    </div>
  )
}

export default Card
