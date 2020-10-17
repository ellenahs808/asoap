import React from 'react';
import { Link } from 'react-router-dom';


const Footer = props => (
    <div>
        <div className='display-footer'>
            <div className='display-footer-info'>
                <div className='display-title'>Cleansing, nourishing hand care</div>
                <div className='display-detail'>Washing hands with vigour and rigour is an essential act. Just like the uneasy mind, hard-working hands deserve attentive nurturing.</div>
                <div className='display-btn-div'><Link to='/body' className='display-btn'>Explore Hand Care</Link></div>
            </div>
            <div className='display-footer-img'>
                <img src={window.images.hands} width='100%'/>
            </div>
        </div>

        <div className='quote-footer'>
            <div className='quote'>‘Rose, O pure contradiction…’</div>
            <div className='quote-by'>Rainer Maria Rilke</div>
        </div>


        <div className='main-footer'>
            <div className='subscription'>
                <div className='footer-title'>Subscribe</div>
                <input type="text" placeholder="Email address" className='email-input'/>
                <p className='subscription-detail'>I would like to receive communications about Aesop products, services, stores, events and matters of cultural interest.</p>
            </div>
            <div className='orders-footer'>
                <div className='footer-title'>Orders and support</div>
                <ul>
                    <Link to='/' className='footer-links'><li>Contact Us</li></Link>
                    <Link to='/' className='footer-links'><li>FAQs</li></Link>
                    <Link to='/' className='footer-links'><li>Delivery and returns</li></Link>
                    <Link to='/' className='footer-links'><li>Track your order</li></Link>
                    <Link to='/' className='footer-links'><li>Check gift card balance</li></Link>
                    <Link to='/' className='footer-links'><li>Terms and conditions</li></Link>
                    <Link to='/' className='footer-links'><li>Accessibility</li></Link>
                </ul>
            </div>
            <div className='about-footer'>
                <div className='footer-title'>About</div>
                <ul>
                    <Link to='/' className='footer-links'><li>Our Story</li></Link>
                    <Link to='/' className='footer-links'><li>Careers</li></Link>
                    <Link to='/' className='footer-links'><li>Foundation</li></Link>
                    <Link to='/' className='footer-links'><li>Press</li></Link>
                    <Link to='/' className='footer-links'><li>Corporate gifts</li></Link>
                    <Link to='/' className='footer-links'><li>Regulatory policies</li></Link>
                    <Link to='/' className='footer-links'><li>Privacy policy</li></Link>
                    <Link to='/' className='footer-links'><li>Sustainability</li></Link>
                </ul>
            </div>
            <div className='social'>
                <div className='footer-title'>Social Media</div>
                <ul>
                    <Link className='footer-links'><li>Instagram  <i className="fab fa-instagram"></i></li></Link>
                    <Link className='footer-links'><li>Twitter  <i className="fab fa-twitter-square"></i></li></Link>
                    <Link className='footer-links'><li>LinkedIn <i className="fab fa-linkedin"></i></li></Link>
                </ul>
            </div>
        </div>
        <div className='base-footer'>
            <h2 className='base-footer-info'>©Asõap</h2>
            <h2 className='base-footer-info'>United States</h2>
        </div>
    </div>
);



export default Footer;




