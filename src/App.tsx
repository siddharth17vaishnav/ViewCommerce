import Navbar from './Components/Navbar'
import { Box } from '@mui/material'
import Hero from './Components/Hero'
import SubNavbar from './Components/SubNavbar'

function App() {
  return (
    <Box sx={{ background: '#f8f8f8', height: '100vh', overflowX: 'hidden' }}>
      <Navbar />
      <SubNavbar />
      <Hero />
    </Box>
  )
}

export default App
