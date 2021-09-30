import React from 'react'
import {Link} from 'react-router-dom'
import {Button} from './Button'
import './Footer.css'


function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
             <p className="footer-unscription-heading" >
                 Join to receive newsletters to know our deals
                 </p>  
                 <p className="footer-sunscription-text">
                     You can unsubscribe at any time
                 </p>
                 <div className="input-areas">
                     <form>
                         <input type="email" name="email"
                          placeholder="Your Email" className="footer-input"/>
                          <Button buttonStyle="btn--outline">Subscribe</Button>
                    </form>
                 </div>
            </section> 
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to='/sign-up' >how it works</Link>
                        <Link to='/' >Testimonials</Link>
                        <Link to='/' >Careers</Link>
                        <Link to='/' >Investors</Link>
                        <Link to='/' >Terms of Service</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Videos</h2>
                        <Link to='/sign-up' >Videos</Link>
                        <Link to='/' >Youtube</Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Media</h2>
                        <Link to='/sign-up' >Facebook</Link>
                        <Link to='/' >Twitter</Link>
                        <Link to='/' >Linkedin</Link>
                        <Link to='/' >Instagram</Link>
                        
                    </div>
                    <div className="footer-link-items">
                        <h2>contact us</h2>
                        <Link to='/sign-up' >Contact</Link>
                        <Link to='/' >Support</Link>
                        
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to='/' className="social-logo">
                        ELITE INSTITUTION <i className="fas fa-book book"/>
                        </Link>
                    </div>
                    {/* <small className="website-rights">MANAV</small> */}
                    <div className="social-icons">
                        <Link to='/' className="social-icons-link facebook"
                         target="_blank"
                         aria-label="Facebook">
                            <i className="fab fa-facebook-f"></i>
                        </Link>

                        <Link to='/' className="social-icons-link instagram"
                         target="_blank"
                         aria-label="Instagram">
                            <i className="fab fa-instagram"></i>
                        </Link>

                        <Link to='/' className="social-icons-link twitter"
                         target="_blank"
                         aria-label="Twitter">
                            <i className="fab fa-twitter"></i>
                        </Link>

                        <Link to='/' className="social-icons-link linkedIn"
                         target="_blank"
                         aria-label="LinkedIn">
                            <i className="fab fa-linkedin"></i>
                        </Link>
                    </div>        
                </div>    
            </section>
        </div>
    );
}

export default Footer
