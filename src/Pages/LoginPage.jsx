import InputRounded from '../Components/Input/InputRounded';
import '../Styles/LoginPage.css';

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
                <InputRounded placeholder='Email' />
                <InputRounded placeholder='Password' />
                <button className='primary-button'>Sign In</button>
                <button className='secondary-button'>Forgot Password</button>
                <button className='link-button'>Or Sign up with</button>
            </div>
        </div>
)
}

export default LoginPage;