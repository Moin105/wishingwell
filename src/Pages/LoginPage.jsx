import InputRounded from '../Components/Input/InputRounded';
import '../Styles/LoginPage.css';
import { FaGoogle, FaApple } from "react-icons/fa";
import { BiHide } from "react-icons/bi";

function LoginPage() {
return (
        <div className="container login-page">
            <div className="header">
                <h2>SendWish</h2>
            </div>
            <div className='buttons-wrapper'>
                <h1 className='sign-in'>Sign In </h1>
                <h1 className='sign-up'>Sign Up</h1>
            </div>
            <p className='quote'>Let's get started by filling out the form below.</p>
            <div className='form-wrapper'>
                <InputRounded type="email" placeholder='Email' />
                <div className='input-wrapper'>
                    <InputRounded type="placeholder" placeholder='Password' />
                    <BiHide className='float-icon' />
                </div>
                <button className='primary-button'>Sign In</button>
                <button className='secondary-button'>Forgot Password</button>
                <button className='link-button'>Or Sign up with</button>
                <button className='login-with-btn'>
                    <FaGoogle className='icon' />
                    Continue with Google
                </button>
                <button className='login-with-btn'>
                    <FaApple className='icon' />
                    Continue with Apple
                </button>
            </div>
        </div>
)
}

export default LoginPage;