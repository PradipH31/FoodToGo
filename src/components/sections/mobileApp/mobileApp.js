import React from 'react'
import './mobileApp.css'

const MobileApp = () => {
    return (
        <section className="mobile-app">
            <div className="container">
                Order directly from our app
                <img src={process.env.PUBLIC_URL + "/images/store.svg"} alt="play store or app store"></img>
            </div>
        </section>
    )
}

export default MobileApp