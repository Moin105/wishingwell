import logo from './logo.svg';
import './App.css';
import PricePage from './Pages/PricePage';
import PriceDetailPage from './Pages/PriceDetailPage';
import WelcomePage from './Pages/WelcomePage'
import LoginPage from './Pages/LoginPage';
import PaymentConfirmPage from './Pages/PaymentConfirmPage';
import CheckoutPage from './Pages/CheckoutPage';
import CreateAccountPage from './Pages/CreateAccountPage';
function App() {
  return (
    <div className="main">
          {/* <PricePage/> */}
          {/* <LoginPage /> */}
          {/* <PriceDetailPage/> */}
          {/* <PaymentConfirmPage /> */}
          {/* <CheckoutPage /> */}
          <CreateAccountPage />
    </div>
  );
}

export default App;
