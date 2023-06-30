import { Routes, Route } from 'react-router-dom'
import Home from './sections/Home'
import Footer from './components/Footer/Footer'
import Card from './components/Card/Card'


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer/>
      <Card />
    </>
  )
}

export default App
