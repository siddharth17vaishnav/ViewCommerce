import Navbar from './Components/Navbar/Navbar'
import { useEffect, useState, createContext } from 'react'

import { Box } from '@mui/material'
import SubNavbar from './Components/Navbar/SubNavbar'
import { Route, Routes } from 'react-router-dom'
import Home from './sections/Home'
import Order from './sections/Order/Order'
import MyCart from './sections/Order/Cart/MyCart'
import AddAndPayment from './sections/Order/Payment/AddAndPayment'

function App() {
  return (
    <Box sx={{ background: '#f8f8f8', height: '100vh', overflowX: 'hidden' }}>
      <Navbar />
      <SubNavbar />

      <Routes>
        <Route index element={<Home />} />
        <Route path="Order" element={<Order />} />

        <Route path="MyCart" element={<MyCart />} />

        <Route path="AddPayment" element={<AddAndPayment />} />
      </Routes>
    </Box>
  )
}

export default App
