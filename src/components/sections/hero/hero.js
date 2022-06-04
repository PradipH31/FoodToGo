import React from 'react'
import './hero.css';

const Hero = () => {
    return (
        <section class="hero">
            <div class="container">
                <div class="left-col">
                    <p class="subhead">Fresh &amp; tasty food at your convenience</p>
                    <h1>FoodToGo</h1>
                    <div class="hero-cta">
                        <a href="#0" class="primary-cta">Order now!</a>
                    </div>
                </div>
                <img src={process.env.PUBLIC_URL + "/images/brand-icon.svg"} alt="Illustration" class="hero-img"></img>
            </div>
        </section>
    )
}

export default Hero