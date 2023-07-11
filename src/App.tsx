import Navbar from './Components/Navbar'
import { Box } from '@mui/material'
import Hero from './Components/Hero'
import SubNavbar from './Components/SubNavbar'
import Cards from './Components/Cards/Cards'

function App() {
  return (
    <Box sx={{ background: '#f8f8f8', height: '100vh', overflowX: 'hidden' }}>
      <Navbar />
      <SubNavbar />
      <Hero />
      <Cards />
    </Box>
  )
}

export default App
