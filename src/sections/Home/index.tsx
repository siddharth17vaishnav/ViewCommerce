import CardSwiper from '../../Components/Cards/CardSwiper'
import Cards from '../../Components/Cards/Cards'
import PhoneCards from '../../Components/Cards/PhoneCards'
import Hero from '../../Components/Hero'
import { images, mycards } from '../../Components/Cards/CardDetails'
import { Box, Button } from '@mui/material'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      <Hero />
      <Cards cards={mycards} images={images} />
      <PhoneCards />
      <CardSwiper />
    </Box>
  )
}

export default Home
