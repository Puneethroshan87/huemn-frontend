import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <div className='footer'>
        <div className="logo">
            <h1>SPR</h1>
        </div>
        <div className="EXPLORE">
            <h5 className='explore-h5'>Explore</h5>
            <a href="">About US</a>
            <a href="">Contact</a>
            <a href="">Shop</a>
            <a href="">Services</a>
        </div>
        <div className="Follow">
            <h5 className='follow-h5'>Follow US</h5>
            <a href="">Email</a>
            <a href="">Facebook</a>
            <a href="">Instagram</a>
        </div>
        <div className="signup">
            <p>Sign up with your email address to receive news and updates.</p>
            <input type="email" name="" id="" placeholder='Email Address'  className='email'/>
            <button className="signup-bt">Sign up</button>
        </div>
    </div>
  )
}

export default Footer