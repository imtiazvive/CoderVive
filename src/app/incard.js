
"use client";
import React from "react";

function ReviewCard() {
  const review = {
    title: "A Leader in Web Development",
    review: `CoderVive stands out as a leader in web development, crafting responsive, high-performing, and visually stunning websites tailored to each client's unique needs. Whether it's a simple landing page or a dynamic e-commerce platform, our team ensures that every website not only meets industry standards but exceeds user expectations.<br> 
            We understand that a website is the digital face of a business. That's why we go the extra mile to create designs that are not only beautiful but also functional and optimized for search engines. The result is a website that not only captivates but also converts.`,
    rating: 5,
    name: "Jamrul",
    picture: "https://via.placeholder.com/450", // Replace with the actual image URL
  };

  return (
    <div className="max-w-sm mx-auto bg-white border rounded-lg shadow-lg overflow-hidden" >
      {/* Image */}
      <div className="w-full h-48">
        <img
          src={review.picture}
          alt={`${review.name}'s review`}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{review.title}</h3>

        {/* Rating */}
        <p className="text-yellow-500 mb-2">{"⭐".repeat(review.rating)}</p>

        {/* Review Text */}
        <p
          className="text-gray-600 text-sm mb-4"
          style={{
            wordWrap: "break-word",
          }}
          dangerouslySetInnerHTML={{ __html: review.review }}
        ></p>

        {/* Reviewer Name */}
        <h4 className="text-lg font-medium text-gray-700">- {review.name}</h4>
      </div>
    </div>
  );
}

export default ReviewCard;
