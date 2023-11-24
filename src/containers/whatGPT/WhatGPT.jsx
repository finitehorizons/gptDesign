import React from "react";

import "./whatGPT.css";
import { Feature } from "../../components";

const WhatGPT = () => {
    return (
        <div className='gpt__whatgpt section__margin' id='WhatGPT'>
            <div className='gpt__whatgpt-feature'>
                <Feature
                    title='What is GPT?'
                    text='GPT, or Generative Pre-trained Transformer, is a revolutionary language model by OpenAI, capable of understanding and generating human-like text. Trained on diverse internet data, GPT excels in various language tasks, making it a versatile tool for applications ranging from content creation to conversation.'
                />
            </div>
            <div className='gpt__whatgpt-heading'>
                <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
                <p>Explore the Library</p>
            </div>
            <div className='gpt__whatgpt-container'>
                <Feature
                    title='Chatbots'
                    text='GPT-powered chatbots redefine user interactions with dynamic, context-aware conversations, providing a personalized, human-like touch. They excel in customer support, enhance engagement, and streamline business operations.'
                />
                <Feature
                    title='Knowledgebase'
                    text='GPT transforms knowledgebases into dynamic, conversational resources, enabling users to interact naturally and receive context-aware responses. Its adaptability ensures up-to-date and relevant information dissemination.'
                />
                <Feature
                    title='Education'
                    text="GPT enhances education with interactive platforms for personalized learning. Students engage in natural language discussions, receive tailored explanations, and benefit from GPT's adaptability and vast knowledge base, providing tailored support for diverse learning styles."
                />
            </div>
        </div>
    );
};

export default WhatGPT;
