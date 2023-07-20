import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CardList from '../../components/card/Card';
import Footer from '../../components/Footer/Footer';
import Signin from '../../components/Page/Signin';
import Login from '../../components/Page/Login';
import ForgotPassword from '../../components/Page/Forgotpassword';
import P1 from '../../components/products/P1';
import LoginCard from '../../components/admin/Logincard';
import Signincard from '../../components/admin/Signincard';
import Signindetail from '../../components/admin/Siginindetails';
import Verifyemail from '../../components/admin/Verifyemail';
import Businessdetail from '../../components/admin/businessdetail';
import Congrats from '../../components/admin/Congrats';
import List1 from '../../components/list/List1';


const Home = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="/products/P1" element={<P1 />} />
        </Routes>
      </div>
    
      <List1 />
      <Congrats />
      <Businessdetail />
      <Verifyemail />
      <Signindetail />
      <Signincard />
      <LoginCard />
      <ForgotPassword />
      <Login />
      <Signin />
      <CardList />
      <Footer />
    </>
  );
}

export default Home;




