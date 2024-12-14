/* eslint-disable react-hooks/rules-of-hooks */

"use client";
import React, { useState, useEffect, useRef } from "react";


function reviewcard() {

    const scrollContainerRef = useRef(null);
    const scrollInterval = useRef(null);

    const reviews = [
        {
            name: "Jamrul",
            review: "CoderVive stands out as a leader in web development, crafting responsive, high-performing, and visually stunning websites tailored to each client's unique needs. Whether it's a simple landing page or a dynamic e-commerce platform, our team ensures that every website not only meets industry standards but exceeds user expectations. We understand that a website is the digital face of a business. That's why we go the extra mile to create designs that are not only beautiful but also functional and optimized for search engines. The result is a website that not only captivates but also converts.",
            rating: 5,
        },
        {
            name: "Kamrunl",
            review: "The team at CoderVive is incredibly professional and attentive to every detail. They not only delivered on time but also ensured that the website exceeded our expectations. From the first consultation to the final handoff, the entire experience was seamless. CoderVive’s dedication to quality, customer satisfaction, and innovative design is evident in the work they produced. The team took the time to understand our business needs and delivered a website that perfectly aligns with our brand. I would highly recommend CoderVive to anyone looking for exceptional web development services.",
            rating: 5,
        },
        {
            name: "Fahad",
            review: "CoderVive transformed our website into a powerful tool for our business. Their approach is both creative and efficient, ensuring that we have a website that's visually stunning and functional. The team did an excellent job with user interface design, making the website not only easy to navigate but also extremely fast. They also provided exceptional support, addressing all our concerns and making updates quickly. The SEO optimization and mobile responsiveness have greatly improved our online presence. I couldn't be more satisfied with the results and would recommend them without hesitation.",
            rating: 4,
        },
        {
            name: "Shama",
            review: "Absolutely fantastic! CoderVive helped us create a seamless user experience with a modern, responsive design. Our site now works perfectly on all devices and has greatly improved our user engagement. The team at CoderVive was quick to understand our requirements and made suggestions that significantly improved our initial ideas. They worked efficiently and provided regular updates, so we always knew where we stood in the process. With their expertise in both design and functionality, they have helped our business thrive online. I would highly recommend them to anyone in need of web development services.",
            rating: 5,
        },
        {
            name: "Riyad",
            review: "We had a great experience working with CoderVive. Their attention to detail, speed, and customer support were outstanding. They have truly brought our vision to life, and we are thrilled with the final product. The website they built for us has streamlined our operations and provided a great platform for growth. CoderVive didn’t just create a website; they delivered a tool that will help us grow our business for years to come. The process was smooth from start to finish, and the team’s dedication to making sure everything was perfect was impressive. Highly recommend them!",
            rating: 4,
        },
        {
            name: "Tariq",
            review: "Great team! They went above and beyond to ensure that our website was not only functional but also visually appealing. The design process was smooth, and CoderVive made sure to align the final result with our brand identity. The website now runs seamlessly across all devices, and we have noticed an increase in both traffic and engagement. Additionally, the team provided excellent ongoing support and made sure to address any issues promptly. Their expertise in SEO and UX design has had a measurable impact on our business. I would definitely recommend their services to anyone looking to build a top-tier website.",
            rating: 5,
        },
        {
            name: "Lubna",
            review: "Working with CoderVive was a smooth and rewarding experience. Their communication and execution were top-notch, and the final product was exactly what we were looking for. The team was highly professional and kept us updated throughout the process, ensuring that the website was built according to our exact specifications. We are particularly impressed by how quickly they were able to integrate all of our feedback without compromising the quality of the final design. CoderVive’s creative team really knows how to turn a basic concept into something extraordinary. We couldn’t be happier with the result.",
            rating: 5,
        },
        {
            name: "Mubin",
            review: "The team at CoderVive is very skilled and responsive. They understood our requirements well and delivered a site that perfectly fits our needs. We’re very happy with the results. From the initial concept to the final product, the communication was clear and effective, and they really took the time to listen to our feedback. The website now reflects our brand values and is optimized for both user experience and search engine performance. Working with CoderVive was a pleasure, and we look forward to future projects with them. Their level of professionalism is unmatched in the industry.",
            rating: 4,
        },
        {
            name: "Muneeb",
            review: "It’s rare to find a team that not only meets deadlines but also delivers exceptional quality. CoderVive did just that, building a website that’s fast, modern, and perfectly optimized. From the get-go, the team was dedicated to ensuring that the project was completed on time and to the highest standards. They made sure the website was mobile-responsive, easy to navigate, and loaded quickly, which has had a significant impact on our traffic. We’ve seen an increase in conversions and an overall improvement in user satisfaction. We highly recommend CoderVive for any web development needs.",
            rating: 5,
        },
        {
            name: "Zahid",
            review: "We are incredibly pleased with the work CoderVive did on our site. The design is both beautiful and functional, and they ensured that the user experience was top of mind throughout the process. They took the time to understand our brand and audience, and the website is now a perfect representation of who we are. The attention to detail was evident, and they managed to incorporate all of our requested features seamlessly. In addition, their post-launch support has been fantastic, and they continue to help us optimize the site for better performance. Highly recommend their services to anyone in need of a professional web development team.",
            rating: 5,
        },
        {
            name: "Sadia",
            review: "CoderVive took our business to the next level with a sleek and responsive website. The team was easy to work with and provided excellent customer service from start to finish. They made sure we were satisfied with every step of the design process and took the time to address all our concerns. Since the launch, our website has received rave reviews from customers, and we’ve seen a noticeable improvement in online engagement. The team also helped us optimize the website for search engines, which has helped us gain more visibility online. Overall, I am very happy with their work and would not hesitate to recommend them.",
            rating: 4,
        },
        {
            name: "Tariq",
            review: "Our website redesign was in great hands with CoderVive. They delivered a user-friendly and aesthetically pleasing design that helped elevate our brand’s online presence. The team really listened to our needs and came up with a design that was not only functional but also unique and engaging. They paid attention to every detail, ensuring that the website was easy to navigate and met all of our business goals. Thanks to CoderVive, our site is now a major asset to our business. We are extremely pleased with the result and will continue to work with them in the future.",
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
        <div className=" mx-auto  lg:mb-20">
            <div
                className="overflow-x-auto flex space-x-4 p-4"
                ref={scrollContainerRef}
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
                <style>{`
        .overflow-x-auto::-webkit-scrollbar {
          display: none;
        }
      `}</style>
                {reviews.map((review, index) => (
                    <div
                        className="flex-shrink-0 w-[450px] md:h-auto lg:h-80 content-start overflow-hidden bg-[#00000005] text-black p-4 border rounded-2xl  bg-gray-100 text-start hover:bg-gray-50"
                        key={index}
                        onMouseEnter={stopScrolling}
                        onMouseLeave={startScrolling}
                    >
                        <p className="text-yellow-500">{"⭐".repeat(review.rating)}</p>
                        <p
                            className="text-sm w-full  text-gray-600 mb-2 overflow-hidden"
                            style={{
                                display: "-webkit-box",
                                WebkitBoxOrient: "vertical",
                                overflow: "hidden",
                                wordWrap: "break-word",
                            }}
                            dangerouslySetInnerHTML={{ __html: review.review }}
                        />

                        <div className="flex gap-4">
                            <img src="https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg" className="w-10 h-10 rounded-full"/>
                            <div>
                                <h3 className="text-lg font-semibold mb-2">{review.name}</h3>
                                <p>Founder & CEO at CoderVive</p>
                            </div>
                        </div>

                    </div>

                ))}
            </div>
        </div>
    )
}

export default reviewcard;
