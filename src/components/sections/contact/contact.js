import React from 'react'
import './contact.css'

const Contact = () => {
    return (
        <section className="contact-section">
            <div className="container">
                <div className="contact-left">
                    <h2>Contact Us</h2>
                    <div className="links">
                        <a href="https://www.facebook.com/Envoc">
                            <img src={process.env.PUBLIC_URL + "/images/facebook.svg"} alt="facebook"></img>
                        </a>
                        <a href="https://twitter.com/envoc">
                            <img src={process.env.PUBLIC_URL + "/images/twitter.svg"} alt="twitter"></img>
                        </a>
                        <a href="https://www.linkedin.com/company/envoc">
                            <img src={process.env.PUBLIC_URL + "/images/linkedin.svg"} alt="linkedin"></img>
                        </a>
                    </div>
                </div>
            </div>
            <div className="contact-right">
                <iframe title="google_map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3437.619733420218!2d-90.46184238456502!3d30.503510481717598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x862722c807869a31%3A0xcc3c43dc4eaa2b3!2s120%20S%20Cypress%20St%20%231%2C%20Hammond%2C%20LA%2070403!5e0!3m2!1sen!2sus!4v1636944172380!5m2!1sen!2sus"
                    width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy"></iframe>
            </div>
        </section>
    )
}

export default Contact