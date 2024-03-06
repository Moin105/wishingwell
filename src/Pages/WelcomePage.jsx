import BrickLayout from '../Components/BrickLayout/BrickLayout';
import '../Styles/WelcomePage.css'
import { Link } from 'react-router-dom';
function WelcomePage() {
    return (
        <div className="container">
            <div >
                <BrickLayout/>
            </div>
            <div className='welcome-page'>
            <div className='welcome-text'>
                <span> Welcome to SendWish</span>
            </div>
            <div className='desc-text'>
                <span>Gifting made easy.</span>
                <span>Perfect for gifting for all occasions.</span>

            </div>
            <div className='form-wrapper'>
          <Link to="/signup">
          <button className='primary-button'>
                   Next
            </button>
          </Link> 
          <Link  to="/login">
            <button className='secondary-button'>
                   Skip
            </button>
          </Link>
            </div>
          </div>
        </div>
    )
}

export default WelcomePage;