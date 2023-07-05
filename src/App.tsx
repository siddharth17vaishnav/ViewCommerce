import { Routes, Route } from 'react-router-dom'
import Home from './sections/Home'
import Footer from './components/Footer/Footer'
import Card from './components/Card/Card'
function App() {
  return (
    <>
     <div>
     <h1 className="title">Recommended items</h1>
      <div className="card-list">
        <Card
          image={require('./assets/B.jpg')}
          price={600}
          details="Lorem ipsum dolor sit amet, consectetuer"
        />
        <Card
          image={require('./assets/ash.jpg')}
          price={500}
          details="Lorem ipsum dolor sit amet, consectetuer"
        />
        <Card
          image={require('./assets/C.jpg')}
          price={400}
          details="Lorem ipsum dolor sit amet, consectetuer"
        />
        <Card
          image={require('./assets/D.jpg')}
          price={1900}
          details="Lorem ipsum dolor sit amet, consectetuer"
        />
        <Card
          image={require('./assets/E.jpg')}
          price={1000}
          details="Lorem ipsum dolor sit amet, consectetuer"
        />
        <Card
          image={require('./assets/F.jpg')}
          price={1600}
          details="Lorem ipsum dolor sit amet, consectetuer"
        />
        <Card
          image={require('./assets/G.jpg')}
          price={800}
          details="Lorem ipsum dolor sit amet, consectetuer"
        />
        <Card
          image={require('./assets/H.jpg')}
          price={600}
          details="Lorem ipsum dolor sit amet, consectetuer"
        />
        <Card
          image={require('./assets/I.jpg')}
          price={650}
          details="Lorem ipsum dolor sit amet, consectetuer"
        />
        <Card
          image={require('./assets/jug.jpg')}
          price={950}
          details="Lorem ipsum dolor sit amet, consectetuer"
        />
      </div>
    </div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
     
      
      <Footer/>
    </>
  )
}

export default App
