import React from "react";

import "./features.css";
import { Feature } from "../../components";

const featuresData = [
    {
        title: "Natural Chats",
        text: "ChatGPT engages in natural, flowing conversations, adapting to your input for a chat experience that feels like talking to a friend.",
    },
    {
        title: "Your Personal Assistant",
        text: "Get personalized responses tailored to your preferences, making interactions with ChatGPT feel like you're talking to your very own virtual assistant.",
    },
    {
        title: "Speak Any Language",
        text: "ChatGPT speaks your language, literally! Its multilingual support lets you chat effortlessly in different languages, breaking down communication barriers.",
    },
    {
        title: "Fits Anywhere You Chat",
        text: "Bring ChatGPT to your favorite apps and platforms effortlessly. Its seamless integration makes it a perfect companion for a smooth, enjoyable chatting experience across the digital world.",
    },
];

const Features = () => {
    return (
        <div className='gpt__features section__padding' id='features'>
            <div className='gpt__features-heading'>
                <h1 className='gradient__text'>The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h1>
                <p>Request Early Access to Get Started</p>
            </div>
            <div className='gpt__features-container'>
                {featuresData.map((feature, index) => (
                    <Feature title={feature.title} text={feature.text} key={feature.title + index} />
                ))}
            </div>
        </div>
    );
};

export default Features;
