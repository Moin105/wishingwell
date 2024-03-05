import logo from './logo.svg';
import './App.css';
import PricePage from './Pages/PricePage';
import PriceDetailPage from './Pages/PriceDetailPage';
import WelcomePage from './Pages/WelcomePage'
import LoginPage from './Pages/LoginPage';
function App() {
  return (
    <div className="main">
          {/* <PricePage/> */}
          <LoginPage />
          {/* <PriceDetailPage/> */}
    </div>
  );
}

export default App;
