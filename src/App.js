import logo from './logo.svg';
import './App.css';
import PricePage from './Pages/PricePage';
import PriceDetailPage from './Pages/PriceDetailPage';
import WelcomePage from './Pages/WelcomePage'
import LoginPage from './Pages/LoginPage';
import PaymentConfirmPage from './Pages/PaymentConfirmPage';
import CheckoutPage from './Pages/CheckoutPage';
import { Routes, Route } from 'react-router-dom';
import CreateAccountPage from './Pages/CreateAccountPage';
import Form from './Pages/Form';
import HomePage from './Pages/HomePage';
import GiftDetail from './Pages/GiftDetail';
import UpdateAccount from './Pages/UpdateAccount';
import UpdatePassword from './Pages/UpdatePassword';
function App() {
  return (
    <div className="main">
    <Routes >
          {/* <Route path="/price-page" element={<PricePage/>}/>  */}
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/price-page" element={<PriceDetailPage/>}/>
          <Route path="/homepage" element ={<HomePage/>}/>
          <Route path="/payment-confirm" element={<PaymentConfirmPage />}/>
          <Route path="/checkout" element={<CheckoutPage />}/>
          <Route path="/signup" element={<CreateAccountPage />}/>
          <Route path="/" element={<WelcomePage/>}/>
          <Route path='/create-event' element={<Form />}/>
          <Route path='/gift-detail' element={<GiftDetail />}/>
          <Route path='/update-account' element={<UpdateAccount />}/>
          
          <Route path='/update-password' element={<UpdatePassword />}/>
          {/* <Route path="*">"404 Not Found"</Route> */}

    </Routes>
    </div>
  );
}

export default App;
