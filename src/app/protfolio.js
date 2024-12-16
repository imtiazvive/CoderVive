"use client";
import React, { useState } from "react";
import Card from "./Card";



export default function Protfolio() {
    return (
        <div  id="portfolio" className="container max-w-7xl mx-auto px-8 py-8 " >


            <div className="text-black">
                <p className="text-sm">PROTFOLIO</p>
                <h1>Our Featured Projects</h1>
                <p className="text-sm">Your Vision, Our Expertise; Transforming Ideas into Results</p>
            </div>

            <div className="grid gap-11 sm:grid-cols-1 lg:grid-cols-2 mt-8">
                <Card 
                    imgSrc="https://img.freepik.com/free-photo/creative-reels-composition_23-2149711507.jpg"
                    title="Transforming Farm in Finland"
                    description="Explore the breathtaking views of nature.Explore the breathtaking views of nature.Explore the breathtaking views of nature."
                />
                <Card
                    imgSrc="https://img.freepik.com/free-photo/creative-reels-composition_23-2149711507.jpg"
                       title="Transforming Farm in Finland"
                    description="Explore the breathtaking views of nature.Explore the breathtaking views of nature.Explore the breathtaking views of nature."
                />
                <Card
                    imgSrc="https://img.freepik.com/free-photo/creative-reels-composition_23-2149711507.jpg"
                      title="Transforming Farm in Finland"
                    description="Explore the breathtaking views of nature.Explore the breathtaking views of nature.Explore the breathtaking views of nature."
                />
                <Card
                    imgSrc="https://img.freepik.com/free-photo/creative-reels-composition_23-2149711507.jpg"
                     title="Transforming Farm in Finland"
                    description="Explore the breathtaking views of nature.Explore the breathtaking views of nature.Explore the breathtaking views of nature."
                />



            </div>
            <div className="text-center">

                <button className="bg-blue-500 mt-8 p-2 rounded-md ">View All Case Study</button>
            </div>
        </div>
    );
}