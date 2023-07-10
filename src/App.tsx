
import { Routes, Route } from 'react-router-dom'
import Home from './sections/Home'
import Signin from './components/Page/Signin'
import Login from './components/Page/Login'
import  Forgotpassword from './components/Page/ForgotPassword'
function App() {
  return (
    <div>
   <Forgotpassword />
      <Login />
      <Signin />
       <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      
    </div>
  )
}

export default App
