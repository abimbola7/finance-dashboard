import React from 'react'
import Container from './container'

const FirstSection = () => {
  return (
    <div className='grid grid-cols-3 gap-x-12'>
      <Container className={"bg-[#FFFFFF]"} amount={10320} title={"visitors"} key={1} firstSrc={"/assets/curve1.svg"} secondSrc={"/assets/Vector.svg"}/>
      <Container className={"bg-[#FFFFFF]"} amount={4628} title={"customers"} key={2} firstSrc={"/assets/curve3.svg"} secondSrc={"/assets/vector2.svg"}/>
      <Container className={"bg-[#FF392B]"} amount={2980} title={"visitors"} key={3} firstSrc={"/assets/curve2.svg"} secondSrc={"/assets/vector1.svg"}/>
    </div>
  )
}

export default FirstSection
