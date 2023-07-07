import Card from './components/card/Card'
import Footer from './components/Footer/Footer'
import { Routes, Route } from 'react-router-dom'
import Home from './sections/Home'
function App() {
  return (
    <div>
       <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Card />
      <Footer />
    </div>
  )
}

export default App
