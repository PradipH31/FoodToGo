import React from 'react'
import './feature.css'

function Feature() {
    return (
        <section class="features-section">
            <div class="container">
                <ul class="features-list">
                    <li>
                        <div class="img-container">
                            <img src={process.env.PUBLIC_URL + "/images/fast.svg"} alt="fast-delivery"></img>
                        </div>
                        <div class="feature-text">
                            Fastest Delivery
                        </div>
                    </li>
                    <li>
                        <div class="img-container">
                            <img src={process.env.PUBLIC_URL + "/images/customize.svg"} alt="customizable"></img>
                        </div>
                        <div class="feature-text">
                            Customize your orders
                        </div>

                    </li>
                    <li>
                        <div class="img-container">
                            <img src={process.env.PUBLIC_URL + "/images/fresh.svg"} alt="fresh"></img>
                        </div>
                        <div class="feature-text">
                            Fresh products
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Feature