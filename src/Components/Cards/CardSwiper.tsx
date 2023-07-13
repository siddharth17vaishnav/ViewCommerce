import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import Cards from './Cards'
import CardDetails from './CardDetails'

// interface Card {
//   cardNo: number
//   // shadow: string;
//   color: string
//   img: string
//   Ellipse: Array<string>
//   text: string
//   text2: string
//   amount: string
// }
const CardSwiper = () => {
  //   const [newArray, setNewArray] = useState<Array<Card>>([])
  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       // Get the next three elements from the cardSwiper array
  //       const nextThree = CardDetails.cardSwiper.splice(0, 3)
  //       // Add the nextThree elements to the newArray
  //       setNewArray(prevArray => [...prevArray, ...nextThree])
  //       // Stop the interval if there are no more elements in the cardSwiper array
  //       if (CardDetails.cardSwiper.length === 0) {
  //         clearInterval(interval)
  //       }
  //     }, 3000)
  //     return () => {
  //       // Clean up the interval on component unmount
  //       clearInterval(interval)
  //     }
  //   }, [])
  //   return <Box sx={{ mb: '108px' }}>{<Cards cards={CardDetails.SendThreeCards()} />}</Box>
}
export default CardSwiper
