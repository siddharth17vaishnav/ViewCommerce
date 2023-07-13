import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CardList from '../../components/card/Card';
import Footer from '../../components/Footer/Footer';
import Signin from '../../components/Page/Signin';
import Login from '../../components/Page/Login';
import ForgotPassword from '../../components/Page/Forgotpassword';
import Product1 from '../../components/products/product1';

const Home = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/products/product1" element={<Product1 />} />
          <Route path="/" element={<HomeContent />} />
        </Routes>
      </div>
    </Router>
  );
}

const HomeContent = () => {
  return (
    <div>
      <ForgotPassword />
      <Login />
      <Signin />
      <CardList />
      <Footer />
    </div>
  );
}

export default Home;
