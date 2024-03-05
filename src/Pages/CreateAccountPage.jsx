import CustomInput from '../Components/Input/CustomInput';
import '../Styles/CreateAccountPage.css';
import { IoMdArrowBack } from "react-icons/io";
import { BiHide } from "react-icons/bi";
import googleIcon from '../images/google.jpeg';
function CreateAccountPage() {
    return (
        <div className="container create-account-page">
            <div className="header">
                <IoMdArrowBack className='back-icon' />
            </div>
            <div className="title-wrapper">
                <h2>SendWish</h2>
            </div>
            <div className='wrapper'>
                <h1 className='title'>Create An Account</h1>
                <p className='quote'>Let's get started by filling out the form below.</p>
                <form>
                    <CustomInput type="email" placeholder="Email" />
                    <CustomInput type="text" placeholder="Name" />
                    <div className='input-wrapper'>
                        <CustomInput type="password" placeholder="Password" />
                        <BiHide className='float-icon' />
                    </div>
                    <button className='custom-button'>Create Account</button>
                </form>
                <button className='google-button' >
                    <img src={googleIcon} className='google-icon' alt="google icon" />
                    Sign in with Google
                </button>
                <div className='sign-in-text'>
                    Already have an account? <button className='link-button'>Login</button>
                </div>
            </div>
        </div>
    )
}

export default CreateAccountPage;