
import { Routes, Route } from 'react-router-dom'
import Home from './sections/Home'
import Order from './sections/Order/Order'
import MyCart from './sections/Order/Cart/MyCart'
import AddAndPayment from './sections/Order/Payment/AddAndPayment'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Order" element={<Order />} />

        <Route path="MyCart" element={<MyCart />} />

        <Route path="AddPayment" element={<AddAndPayment />} />
      </Routes>
    </>
  )
}

export default App
