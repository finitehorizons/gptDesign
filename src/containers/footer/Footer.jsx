import React from "react";

import gptLogo from "../../assets/logo.svg";

import "./footer.css";
const Footer = () => {
    return (
        <div className='gpt__footer section__padding'>
            <div className='gpt__footer-header'>
                <h1 className='gradient__text'>Take the leap into the future with us</h1>
            </div>
            <div className='gpt__footer-button'>
                <p>Request Early Access</p>
            </div>
            <div className='gpt__footer-links'>
                <div className='gpt__footer-links_logo'>
                    <img src={gptLogo} alt='gptlogo' />
                    <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
                </div>
                <div className='gpt__footer-links_div'>
                    <h4>Links</h4>
                    <p>Getting Started</p>
                    <p>Social Media</p>
                    <p>Documentation</p>
                    <p>Community Forum</p>
                </div>
                <div className='gpt__footer-links_div'>
                    <h4>Company</h4>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                    <p>Contact</p>
                </div>
                <div className='gpt__footer-links_div'>
                    <h4>Get in touch</h4>
                    <p>Crechterwoord K12 182 DK Alknjkcb</p>
                    <p>085-132567</p>
                    <p>info@payme.net</p>
                </div>
            </div>{" "}
            <div className='gpt__footer-copyright'>
                <p>© 2023 OpenAI. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;
