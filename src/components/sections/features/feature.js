import React from 'react'
import './feature.css'

function Feature() {
    return (
        <section className="features-section">
            <div className="container">
                <ul className="features-list">
                    <li>
                        <div className="img-container">
                            <img src={process.env.PUBLIC_URL + "/images/fast.svg"} alt="fast-delivery"></img>
                        </div>
                        <div className="feature-text">
                            Fastest Delivery
                        </div>
                    </li>
                    <li>
                        <div className="img-container">
                            <img src={process.env.PUBLIC_URL + "/images/customize.svg"} alt="customizable"></img>
                        </div>
                        <div className="feature-text">
                            Customize your orders
                        </div>

                    </li>
                    <li>
                        <div className="img-container">
                            <img src={process.env.PUBLIC_URL + "/images/fresh.svg"} alt="fresh"></img>
                        </div>
                        <div className="feature-text">
                            Fresh products
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Feature