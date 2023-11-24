import React from "react";

import possibilityImage from "../../assets/possibility.png";
import "./possibility.css";

const Possibility = () => {
    return (
        <div className='gpt__possibility section__padding' id='possibility'>
            <div className='gpt__possibility-image'>
                <img src={possibilityImage} alt='possibility' />
            </div>
            <div className='gpt__possibility-content'>
                <h4>Request Early Access to Get Started</h4>
                <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
                <p>
                    Immerse yourself in the limitless possibilities of ChatGPT. Whether you're building interactive educational platforms, dynamic knowledge bases, or innovative applications, this language model is your key to unlocking a world of
                    creative and practical potential.
                </p>
                <h4>Request Early Access to Get Started</h4>
            </div>
        </div>
    );
};

export default Possibility;
