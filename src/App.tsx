import Navbar from './Components/Navbar/Navbar'
import { useEffect, useState, createContext } from 'react'

import { Box } from '@mui/material'
import SubNavbar from './Components/Navbar/SubNavbar'
import { Route, Routes } from 'react-router-dom'
import Home from './sections/Home'
import Order from './sections/Order/Order'
import MyCart from './sections/Order/Cart/MyCart'
import AddAndPayment from './sections/Order/Payment/AddAndPayment'
import { CartItem } from './Components/Types'
// import MyCart from './Components/Order/Cart/MyCart'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { OrderAndCart } from './sections/Order/Cart/CartAndOrder/OrderAndCartArray'

const defaultValue: CartItem[] = []
type HandleChangeFunction = (event: SelectChangeEvent<number>, id: number) => void
type HandleClickFunction = (id: number) => void
type HandleDeleteAllFunction = () => void

export const UserArray = createContext(defaultValue)
export const UserSubTotal = createContext(0)
export const UserTotalPayable = createContext(0)
export const UserTax = createContext(0)
export const UserDiscount = createContext(0)
export const UserHandleChange = createContext<HandleChangeFunction>(() => {})
export const UserHandleDelete = createContext<HandleClickFunction>(() => {})
export const UserHandleDeleteAll = createContext<HandleDeleteAllFunction>(() => {})

function App() {
  const [cartArr, setCartArr] = useState<CartItem[]>([])
  const [subTotal, setSubTotal] = useState(0)
  const [discount, setDiscount] = useState(0)
  const [tax, setTax] = useState(0)
  let totalPayable = subTotal + tax - discount
  useEffect(() => {
    setCartArr(OrderAndCart.slice())
    totalDiscount()
    totalTax()
  }, [])
  useEffect(() => {
    sumSubTotal()
  }, [cartArr])

  const sumSubTotal = () => {
    const sum = cartArr
      .map((item, ind) => item.amount)
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    setSubTotal(sum)
  }
  const totalDiscount = () => {
    setDiscount(260)
  }
  const totalTax = () => {
    setTax(14)
  }
  const handleChange = (event: SelectChangeEvent<number>, id: number) => {
    const searchCart = cartArr.find(item => item.id === id)
    searchCart ? (searchCart.quantity = Number(event.target.value)) : null
    searchCart ? (searchCart.amount = searchCart.totalAmount * Number(event.target.value)) : null

    sumSubTotal()
    totalDiscount()
    totalTax()
  }
  const handleDelete = (id: number) => {
    setCartArr(cartArr.filter(item => item.id !== id))
  }
  const handleDeleteAll = () => {
    setCartArr([])
  }

  return (
    <Box sx={{ background: '#f8f8f8', height: '100vh', overflowX: 'hidden' }}>
      <Navbar />
      <SubNavbar />

      <Routes>
        <Route index element={<Home />} />
        <Route path="Order" element={<Order />} />

        <Route
          path="MyCart"
          element={
            <>
              <UserArray.Provider value={cartArr}>
                <UserTotalPayable.Provider value={totalPayable}>
                  <UserSubTotal.Provider value={subTotal}>
                    <UserTax.Provider value={tax}>
                      <UserDiscount.Provider value={discount}>
                        <UserHandleChange.Provider value={handleChange}>
                          <UserHandleDelete.Provider value={handleDelete}>
                            <UserHandleDeleteAll.Provider value={handleDeleteAll}>
                              <MyCart />
                            </UserHandleDeleteAll.Provider>
                          </UserHandleDelete.Provider>
                        </UserHandleChange.Provider>
                      </UserDiscount.Provider>
                    </UserTax.Provider>
                  </UserSubTotal.Provider>
                </UserTotalPayable.Provider>
              </UserArray.Provider>
            </>
          }
        />

        <Route
          path="AddPayment"
          element={
            <>
              <UserTotalPayable.Provider value={totalPayable}>
                <UserSubTotal.Provider value={subTotal}>
                  <UserTax.Provider value={tax}>
                    <UserDiscount.Provider value={discount}>
                      <AddAndPayment />
                    </UserDiscount.Provider>
                  </UserTax.Provider>
                </UserSubTotal.Provider>
              </UserTotalPayable.Provider>
            </>
          }
        />
      </Routes>
    </Box>
  )
}

export default App
