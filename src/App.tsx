import Navbar from './Components/Navbar/Navbar'
import { Box } from '@mui/material'
import SubNavbar from './Components/Navbar/SubNavbar'
import { Route, Routes } from 'react-router-dom'
import Home from './sections/Home'
import Order from './sections/Order/Order'

function App() {
  return (
    <Box sx={{ background: '#f8f8f8', height: '100vh', overflowX: 'hidden' }}>
      <Navbar />
      <SubNavbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="Order" element={<Order />} />
      </Routes>
    </Box>
  )
}

export default App
