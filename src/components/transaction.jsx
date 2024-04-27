import React from 'react'
import { BsPlus } from 'react-icons/bs'
import { RiNetflixFill } from "react-icons/ri";
import { GiShoppingBag } from "react-icons/gi";
import { BsTaxiFrontFill } from "react-icons/bs";
import moment from 'moment';
import { Select } from '@chakra-ui/react'
import { MdArrowForwardIos } from "react-icons/md";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Button,
} from '@chakra-ui/react'

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
  const [date,setDate] = React.useState(moment());
  const [ hide, setHide ] = React.useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)
  const [ transactionType, setTransactionType ] = React.useState("")
  const [ amount, setAmount ] = React.useState(0)
  const [ transaction, setTransaction ] = React.useState([
    { name : "Taxi", amount: 9.20, type : "debit", date : "01:21 PM" },
    { name : "Shopping", amount: 142.00, type : "debit", date : "11:15 AM" },
    { name : "Netflix", amount: 24.90, type : "debit", date : "01:21 PM" },
  ])

  
  const addTransaction = (transaction) => {
    const newDate = moment(date).add(1, 'day');
    const newTransaction  = {
      name : transactionType,
      amount : parseFloat(amount),
      type : "debit",
      date : newDate.format('hh:MM A')
    }
    setTransaction(prevTransactions => [...prevTransactions, newTransaction])
  }
  

  return (
    <div className='flex flex-col gap-y-5 mt-5'>
      <div className="flex flex-row items-center justify-between px-2">
        <h2 className='text-veryDeepBlue font-semibold text-lg'>Transaction</h2>
        {/* <button className='p-2 bg-[#FF392B] rounded-xl focus:outline-none'>
        </button> */}
        <Button onClick={onOpen} backgroundColor={"#FF392B"} _hover={{ bg: '#ff392b' }}>
          <BsPlus size={20}  className='text-white fill-white'/>
        </Button>
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent top={"100px"}>
            <ModalHeader>Make a Transaction</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Transaction</FormLabel>
                <Select 
                placeholder='Select option'
                onChange={(e)=>setTransactionType(e.target.value)}
                >
                  <option value='Taxi'>Taxi</option>
                  <option value='Shopping'>Shopping</option>
                  <option value='Netflix'>Netflix</option>
                </Select>
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Amount</FormLabel>
                <Input 
                placeholder='100,000' 
                type='number'
                onChange={(e)=>setAmount(e.target.value)}
                />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button backgroundColor={"#3326AE"} color={"#ffffff"} mr={3} onClick={()=>setTimeout(()=>{addTransaction({ transactionType, amount }); onClose()},1000)}>
                Pay
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
      <div className='w-full'>
        <TableContainer className='overflow-auto'>
          <Table variant='simple'>
            <Tbody className='space-y-3' border={"none"}>
              {
                transaction && transaction.slice(0, hide ? transaction.length : 4).map(item=>(
                  <Tr className='' border={"none"}>
                    <Td className='!p-3'>
                      <div className='p-3 rounded-lg bg-white w-fit hit'>
                        {
                          item.name === "Taxi" ? <BsTaxiFrontFill className='' color='#FF0000'/> :
                          item.name === "Shopping" ? <GiShoppingBag color='#FF0000'/> :
                          item.name === "Netflix" ? <RiNetflixFill color='#FF0000'/> : ""
                        }
                      </div>
                    </Td>
                    <Td className='!p-3'>
                      <h2 className='text-sm text-[#000013] font-semibold'>{ item.name }</h2>
                      <p className='text-xs text-[#A49EDB]'>{ item.date }</p>
                    </Td>
                    <Td className='text-xs !p-3 text-[#000013] font-semibold'>
                      {
                        item.type === "debit" ? `-$${item.amount.toFixed(2)}` : `${item.amount.toFixed(2)}`
                      }
                    </Td>
                  </Tr>
                ))
              }
            </Tbody>
          </Table>
          <div className='flex w-full mt-4 relative justify-end px-3'>
            <button 
            onClick={()=>setHide(prev => !prev)}
            className='flex items-center group'>
              <span className='font-medium'>
                {
                  hide ? "Hide" : "See all Transactions"
                }
              </span>
              <MdArrowForwardIos size={16} color='#FF0000' className='ml-2 group-hover:translate-x-1 transition-transform duration-200'/>
            </button>
          </div>
        </TableContainer>
      </div>
    </div>
  )
}

export default Transaction
