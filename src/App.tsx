import Navbar from './Components/Navbar'
import { Box } from '@mui/material'
import Hero from './Components/Hero'
import SubNavbar from './Components/SubNavbar'
import Cards from './Components/Cards/Cards'
import PhoneCards from './Components/Cards/PhoneCards'
import CardDetails from './Components/Cards/CardDetails'
import CardSwiper from './Components/Cards/CardSwiper'

function App() {
  console.log(CardDetails)
  return (
    <Box sx={{ background: '#f8f8f8', height: '100vh', overflowX: 'hidden' }}>
      <Navbar />
      <SubNavbar />
      <Hero />
      <Cards cards={CardDetails.cards} images={CardDetails.images} />
      <PhoneCards />
      {/* <CardSwiper /> */}
    </Box>
  )
}

export default App
