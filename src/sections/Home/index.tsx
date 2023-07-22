import CardSwiper from '../../Components/Cards/CardSwiper'
import Cards from '../../Components/Cards/Cards'
import PhoneCards from '../../Components/Cards/PhoneCards'
import Hero from '../../Components/Hero'
import CardDetails from '../../Components/Cards/CardDetails'
import { Box, Button } from '@mui/material'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <>
      <Hero />
      <Cards cards={CardDetails.cards} images={CardDetails.images} />
      <PhoneCards />
      <CardSwiper />
    </>
  )
}

export default Home
