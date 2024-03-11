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
function App() {
  return (
    <div className="main">
    <Routes >
          {/* <Route path="/price-page" element={<PricePage/>}/>  */}
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/price-page" element={<PriceDetailPage/>}/>
          <Route path="/payment-confirm" element={<PaymentConfirmPage />}/>
          <Route path="/checkout" element={<CheckoutPage />}/>
          <Route path="/signup" element={<CreateAccountPage />}/>
          <Route path="/" element={<WelcomePage/>}/>
          <Route path='/form' element={<Form />}/>
    </Routes>
    </div>
  );
}

export default App;
