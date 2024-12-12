"use client";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "./whiteLogo.png";


export default function Footer() {
    return (
        // className="bg-white shadow-md fixed w-full z-50"
        <footer className="bg-gray-800 w-full text-white py-8">
            <div className="container max-w-7xl mx-auto px-4">
                {/* Top Section */}
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <Image
                            src={Logo}// Path to your logo in the public folder
                            alt="MyLogo"

                            width={120} // Adjust width as needed
                            height={40}  // Adjust height as needed
                            priority // Ensures the logo is loaded quickly
                        />
                        <p className="text-sm">Building solutions for the future</p>
                    </div>

                    <div className="flex space-x-6">
                        <a href="#" className="text-white hover:text-blue-600 font-medium">
                            About us
                        </a>
                        <a href="#" className="text-white hover:text-blue-600 font-medium">
                            Portfolio
                        </a>
                        <a href="#" className="text-white hover:text-blue-600 font-medium">
                            Testimonial
                        </a>
                        <a href="#" className="text-white hover:text-blue-600 font-medium">
                            Contact
                        </a>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-8 border-t border-gray-700 pt-4 text-center">

                </div>

                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <p className="text-sm text-gray-400">
                            © {new Date().getFullYear()} CoderVive. All rights reserved.
                        </p>
                    </div>

                    <div className="flex space-x-6">
                        <a
                            href="#"
                            className="text-gray-400 hover:text-white"
                            aria-label="Facebook"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                className="w-6 h-6"
                            >
                                <path d="M24 12c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 6.304 4.867 11.5 11.07 11.953v-8.437h-3.365v-3.516h3.365v-2.711c0-3.32 1.916-5.145 4.852-5.145 1.406 0 2.878.25 2.878.25v3.154h-1.621c-1.597 0-2.096.992-2.096 2.008v2.444h3.566l-.57 3.516h-2.996v8.437c6.203-.453 11.07-5.649 11.07-11.953z" />
                            </svg>
                        </a>
                        <a
                            href="#"
                            className="text-gray-400 hover:text-white"
                            aria-label="Twitter"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                className="w-6 h-6"
                            >
                                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.173-1.555-3.591-1.555-2.719 0-4.924 2.205-4.924 4.923 0 .386.044.762.127 1.124-4.092-.205-7.719-2.165-10.141-5.144-.424.724-.667 1.566-.667 2.465 0 1.701.866 3.199 2.181 4.078-.804-.026-1.562-.247-2.224-.616v.062c0 2.375 1.693 4.356 3.946 4.806-.413.113-.848.172-1.296.172-.316 0-.624-.031-.927-.089.625 1.951 2.438 3.374 4.584 3.412-1.68 1.316-3.799 2.101-6.102 2.101-.396 0-.788-.023-1.175-.068 2.179 1.396 4.768 2.211 7.548 2.211 9.055 0 14.01-7.503 14.01-14.009 0-.213-.005-.425-.014-.637.961-.694 1.796-1.562 2.457-2.549z" />
                            </svg>
                        </a>
                        <a
                            href="#"
                            className="text-gray-400 hover:text-white"
                            aria-label="LinkedIn"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                className="w-6 h-6"
                            >
                                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.35c-.966 0-1.5-.672-1.5-1.5s.516-1.5 1.5-1.5 1.5.672 1.5 1.5-.516 1.5-1.5 1.5zm13.5 10.35h-3v-4.5c0-1.08-.396-1.818-1.38-1.818-.756 0-1.204.513-1.4 1.008-.072.171-.091.41-.091.647v4.663h-3v-9h3v1.08c.3-.465 1.17-1.08 2.7-1.08 1.98 0 3.47 1.293 3.47 4.058v4.942z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
