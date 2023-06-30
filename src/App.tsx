import { Routes, Route } from 'react-router-dom'
import Home from './sections/Home'
import Footer from './components/Footer/Footer'
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
