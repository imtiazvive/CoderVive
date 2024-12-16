/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
const card = ({ imgSrc, title, description }) => {
    return (
        <div className="w-full mx-auto h-auto  overflow-hidden  bg-white">
            <div className="w-full h-[400px] rounded-3xl overflow-hidden">
                <img src={imgSrc} alt={title} className="w-full h-full object-cover" />
            </div>
            <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 text-gray-800">{title}</h3>
                <p className="text-sm text-gray-600">{description}</p>
            </div>
        </div>
    );
};

export default card;