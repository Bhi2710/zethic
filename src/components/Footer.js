import React from 'react'
import '../css/Footer.css';
import insta from '../assets/instagram.png';
import fb from '../assets/facebook.png'

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='top-footer-container'>
        <div>
          <h2>Discover</h2>
          <h2>Plots</h2><br/>
          <p>Loreum ispum is the duummy text</p>
        </div>
        <div className='right-footer-container'>
          <div>
            <h3>Company</h3><br/>
            <p>Contact</p>
          </div>
          <div>
            <h3>Who we help</h3><br/>
            <p>Customers</p><br/>
            <p>Brokers</p><br/>
            <p>Lenders</p>
          </div>
          <div className='footer-icons'>
            <h3>Follow us</h3><br/>
            <img src={fb} alt='load' width="20px" height="20px" />&emsp;
            <label>Facebook</label><br/><br/>
            <img src={insta} alt='load' width="20px" height="20px" />&emsp;
            <label>Instagram</label><br/>
          </div>
        </div>
      </div>
      <div className='footer-bottom'>
          <div>
            <p>Copyright @ 2023 City Plots</p>
          </div>
          <div>
            <p>Privacy Policy &nbsp; . &nbsp; Privacy Colllection Notice &nbsp; . &nbsp; Terms</p>
          </div>
        </div>
    </div>
  )
}

export default Footer;