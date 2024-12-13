/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useState, useEffect, useRef } from "react";


function reviewcard() {

    const scrollContainerRef = useRef(null);
    const scrollInterval = useRef(null);

    const reviews = [
        {
            name: "Jamrul",
            review: "This service is amazing! Highly recommended.",
            rating: 5,
        },
        {
            name: "Kamrunl",
            review: "Great experience. The team was very professional.",
            rating: 4,
        },
        {
            name: "Hamrul",
            review: "Excellent service and support. Will use again!",
            rating: 5,
        },
        {
            name: "Damrul",
            review: "This service is amazing! Highly recommended.",
            rating: 5,
        },
        {
            name: "Bamrul",
            review: "Great experience. The team was very professional.",
            rating: 4,
        },
        {
            name: "Gamrul",
            review: "Excellent service and support. Will use again!",
            rating: 5,
        },
    ];

    const startScrolling = () => {
        const scrollContainer = scrollContainerRef.current;
        let scrollAmount = scrollContainer.scrollLeft;

        const scroll = () => {
            if (scrollContainer) {
                if (scrollAmount < scrollContainer.scrollWidth - scrollContainer.clientWidth) {
                    scrollAmount += 1;
                    scrollContainer.scrollLeft = scrollAmount;
                } else {
                    scrollAmount = 0;
                }
            }
        };

        scrollInterval.current = setInterval(scroll, 20);
    };

    const stopScrolling = () => {
        if (scrollInterval.current) {
            clearInterval(scrollInterval.current);
        }
    };

    useEffect(() => {
        startScrolling();
        return () => stopScrolling();
    }, []);

    // 021084357

    return (
        <div className="container max-w-7xl mx-auto px-8 py-8 mb-20">
            <div
                className="overflow-x-auto flex space-x-4 p-4"
                ref={scrollContainerRef}
                style={{ whiteSpace: "nowrap", scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
                <style>{`
        .overflow-x-auto::-webkit-scrollbar {
          display: none;
        }
      `}</style>
                {reviews.map((review, index) => (
                    <div
                        className="flex-shrink-0 w-auto h-80 content-center bg-[#00000005] text-black  p-4 border rounded-lg shadow-md bg-white text-center hover:bg-gray-100"
                        key={index}
                        onMouseEnter={stopScrolling}
                        onMouseLeave={startScrolling}
                    >
                        <h3 className="text-lg font-semibold mb-2">{review.name}</h3>
                        <p className="text-sm text-gray-600 mb-2">{review.review}</p>
                        <p className="text-yellow-500">{"⭐".repeat(review.rating)}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default reviewcard;
