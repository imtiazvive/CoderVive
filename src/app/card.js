/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
const Card = ({ imgSrc, title, description }) => {
  return (
      <div className="w-full mx-auto h-80 rounded-3xl overflow-hidden shadow-md bg-white">
          <img src={imgSrc} alt={title} className="w-full h-48 object-cover" />
          <div className="p-4">
              <h3 className="text-lg font-semibold mb-2 text-gray-800">{title}</h3>
              <p className="text-sm text-gray-600">{description}</p>
          </div>
      </div>
  );
};

export default Card;