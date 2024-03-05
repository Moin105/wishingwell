import '../Styles/WelcomePage.css'

function WelcomePage() {
    return (
        <div className="container">
            <div className="banner-image"></div>
            <div className='welcome-text'>
                <span> Welcome to SendWish</span>
            </div>
            <div className='desc-text'>
                <span>Gifting made easy.</span>
                <span>Perfect for gifting for all occasions.</span>

            </div>
            <div className='form-wrapper'>
            <button className='primary-button'>
                   Next
            </button>
            <button className='secondary-button'>
                   Skip
            </button>
            </div>

        </div>
    )
}

export default WelcomePage;