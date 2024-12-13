"use client";

import Accordion from "./accordion";

export default function AskSec() {

    const items = [
        {
          title: "What is Next.js?",
          content: "Next.js is a React framework for production, providing features like server-side rendering and static site generation.",
        },
        {
          title: "Why use Tailwind CSS?",
          content: "Tailwind CSS is a utility-first CSS framework that allows for faster and more customizable styling.",
        },
        {
          title: "How do I deploy my app?",
          content: "You can deploy your Next.js app on platforms like Vercel, Netlify, or any Node.js server.",
        },
      ];

    return (
        <div className="grid grid-flow-col text-black container max-w-7xl mx-auto px-8 py-8 mb-20">

            <div className="w-[480px] ">
                <h2>ALl You Need to Know</h2>
                <p>All the Answer You Need, Right at your Figertips, So you can find what you are looking for without any hassle</p>
            </div>

            <div>
                <Accordion items={items}></Accordion>
            </div>
        </div>
    );
}