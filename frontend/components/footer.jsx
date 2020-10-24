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
                    <li>Contact Us</li>
                    <li>FAQs</li>
                    <li>Delivery and returns</li>
                    <li>Track your order</li>
                    <li>Check gift card balance</li>
                    <li>Terms and conditions</li>
                    <li>Accessibility</li>
                </ul>
            </div>
            <div className='about-footer'>
                <div className='footer-title'>About</div>
                <ul>
                    <li>Our Story</li>
                    <li>Careers</li>
                    <li>Foundation</li>
                    <li>Press</li>
                    <li>Corporate gifts</li>
                    <li>Regulatory policies</li>
                    <li>Privacy policy</li>
                    <li>Sustainability</li>
                </ul>
            </div>
            <div className='social'>
                <div className='footer-title'>Social Media</div>
                <ul>
                    <a href="https://github.com/ellenahs808" className='footer-links'><li>Github <i className="fab fa-github"></i></li></a>
                    <a href="https://www.linkedin.com/in/shanelle-valencia/" className='footer-links'><li>LinkedIn <i className="fab fa-linkedin"></i></li></a>
                    <a href="https://angel.co/u/shanelle-valencia" className='footer-links'><li>AngelList <i className="fab fa-angellist"></i></li></a>
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




