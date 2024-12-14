"use client";
import React, { useState } from "react";
import { SlCalender } from "react-icons/sl";

export default function From() {

    const [formData, setFormData] = useState({
        name: "",
        subject: "",
        email: "",
        service: "",
        companyName: "",
        idea: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
    };

    return (
        <div id="contact" className="container max-w-7xl mx-auto px-8 py-8 mb-20">
            <div className="lg:flex lg:gap-10  ">
                <div className=" lg:flex-1  w-full text-black">
                    <h1 className="text-4xl font-bold">Ready to elevate <br /> your project?</h1>
                    <p className="text-sm mt-2">Our team is here to understand your needs and <br /> turn your ideas into reality</p>
                    <div className="mt-24">
                        <p>Lets schedule a Call with-</p>
                        <button className="bg-[#00000098] text-white rounded-lg p-2 flex  gap-2 justify-center items-center"> <SlCalender /> Schedule a 20 Min Call</button>
                    </div>
                </div>

                <div className=" mt-8 lg:mt-0 lg:flex-1 w-full ">
                    <form
                        onSubmit={handleSubmit}
                        className="mx-auto p-6 bg-[#00000005] rounded-lg space-y-4"
                    >
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Name*
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="John C"
                                required
                                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Subject*
                            </label>
                            <input
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder="eg."
                                required
                                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Email*
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="info.yourmail@email.com"
                                required
                                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Service Required*
                            </label>
                            <select
                                name="service"
                                value={formData.service}
                                onChange={handleChange}
                                required
                                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                            >
                                <option value="">Select a Service</option>
                                <option value="Web Development">Web Development</option>
                                <option value="App Development">App Development</option>
                                <option value="UI/UX Design">UI/UX Design</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Company Name
                            </label>
                            <input
                                type="text"
                                name="companyName"
                                value={formData.companyName}
                                onChange={handleChange}
                                placeholder="John Carter"
                                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Tell us about your idea!
                            </label>
                            <textarea
                                name="idea"
                                value={formData.idea}
                                onChange={handleChange}
                                placeholder="Please describe what's on your mind?"
                                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                            />
                        </div>

                        <div className="w-full lg:flex  gap-4 justify-center items-center">
                            <button
                                type="submit"
                                className=" px-4 py w-full h-8 lg:w-4/12 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-600 transition duration-200"
                            >
                                Submit
                            </button>

                            <div className=" flex flex-col text-sm text-center lg:text-start ml-5 lg:ml-0 text-gray-500 mt-3 lg:mt-0">
                            
                            Prefer email?{" "}
                            <a
                                href="mailto:hello.codervive.com"
                                className="text-black font-bold hover:underline"
                            >
                                hello.codervive.com
                            </a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}