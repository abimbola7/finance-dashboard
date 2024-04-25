import React from 'react'
import { BsPlus } from 'react-icons/bs'
import { RiNetflixFill } from "react-icons/ri";
import { GiShoppingBag } from "react-icons/gi";
import { BsTaxiFrontFill } from "react-icons/bs";

import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'

const Transaction = () => {
  const [ transaction, setTransaction ] = React.useState([
    { name : "Taxi", amount: 9.20, type : "debit", date : "01:21 PM" },
    { name : "Shopping", amount: 142.00, type : "debit", date : "11:15 AM" },
    { name : "Netflix", amount: 24.90, type : "debit", date : "01:21 PM" },
  ])
  
  return (
    <div className='flex flex-col gap-y-5 mt-5'>
      <div className="flex flex-row items-center justify-between px-2">
        <h2 className='text-veryDeepBlue font-semibold text-lg'>Transaction</h2>
        <button className='p-2 bg-[#FF392B] rounded-xl focus:outline-none'>
          <BsPlus size={16}  className='text-white fill-white'/>
        </button>
      </div>
      <div className='w-full'>
        <TableContainer className='overflow-auto'>
          <Table variant='simple'>
            <Tbody className='space-y-3' border={"none"}>
              {
                transaction.map(item=>(
                  <Tr className='' border={"none"}>
                    <Td className='!p-2'>
                      {
                        item.name === "Taxi" ? <BsTaxiFrontFill color='#FF0000'/> :
                        item.name === "Shopping" ? <GiShoppingBag color='#FF0000'/> :
                        item.name === "Netflix" ? <RiNetflixFill color='#FF0000'/> : ""
                      }
                    </Td>
                    <Td className='!p-2'>
                      <h2 className='text-sm text-[#000013] font-semibold'>{ item.name }</h2>
                      <p className='text-xs text-[#A49EDB]'>{ item.date }</p>
                    </Td>
                    <Td className='text-xs !p-2 text-[#000013]'>
                      ${
                        item.type === "debit" ? `-${item.amount.toFixed(2)}` : `${item.amount.toFixed(2)}`
                      }
                    </Td>
                  </Tr>
                ))
              }
            </Tbody>
          </Table>
        </TableContainer>
        {/* {
          transaction.map(item=>(
            <div className='flex items-center border w-full'>
              <div className='p-1'>

              </div>
              <div className='flex flex-col'>
                <h2 className='text-veryDeepBlue text-lg'>{ item.name }</h2>
                <p className='text-xs'>{item.date}</p>
              </div>
              {
                item.type === "debit" ? `-${item.amount}` : `${item.amount}`
              }
            </div>
          ))
        } */}
      </div>
    </div>
  )
}

export default Transaction
