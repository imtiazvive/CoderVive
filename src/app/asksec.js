"use client";
import React, { useState } from "react";
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
        <div className="grid  lg:grid-flow-col text-black container max-w-7xl mx-auto px-8 py-8 mb-20">

            <div className="lg:w-[480px] ">
                <h2 className="text-4xl font-bold">All You Need to<br /> Know</h2>
                <p className="mt-2">All the Answer You Need, Right at your Figertips, So you can find what you are looking for without any hassle</p>
            </div>

            <div className="mt-8 lg:mt-0">
                <Accordion items={items}></Accordion>
            </div>
        </div>
    );
}