import './header.css'
import React from 'react'

const Header = () => {
    return (
        <div className="navbar">
            <div className="container">
                <img id="mobile-cta" width="30px" height="30px" className="mobile-menu" src={process.env.PUBLIC_URL + "/images/menu.svg"}
                    alt="Open navigation"></img>
                <a href="#0" className="logo">Food<span>ToGo</span></a>
                <nav>
                    <img src={process.env.PUBLIC_URL + "/images/cancel.svg"} className="mobile-menu-exit" id="mobile-exit" alt="Close navigation"></img>
                    <ul className="primary-nav">
                        <li className="current">
                            <a data-text="Home" href="./index.html">Home</a>
                        </li>
                        <li>
                            <a href="#0" data-text="Menu">Menu</a>
                        </li>
                        <li>
                            <a href="#0" data-text="About Us">About Us</a>
                        </li>
                    </ul>
                    <ul className="secondary">
                        <li><a href="#0" data-text="Login">Login</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header