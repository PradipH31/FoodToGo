import React from 'react'
import './hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="container">
                <div className="left-col">
                    <p className="subhead">Fresh &amp; tasty food at your convenience</p>
                    <h1>FoodToGo</h1>
                    <div className="hero-cta">
                        <a href="#0" className="primary-cta">Order now!</a>
                    </div>
                </div>
                <img src={process.env.PUBLIC_URL + "/images/brand-icon.svg"} alt="Illustration" className="hero-img"></img>
            </div>
        </section>
    )
}

export default Hero