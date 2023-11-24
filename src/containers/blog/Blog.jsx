import React from "react";

import { Article } from "../../components";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";
import "./blog.css";

const blogEntries = [
    {
        date: "Jan 15, 2023",
        title: "Unleashing the Power of ChatGPT: A New Era in Conversational AI",
    },
    {
        date: "Feb 8, 2023",
        title: "AI Language Models: Bridging Gaps and Enhancing Communication",
    },
    {
        date: "Mar 21, 2023",
        title: "ChatGPT: Your Personalized Assistant in the Digital World",
    },
    {
        date: "Apr 12, 2023",
        title: "Multilingual Magic: How ChatGPT Breaks Language Barriers",
    },
    {
        date: "May 5, 2023",
        title: "The Fast Lane to Answers: ChatGPT's Rapid Query Resolution",
    },
];

const Blog = () => {
    return (
        <div className='gpt__blog section__padding' id='blog'>
            <div className='gpt__blog-header'>
                <h1 className='gradient__text'>Discover the wonders of AI with us.</h1>
            </div>
            <div className='gpt__blog-container'>
                <div className='gpt__blog-container_groupA'>
                    <Article imgUrl={blog01} date={blogEntries[0].date} title={blogEntries[0].title} />
                </div>
                <div className='gpt__blog-container_groupB'>
                    <Article imgUrl={blog02} date={blogEntries[1].date} title={blogEntries[1].title} />
                    <Article imgUrl={blog03} date={blogEntries[2].date} title={blogEntries[2].title} />
                    <Article imgUrl={blog04} date={blogEntries[3].date} title={blogEntries[3].title} />
                    <Article imgUrl={blog05} date={blogEntries[4].date} title={blogEntries[4].title} />
                </div>
            </div>
        </div>
    );
};

export default Blog;
